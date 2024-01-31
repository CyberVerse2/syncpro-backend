import { catchAsync } from "../../common/utils/errorHandler.js";
import { AppResponse } from "../../common/utils/appResponse.js";
import AppError from "../../common/utils/appError.js";
import {
  newProject,
  deleteProject,
  getProject,
  updateProject,
} from "./project.service.js";
import { Team } from "../team/team.schema.js";

export const httpNewProject = catchAsync(async (req, res) => {
  const { user } = req;
  const { teamId } = req.params;
  const { title, description, code, owner, deadline } = req.body;
  if (!(title || description || code || owner || deadline)) {
    throw new AppError("All fields are required", 400);
  }
  const currentTeam = await Team.findById(teamId);
  if (!currentTeam) throw new AppError("Team with the id not found", 404);

  const project = await newProject(
    user.id,
    title,
    description,
    code,
    owner,
    deadline,
  );

  if (!project) {
    throw new AppError("Error in creating the project", 500);
  }

  currentTeam.projects.push(project);
  await currentTeam.save();

  return new AppResponse(res, 201, project, "Project created successfully");
});

export const httpGetProject = catchAsync(async (req, res) => {
  const { projectId } = req.params;
  const project = await getProject(projectId);
  if (!project) throw new AppError("Error in fetching the project", 500);
  return AppResponse(res, 200, project, "Project fetched successfully");
});

export const httpGetTeamProjects = catchAsync(async (req, res) => {
  const { teamId } = req.params;
  if (!teamId) throw new AppError("Team id is required", 400);

  const team = await Team.findById(teamId).populate("projects");
  if (!team) throw new AppError("Team with the id not found", 404);

  const members = team.projects;

  return AppResponse(res, 200, { members }, "Members fetched successfully");
});

export const httpUpdateProject = catchAsync(async (req, res) => {
  const { projectId } = req.params;
  const { title, description, code, owner } = req.body;
  if (!(title || description || code || owner)) {
    throw new AppError("All fields are required", 400);
  }
  const updatedProject = await updateProject(projectId, req.body);
  if (!updatedProject) {
    throw new AppError("Error in updating the project", 500);
  }
  return AppResponse(res, 200, updatedProject, "Project updated successfully");
});

export const httpDeleteProject = catchAsync(async (req, res) => {
  const { projectId } = req.params;
  const deletedProject = await deleteProject(projectId);
  if (!deletedProject) throw new AppError("Error in deleting the project", 500);
  return AppResponse(res, 200, null, "Project deleted successfully");
});

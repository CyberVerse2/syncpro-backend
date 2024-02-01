import { Router } from "express";
import {
  httpDeleteProject,
  httpGetProjectById,
  httpGetTeamProjects,
  httpNewProject,
  httpUploadProjectBanner,
  httpUpdateProject,
} from "./project.controller.js";

export const projectRouter = Router();

projectRouter.get("/:projectId", httpGetProjectById);
projectRouter.get("/:teamId", httpGetTeamProjects);
projectRouter.post("/", httpNewProject);
projectRouter.patch("/:projectId/banner/upload", httpUploadProjectBanner);
projectRouter.patch("/:projectId", httpUpdateProject);
projectRouter.delete("/:projectId", httpDeleteProject);

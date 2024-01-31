import { Router } from "express";
import {
  httpDeleteProject,
  httpGetProject,
  httpGetTeamProjects,
  // httpGetUserProjects,
  httpNewProject,
  httpUpdateProject,
} from "./project.controller.js";

export const projectRouter = Router();

projectRouter.get("/:projectId", httpGetProject);
projectRouter.post("/new", httpNewProject);
projectRouter.get("/:teamId", httpGetTeamProjects);
projectRouter.patch("/:projectId", httpUpdateProject);
projectRouter.delete("/:projectId", httpDeleteProject);

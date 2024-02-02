import { Router } from "express";
import {
  httpDeleteProject,
  httpGetProjectById,
  httpGetTeamProjects,
  httpNewProject,
  httpUploadProjectBanner,
  httpUpdateProject,
} from "./project.controller.js";
import { protect } from "../../common/middlewares/protect.js";

export const projectRouter = Router();

projectRouter.use(protect)

projectRouter.get("/:projectId", httpGetProjectById);
projectRouter.get("/team/:teamId", httpGetTeamProjects);
projectRouter.post("/:teamId", httpNewProject);
projectRouter.patch("/:projectId/banner/upload", httpUploadProjectBanner);
projectRouter.patch("/:projectId", httpUpdateProject);
projectRouter.delete("/:projectId", httpDeleteProject);

import { Router } from "express";
import {
  httpGetUserTeams,
  httpNewTeam,
  httpGetTeamById,
  httpDeleteTeam,
} from "./team.controller.js";
import { protect } from "../../common/middlewares/protect.js";

export const teamRouter = Router();

teamRouter.use(protect);

teamRouter.get("/", httpGetUserTeams);
teamRouter.get("/:teamId", httpGetTeamById);
teamRouter.post("/", httpNewTeam);
teamRouter.delete("/:teamId", httpDeleteTeam);

import { Router } from "express";
import {
  httpGetUserTeams,
  httpNewTeam,
  httpGetTeamById,
  httpDeleteTeam,
} from "./team.controller.js";

export const teamRouter = Router();

teamRouter.get("/", httpGetUserTeams);
teamRouter.get("/:teamId", httpGetTeamById);
teamRouter.post("/", httpNewTeam);
teamRouter.delete("/:teamId", httpDeleteTeam);

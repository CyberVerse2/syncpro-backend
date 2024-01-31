import { Router } from "express";
import { httpGetTeamMembers } from "./member.controller";

export const memberRouter = Router();

memberRouter.get('/:teamId', httpGetTeamMembers);
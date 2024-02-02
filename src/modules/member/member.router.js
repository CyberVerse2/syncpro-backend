import { Router } from "express";
import {
  httpAddMemberToTeam,
  httpGetTeamMembers,
  httpUpdateMemberRole,
} from "./member.controller.js";
import { protect } from "../../common/middlewares/protect.js";

export const memberRouter = Router();

memberRouter.use(protect)

memberRouter.get("/:teamId", httpGetTeamMembers);
memberRouter.post('/add/:teamCode', httpAddMemberToTeam);
memberRouter.patch("/role/update", httpUpdateMemberRole);

import { catchAsync } from "../../common/utils/errorHandler.js";
import { AppResponse } from "../../common/utils/appResponse.js";
import AppError from "../../common/utils/appError.js";
import { Team } from "../team/team.schema.js";
import { findTeam } from "../team/team.service.js";
import { createNewMember } from "./member.service.js";

export const httpAddMemberToTeam = catchAsync(async (req, res) => {
  const { user } = req;
  const { teamCode } = req.body;

  const team = await findTeam("code", teamCode);
  if (!team) throw new AppError("Team  with the code not found", 404);

  const newMember = await createNewMember({ team, user: user.id });
  if (!newMember) throw new AppError("Error in creating member for team");

  team.members.push(newMember);
  await team.save();

  return AppResponse(res, 201, newMember, "User added successfully");
});

export const httpGetTeamMembers = catchAsync(async (req, res) => {
  const { teamId } = req.params;
  if (!teamId) throw new AppError("Team id is required", 400);

  const team = await Team.findById(teamId).populate("members");
  if (!team) throw new AppError("Team with the id not found", 404);

  const members = team.members;

  return AppResponse(res, 200, { members }, "Members fetched successfully");
});

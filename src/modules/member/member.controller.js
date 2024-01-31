import { catchAsync } from "../../common/utils/errorHandler.js";
import { AppResponse } from "../../common/utils/appResponse.js";
import AppError from "../../common/utils/appError.js";
import { Team } from "../team/team.schema.js";

export const httpGetTeamMembers = catchAsync(async (req, res) => {
  const { teamId } = req.params;
  if (!teamId) throw new AppError('Team id is required', 400);

  const team = await Team.findById(teamId).populate('members');
  if (!team) throw new AppError('Team with the id not found', 404);

  const members = team.members;

  return AppResponse(res, 200, { members }, 'Members fetched successfully');
});
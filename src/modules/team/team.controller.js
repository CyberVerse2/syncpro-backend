import { catchAsync } from '../../common/utils/errorHandler.js';
import AppError from '../../common/utils/appError.js';
import { AppResponse } from '../../common/utils/appResponse.js';
import { Member } from '../member/member.schema.js';
import { Team } from './team.schema.js';
import { findTeam } from './team.service.js';

export const httpNewTeam = catchAsync(async (req, res) => {
  const { user } = req;
  const { name, description } = req.body;
  if (!(name || description)) {
    throw new AppError('All fields are required', 400);
  }
  const team = await Team.create({ name, description, owner: user.id });
  if (!team) {
    throw new AppError('Error in creating the team', 500);
  }
  return AppResponse(res, 201, team, 'Team created successfully');
});

export const httpAddMemberToTeam = catchAsync(async (req, res) => {
  const { user } = req;
  const { teamCode } = req.body;

  const team = await findTeam('code', teamCode);
  if (!team) throw new AppError('Team  with the code not found', 404);

  const newMember = await Member.create({ team, user: user.id });
  if (!newMember) throw new AppError('Error in creating member for team');

  team.members.push(newMember);
  await team.save();

  return AppResponse(res, 201, newMember, 'User added successfully');
});

export const httpGetUserTeams = catchAsync(async (req, res) => {
  const { user } = req;
  const teams = user.teams;
  return AppResponse(res, 200, teams, 'Teams fetched successfully');
});



import { catchAsync } from '../../common/utils/errorHandler.js';
import AppError from '../../common/utils/appError.js';
import { AppResponse } from '../../common/utils/appResponse.js';
import { Team } from './team.schema.js';
import { generateTeamCode } from '../../common/utils/helper.js';
import { deleteTeam } from './team.service.js';

export const httpNewTeam = catchAsync(async (req, res) => {
  const { user } = req;
  const { name, description } = req.body;
  if (!(name || description)) {
    throw new AppError('All fields are required', 400);
  }

  const team = await Team.create({ name, description, owner: user.id, code: generateTeamCode() });
  if (!team) {
    throw new AppError('Error in creating the team', 500);
  }

  return AppResponse(res, 201, team, 'Team created successfully');
});

export const httpGetTeamById = catchAsync(async (req, res) => {
  const { teamId } = req.params;
  if (!teamId) throw new AppError('Team id is required', 400);

  const team = await Team.findById(teamId);
  if (!team) throw new AppError('Team with the id not found', 404);
  return AppResponse(res, 200, team, 'Team fetched successfully');
});

export const httpGetUserTeams = catchAsync(async (req, res) => {
  const { user } = req;
  const teams = user.teams;
  return AppResponse(res, 200, teams, 'Teams fetched successfully');
});

export const httpDeleteTeam = catchAsync(async (req, res) => {
  const { teamId } = req.params
  if (!teamId) throw new AppError('Team id is required', 400)  
  const team = await deleteTeam(teamId)
  if (!team) throw new AppError('Team with the id not found', 404)
  return AppResponse(res, 200, null, 'Team deleted successfully')
})
import { Router } from 'express';
import {
  // httpAddMemberToTeam,
  httpGetUserTeams,
  httpNewTeam,
  httpGetTeamById,
  httpDeleteTeam
} from './team.controller.js';

export const teamRouter = Router();

teamRouter.get('/', httpGetUserTeams);
teamRouter.get('/:teamId', httpGetTeamById);
teamRouter.post('/', httpNewTeam);
// teamRouter.post('/:teamId/member/add', httpAddMemberToTeam);
teamRouter.delete('/:teamId', httpDeleteTeam);

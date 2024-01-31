import { Router } from 'express';
import {
  httpAddMemberToTeam,
  httpGetAllUserTeams,
  httpNewTeam
} from './team.controller.js';

export const teamRouter = Router();

teamRouter.get('/', httpGetAllUserTeams);
teamRouter.post('/', httpNewTeam);
teamRouter.post('/:teamId/member/add', httpAddMemberToTeam);

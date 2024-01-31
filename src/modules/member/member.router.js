import { Router } from 'express';
import { httpAddMemberToTeam, httpGetTeamMembers } from './member.controller.js';

export const memberRouter = Router();

memberRouter.get('/:teamId', httpGetTeamMembers);
memberRouter.post('/:teamId/member/add', httpAddMemberToTeam);

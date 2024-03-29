import { catchAsync } from '../../common/utils/errorHandler.js';
import { AppResponse } from '../../common/utils/appResponse.js';
import AppError from '../../common/utils/appError.js';
import { Team } from '../team/team.schema.js';
import { createNewMember, updateMember } from './member.service.js';

export const httpAddMemberToTeam = catchAsync(async (req, res) => {
  const { user } = req;
  const { teamCode } = req.params;
  if (!teamCode) throw new AppError('Team code is required', 400);

  const team = await Team.findOne({ teamCode }).populate('members').exec();
  if (!team) throw new AppError('Team with the code not found', 404);
  const isMember = team.members.some((member) => member.user.toString() == user.id);
  console.log(isMember);
  if (isMember) throw new AppError('User is already a member of the team', 400);

  const newMember = await createNewMember({ team: team.id, user: user.id });
  if (!newMember) throw new AppError('Error in creating member for team');

  team.members.push(newMember);
  await team.save();

  return AppResponse(res, 201, newMember, 'Member added successfully');
});

export const httpUpdateMemberRole = catchAsync(async (req, res) => {
  const { memberId, role } = req.query;
  console.log(memberId, role)
  if (!memberId || !role) throw new AppError(`Please input the required fields`, 400);

  const member = await updateMember(memberId, { role });
  if (!member) throw new AppError(`Member with the id not found`, 404);

  return AppResponse(res, 200, member, `Member updated successfully`);
});

export const httpGetTeamMembers = catchAsync(async (req, res) => {
  const { teamId } = req.params;
  if (!teamId) throw new AppError('Team id is required', 400);

  const team = await Team.findById(teamId).populate('members');
  if (!team) throw new AppError('Team with the id not found', 404);

  const members = team.members;

  return AppResponse(res, 200, members, 'Members fetched successfully');
});

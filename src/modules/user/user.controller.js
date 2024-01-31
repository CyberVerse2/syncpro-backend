import { catchAsync } from '../../common/utils/errorHandler.js';
import { AppResponse } from '../../common/utils/appResponse.js';
import AppError from '../../common/utils/appError.js';
import { updateUser, deleteUser } from './user.service.js';

export const httpGetCurrentUser = catchAsync(async (req, res) => {
  const { user } = req;
  return AppResponse(res, 200, user, 'Current user fetched successfully');
});

export const httpUpdateUser = catchAsync(async (req, res) => {
  const { user } = req;
  const { username, email, password } = req.body;
  if (username || email || password) {
    throw new AppError('At least one field is required', 400);
  }
  const updatedUser = await updateUser(user.id, req.body);
  if (!updatedUser) {
    throw new AppError('Error in updating user', 500);
  }
  return AppResponse(res, 200, updatedUser, 'User updated successfully');
});

export const httpDeleteUser = catchAsync(async (req, res) => {
  const { user } = req;
  const deletedUser = await deleteUser(user.id);
  await deletedUser.save();
  return AppResponse(res, 200, null, 'User deleted successfully');
});

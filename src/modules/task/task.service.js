import AppError from '../../common/utils/appError.js';
import { Project } from '../project/project.schema.js';
import { findMember } from '../member/member.service.js';
import { Task } from './task.schema.js';

export async function createNewTask(projectId, title, description, deadline, priority) {
  const currentProject = await Project.findById(projectId);
  if (!currentProject) throw new AppError('Project with the id not found', 404);
  const task = await Task.create({
    project: projectId,
    title,
    description,
    deadline,
    priority
  });
  currentProject.tasks.push(task);
  await currentProject.save();

  return task;
}

export const getProjectTasks = async (projectId) => {
  const currentProject = await Project.findById(projectId).populate('tasks').exec();
  if (!currentProject) throw new AppError('Project with the id was not found', 404);
  const tasks = currentProject.tasks;
  return tasks;
};

export async function getTaskById(taskId) {
  const task = await Task.findById(taskId);
  return task;
}

export async function assignTaskToMember(taskId, memberId) {
  const member = await findMember('_id', memberId);
  if (!member) throw new AppError(`Member with the id not found`, 404);
  const task = await updateTask(taskId, { assignedTo: memberId });
  if (!task) throw new AppError(`Task with the id not found`, 404);
  member.tasks.push(task);
  await member.save();
  return task;
}

export async function updateTask(taskId, body) {
  const updatedTask = await Task.findByIdAndUpdate(taskId, body, { new: true });
  return updatedTask;
}
export async function deleteTask(taskId) {
  const deletedTask = await Task.findByIdAndDelete(taskId);
  return deletedTask;
}

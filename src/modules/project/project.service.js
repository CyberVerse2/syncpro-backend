import { Project } from './project.schema.js';

export async function newProject(userId, title, description, code, deadline) {
  const newProject = await Project.create({ title, description, code, owner: userId, deadline });
  return newProject;
}

export async function getProject(projectId) {
  const project = await Project.findById(projectId).populate('tasks').populate('members').exec();
  return project;
}

export async function updateProject(projectId, body) {
  const updatedProject = await Project.findByIdAndUpdate(projectId, body, { new: true });
  return updatedProject;
}

export async function deleteProject(projectId) {
  const deletedProject = await Project.findByIdAndDelete(projectId);
  return deletedProject;
}

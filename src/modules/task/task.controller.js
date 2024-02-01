import { catchAsync } from "../../common/utils/errorHandler.js";
import { AppResponse } from "../../common/utils/appResponse.js";
import AppError from "../../common/utils/appError.js";
import {
  createNewTask,
  deleteTask,
  getProjectTasks,
  getTaskById,
  updateTask,
} from "./task.service.js";

export const httpCreateNewTask = catchAsync(async (req, res) => {
  const { projectId } = req.params;

  const { title, description, deadline, priority } = req.body;
  if (!(title || description || deadline || priority)) {
    throw new AppError("All fields are required", 400);
  }
  const task = await createNewTask(
    projectId,
    title,
    description,
    deadline,
    priority,
  );
  if (!task) {
    throw new AppError("Error in creating the task", 500);
  }

  return new AppResponse(res, 201, task, "Task created successfully");
});

export const httpGetProjectTasks = catchAsync(async (req, res) => {
  const { projectId } = req.query;
  const tasks = await getProjectTasks(projectId);
  if (!tasks) throw new AppError("Error in fetching the tasks", 500);
  return AppResponse(res, 200, tasks, "Project Tasks fetched successfully");
});


export const httpGetTaskById = catchAsync(async (req, res) => {
  const { taskId } = req.params;
  const task = await getTaskById(taskId);
  if (!task) throw new AppError("Task with the id not found", 400);
  return AppResponse(res, 200, task, "Task fetched successfully");
});

export const httpUpdateTask = catchAsync(async (req, res) => {
  const { taskId } = req.params;
  const updatedTask = await updateTask(taskId, req.body);
  if (!updatedTask) throw new AppError("Error in updating the task", 500);
  return AppResponse(res, 200, updatedTask, "Task updated successfully");
});

export const httpDeleteTask = catchAsync(async (req, res) => {
  const { taskId } = req.params;
  const deletedTask = await deleteTask(taskId);
  if (!deletedTask) throw new AppError(`Task with the id doesn't exist`, 500);
  return AppResponse(res, 200, null, "Task deleted successfully");
});

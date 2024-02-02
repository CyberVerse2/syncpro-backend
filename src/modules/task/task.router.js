import { Router } from 'express';
import {
  httpCreateNewTask,
  httpDeleteTask,
  httpGetProjectTasks,
  httpGetTaskById,
  httpUpdateTask
} from './task.controller.js';
import { protect } from '../../common/middlewares/protect.js';

export const taskRouter = Router();

taskRouter.use(protect)

taskRouter.get('/', httpGetProjectTasks);
taskRouter.get('/:taskId', httpGetTaskById);
taskRouter.post('/:projectId', httpCreateNewTask);
taskRouter.patch('/:taskId', httpUpdateTask);
taskRouter.delete('/:taskId', httpDeleteTask);

import { Router } from "express";
import { userRouter } from "./modules/user/user.router.js";
import { authRouter } from "./modules/auth/auth.router.js";
import { taskRouter } from './modules/task/task.router.js';
import { projectRouter } from "./modules/project/project.router.js";
import { teamRouter } from "./modules/team/team.router.js";
import { memberRouter } from "./modules/member/member.router.js";

export const api = Router();

api.use("/auth", authRouter);
api.use("/users", userRouter);
api.use("/teams", teamRouter);
api.use('/tasks', taskRouter);
api.use("/members", memberRouter);
api.use("/projects", projectRouter);

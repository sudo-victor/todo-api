import { Router } from "express";
import { createTaskController, deleteTaskController, updateTitleController } from "../controllers/task-controller";

const taskRoutes = Router()

taskRoutes.post("/:customListId", createTaskController)
taskRoutes.patch("/:id", updateTitleController)
taskRoutes.delete("/:id", deleteTaskController)

export { taskRoutes }
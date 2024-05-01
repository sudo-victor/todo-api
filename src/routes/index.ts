import { Router } from "express";
import { userRoutes } from "./user-route";
import { authRoutes } from "./auth-route";
import { customListRoutes } from "./custom-list-route";
import { taskRoutes } from "./task-route";

const routes = Router()

routes.use("/users", userRoutes)
routes.use("/auth", authRoutes)
routes.use("/custom-lists", customListRoutes)
routes.use("/tasks", taskRoutes)

export { routes }
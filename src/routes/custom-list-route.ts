import { Router } from "express";
import { createCustomListCotroller, destroyCustomListController, getAllCustomListController } from "../controllers/custom-list-controller";
import { storageMiddleware } from "../middlewares/storage-middleware";
import { finishTaskController } from "../controllers/task-controller";

const customListRoutes = Router()

customListRoutes.post("/:user", storageMiddleware.single("imageBanner"), createCustomListCotroller)
customListRoutes.delete("/:id", destroyCustomListController)
customListRoutes.get("/", getAllCustomListController)
customListRoutes.patch("/:customListId/tasks/:taskId", finishTaskController)

export { customListRoutes }
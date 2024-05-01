import * as yup from "yup"
import { Request, Response } from "express";

import { TaskService } from "../services/task-service";
import { TaskRepository } from "../repositories/task-repository";
import { CustomListRepository } from "../repositories/custom-list-repository";
import { StatusCode } from "../utils/status-codes";

const taskRepository = new TaskRepository()
const customListRepository = new CustomListRepository()
const service = new TaskService(taskRepository, customListRepository)

export async function createTaskController(req: Request, res: Response) {
  try {
    const { body, params } = req
    const inputValidator = yup.object({
      title: yup.string().required(),
      customListId: yup.string().required()
    })
    const input = { ...body, ...params }
    await inputValidator.validate(input)
    const result = await service.create(input)
    return res.status(StatusCode.CREATED).json(result)
  } catch (err) {
    return res.status(StatusCode.BAD_REQUEST).json({ error: err.message })
  }
}

export async function finishTaskController(req: Request, res: Response) {
  const { params } = req
  await service.finishTask({ customListId: params.customListId, taskId: params.taskId})
  return res.status(StatusCode.NO_CONTENT).json()
}

export async function updateTitleController(req: Request, res: Response) {
  try {
    const { params, body } = req
    const inputValidator = yup.object({
      id: yup.string().required(),
      title: yup.string().required()
    })
    const input = { ...body, ...params}
    await inputValidator.validate(input)
    const result = await service.updateTitle(input)
    return res.status(StatusCode.OK).json(result)
  } catch (err) {
    return res.status(StatusCode.BAD_REQUEST).json({ error: err.message })
  }
}

export async function deleteTaskController(req: Request, res: Response) {
  const { params } = req
  await service.destroy(params.id)
  return res.status(StatusCode.NO_CONTENT).json()
}
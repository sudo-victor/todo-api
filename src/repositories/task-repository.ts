import { TaskModel } from "../entities/task";

export class TaskRepository {
  async create(params: { title: string }) {
    const task = await TaskModel.create(params)
    return task
  }

  async update(id: string, data: any) {
    const task = await TaskModel.findByIdAndUpdate(id, data, { new: true })
    return task
  }

  async destroy(id: string) {
    await TaskModel.findByIdAndDelete(id)
  }
  
}
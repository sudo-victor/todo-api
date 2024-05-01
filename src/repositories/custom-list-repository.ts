import { InputCreateCustomDTO } from "../dtos/create-custom-list-dto";
import { CustomListModel } from "../entities/list";

export class CustomListRepository {
  async create(input: InputCreateCustomDTO) {
    const customList = await CustomListModel.create(input)
    return customList
  }

  async getById(id: string) {
    const customList = await CustomListModel.findById(id)
    return customList
  }

  async getAll() {
    const customList = await CustomListModel.find().populate("tasks")
    return customList
  }

  async remove(id: string) {
    await CustomListModel.deleteOne({ id })
  }

  async pushTask(customListId: string, taskId: string) {
    await CustomListModel.findByIdAndUpdate(customListId, {
      $push: { tasks: taskId }
    })
  }

  async incrementItemsCompleted(id: string) {
    await CustomListModel.findByIdAndUpdate(id, {
      $inc: { itemsCompleted: 1 }
    })
  }
}
import { InputCreateTaskDTO } from "../dtos/create-task-dto";
import { InputFinishTaskDTO } from "../dtos/finish-task-dto";
import { InputUpdateTaskTitleDTO } from "../dtos/update-task-title-dto";
import { CustomListRepository } from "../repositories/custom-list-repository";
import { TaskRepository } from "../repositories/task-repository";

export class TaskService {
  constructor(
    private taskRepository: TaskRepository,
    private customListRepository: CustomListRepository
  ) {}

  async create(params: InputCreateTaskDTO) {
    const task = await this.taskRepository.create({
      title: params.title
    })
    await this.customListRepository.pushTask(params.customListId, task.id)
    return task
  }

  async finishTask(params: InputFinishTaskDTO) {
    // atualizar o status da tarefa para "done"
    await this.taskRepository.update(params.taskId, { status: "done" })
    // incrementar o campo "itemsCompleted" da lista personalizada
    await this.customListRepository.incrementItemsCompleted(params.customListId)
  }

  async updateTitle(params: InputUpdateTaskTitleDTO) {
    const task = await this.taskRepository.update(params.id, { title: params.title })
    return task
  }

  async destroy(id: string) {
    await this.taskRepository.destroy(id)
  }
}
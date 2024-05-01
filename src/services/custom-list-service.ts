import { rm } from "fs/promises"
import { join } from "path"

import { InputCreateCustomDTO } from "../dtos/create-custom-list-dto";
import { RemoveCustomListDTO } from "../dtos/remove-custom-list-dto";
import { CustomListRepository } from "../repositories/custom-list-repository";
import { UserRepository } from "../repositories/user-repository";

export class CustomListService {
  constructor(
    private customListRepository: CustomListRepository,
    private userRepository: UserRepository
  ) {}

  async create(input: InputCreateCustomDTO) {
    const user = await this.userRepository.getById(input.user)
    if (!user) {
      throw new Error("User not found")
    }
    const customList = await this.customListRepository.create(input)
    return customList
  }

  async destroy(input: RemoveCustomListDTO) {
    const customList = await this.customListRepository.getById(input.id)
    if (!customList) throw new Error("Custom list not found")
    await this.customListRepository.remove(input.id)
    const imageBannerPath = join(__dirname, "..", "..", "uploads", customList.imageBanner as string)
    await rm(imageBannerPath)
  }

  async getAll() {
    const customLists = await this.customListRepository.getAll()
    return customLists
  }
}
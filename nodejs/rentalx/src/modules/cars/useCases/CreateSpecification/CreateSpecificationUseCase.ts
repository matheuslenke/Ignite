import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationsRepository: SpecificationsRepository) {}

  execute({ description, name }: IRequest): void {
    const categoryAlreadyExists =
      this.specificationsRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category already exists!");
    }

    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };

import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface Irequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}
  
  execute({name, description}: Irequest) {

    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("category already exists!");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface Irequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationsRepository) {
    
  }
  
  execute({name, description}: Irequest): void {
    const specificationAlreadyExists = this.specificationsRepository.findByName(name);
    
    if(specificationAlreadyExists) {
      throw new Error("Specification already exists")
    }

    this.specificationsRepository.create({name, description});

  }
}

export {CreateSpecificationService};
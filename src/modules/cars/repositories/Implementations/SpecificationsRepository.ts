import { Specification } from "../../model/Specification";
import { ISpecificationsRepository, ICreateSpecificationsDTO } from "../ISpecificationsRepository";


class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }
  findByName(name: string): Specification {
    const specification = this.specifications.find(spec => spec.name === name);

    return specification;
  }

  create({ name, description }: ICreateSpecificationsDTO): void {
    const specification = new Specification();

    Object.assign(specification, { name, description, created_at: new Date() });

    this.specifications.push(specification);
  }
}

export {SpecificationsRepository};
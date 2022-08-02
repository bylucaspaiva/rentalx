import {v4 as uuidv4} from 'uuid';

class Category {
  name: string;
  description: string;
  created_at: Date;
  id?: string; // ? id é opcional

  constructor() {
    if(!this.id) {
      this.id = uuidv4();
    }
  }
}

export {Category};
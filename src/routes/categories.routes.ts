import {Router} from 'express';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { createCategoryController } from '../modules/cars/UseCases/CreateCategory';
import { listCategoriesController } from '../modules/cars/UseCases/ListCategories';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();


categoriesRoutes.post('/', (request, response) => {
 return createCategoryController.handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
  return listCategoriesController.handle(request, response);
})

export {categoriesRoutes};
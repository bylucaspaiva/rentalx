import {Router} from 'express';
import multer from 'multer';

import { createCategoryController } from '../modules/cars/UseCases/CreateCategory';
import { listCategoriesController } from '../modules/cars/UseCases/ListCategories';
import {importCategoryController} from '../modules/cars/UseCases/ImportCategory'

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
})

categoriesRoutes.post('/', (request, response) => {
 console.log("re"); 
 return createCategoryController.handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
  return listCategoriesController.handle(request, response);
})

categoriesRoutes.post('/import', upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response);
})

export {categoriesRoutes};
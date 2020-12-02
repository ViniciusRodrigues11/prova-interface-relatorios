import { Router } from 'express';

import produtoController from './controllers/ProdutoController';

const routes = Router();


routes.get('/products', produtoController.index);

routes.post('/products', produtoController.create);

export default routes;
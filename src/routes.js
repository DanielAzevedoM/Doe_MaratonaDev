import { Router } from 'express';

import userController from './app/controllers/userController';

const routes = new Router();

//Rota para renderização da página
routes.get("/", function(req, res){
  return res.render("index.html")
})

//Rota de Cadastro
routes.post('/users', userController.store);

export default routes;
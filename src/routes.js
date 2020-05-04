import { Router } from 'express';

import userController from './app/controllers/userController';

import donors from './app/models/array';

const routes = new Router();


//Rota para renderização da página
routes.get("/", function(req, res){
  return res.render("index.html", { donors })
})

//Rota de Cadastro
routes.post('/', userController.store);

export default routes;
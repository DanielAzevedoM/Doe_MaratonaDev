import express from 'express';

import nunjucks from 'nunjucks';

import routes from './routes';

import './database'; 

class App{
  constructor(){
    this.server = express();
    
    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.server.use(express.json());
    
    this.server.use(express.static('public'));

    this.server.use(express.urlencoded({ extend: true}));
  }

  routes(){
    this.server.use(routes); 

   
  }
}

export default new App().server;
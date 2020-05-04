import nunjucks from "nunjucks";

import path from "path";

import app from './app';

app.listen(3000, function(){
  console.log("O servidor foi iniciado!")
});

//configurando a template engine
nunjucks.configure(path.join(__dirname, 'app', 'views'), {
  autoescape: true,
  express: app,
  watch: true,
  noCache: true,
});


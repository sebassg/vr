const express = require('express');

const productsRouter = require(`./productsRouter`);
const notasRouter = require(`./notasRouter`);
const usersRouter = require(`./usersRouter`);


function routerApi (app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use(`/products`, productsRouter);
  router.use(`/notas`, notasRouter);
  router.use(`/users`, usersRouter);

}

module.exports = routerApi;

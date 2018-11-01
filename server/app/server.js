const express = require('express');
const cors = require('cors');
const logger = require('./logger');
const routes = require('./routes');

const httpServer = express();

const main = function(config) {

  // Request Loggin
  httpServer.use((req, res, next) => {
    logger.log('httpServer', req.method, req.path);
    next();
  });

  // Health check (can be used by a load balancer)
  httpServer.get('/status', (req, res) => res.send('OK'));

  httpServer.use(cors());

  // Routes
  routes(httpServer);

  // TODO: Add Error Handling

  httpServer.listen(config.port, () => logger.log(`API listening on port ${config.port}`));
}

module.exports = main;

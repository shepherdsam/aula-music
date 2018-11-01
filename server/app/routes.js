const { Router } = require('express');

// Example Foo
const fooController = require('./controllers/foo');
const fooRoutes = Router()
fooRoutes.get('/', fooController.get);

// Other Route/Controllers can be specified here

// TODO: Write Song Route/Controller

// TODO: Write Metadata Route/Controller

function main(app) {
  app.use('/foo', fooRoutes);

  // Don't forget to link your additonal routes here
}

module.exports = main;

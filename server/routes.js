/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/UserProfiles', require('./api/userProfile'));
  app.use('/api/Carts', require('./api/Cart'));
  app.use('/api/Orders', require('./api/Order'));
  app.use('/api/CarouselItems', require('./api/CarouselItem'));
  app.use('/api/images', require('./api/images'));
  app.use('/api/products', require('./api/product'));
  app.use('/api/navigations', require('./api/navigation'));
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth'));
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};

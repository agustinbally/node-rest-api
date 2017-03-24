var express = require('express');
var TVShowCtrl = require('./controllers/tvshows');

exports.createDefaultRoutes = function(app){
  var router = express.Router();
  router.get('/', function(req, res) {
    res.send("Hello world!");
  });

  app.use(router);
}

exports.createTVShowRoutes = function(app){
  // API routes
  var tvshows = express.Router();

  tvshows.route('/tvshows')
    .get(TVShowCtrl.findAllTVShows)
    .post(TVShowCtrl.addTVShow);

  tvshows.route('/tvshows/:id')
    .get(TVShowCtrl.findById)
    .put(TVShowCtrl.updateTVShow)
    .delete(TVShowCtrl.deleteTVShow);

  app.use('/api', tvshows);
}

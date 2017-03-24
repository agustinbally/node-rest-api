mongoose = require('mongoose');

exports.Init = function() {

  // Connection to DB
  mongoose.connect('mongodb://localhost/tvshows', function(err, res) {
    if(err) throw err;
    console.log('Connected to Database');
  });

  // Import Models and controllers
  require('./models/tvshow');
};

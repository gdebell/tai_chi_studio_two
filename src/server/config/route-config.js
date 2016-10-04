(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const classes = require('../routes/classes');
    const users = require('../routes/users');
    const instructors = require('../routes/instructors');
    const reviews = require('../routes/reviews');

    // *** register routes *** //
    app.use('/', routes);
    app.use('/classes', classes);
    app.use('/users', users);
    app.use('/instructors', instructors);
    app.use('/reviews', reviews);

  };

})(module.exports);

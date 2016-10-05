const environment = process.env.NODE_ENV;
const config = require('../../../knexfile.js')[environment];
const knex = require('knex')(config);
knex.migrate.latest();
knex.seed.run();
module.exports = knex;

exports.seed = function(knex, Promise) {

  return knex('reviews').del()
  .then(() => knex('classes_users').del())
  .then(() => knex('users').del())
  .then(() => knex('classes').del())
  .then(() => knex('instructors').del());

};

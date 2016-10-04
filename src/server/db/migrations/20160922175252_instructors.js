
exports.up = function(knex, Promise) {
  return knex.schema.createTable('instructors', function (table) {
    table.increments();
    table.string('names').notNullable();
    table.text('biography').notNullable();
    table.string('photo_url').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('instructors');
};

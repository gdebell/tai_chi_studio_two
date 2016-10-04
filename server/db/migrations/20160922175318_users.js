
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('email').notNullable();
    table.string('address_line_1').notNullable();
    table.string('address_line_2');
    table.string('city').notNullable();
    table.string('state').notNullable();
    table.string('zip').notNullable();
    table.boolean('liability').notNullable().defaultTo(true);
    table.string('comments');
    table.string('password').notNullable();
    table.boolean('is_admin');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};

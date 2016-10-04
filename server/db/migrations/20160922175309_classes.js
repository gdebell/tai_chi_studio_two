
exports.up = function(knex, Promise) {
  return knex.schema.createTable('classes', function (table) {
    table.increments();
    table.string('name').notNullable();
    table.text('description').notNullable();
    table.integer('instructor_id').references('id').inTable('instructors');
    table.string('day').notNullable();
    table.string('start_time').notNullable();
    table.string('end_time').notNullable();
    table.integer('size').notNullable().defaultTo(10);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('classes');
};

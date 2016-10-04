exports.up = (knex, Promise) => {
  return knex.schema.createTable('classes_users', (table) => {
    table.increments();
    table.integer('user_id').references('id').inTable('users');
    table.integer('class_id').references('id').inTable('classes');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('classes_users');
};

exports.up = (knex, Promise) => {
  return knex.schema.createTable('reviews', (table) => {
    table.increments();
    table.text('review').notNullable();
    table.integer('rating').notNullable();
    table.integer('instructor_id').references('id').inTable('instructors').notNullable();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('reviews');
};

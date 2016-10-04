exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('classes_users').insert({
      user_id: knex('users').where('id', 1).select('id'),
      class_id: knex('classes').where('id', 101).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 2).select('id'),
      class_id: knex('classes').where('id', 102).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 3).select('id'),
      class_id: knex('classes').where('id', 103).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 4).select('id'),
      class_id: knex('classes').where('id', 104).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 5).select('id'),
      class_id: knex('classes').where('id', 106).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 6).select('id'),
      class_id: knex('classes').where('id', 107).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id',7).select('id'),
      class_id: knex('classes').where('id', 108).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 8).select('id'),
      class_id: knex('classes').where('id', 109).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 9).select('id'),
      class_id: knex('classes').where('id', 110).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 10).select('id'),
      class_id: knex('classes').where('id', 102).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 11).select('id'),
      class_id: knex('classes').where('id', 101).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 12).select('id'),
      class_id: knex('classes').where('id', 102).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 13).select('id'),
      class_id: knex('classes').where('id', 103).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 14).select('id'),
      class_id: knex('classes').where('id', 104).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 15).select('id'),
      class_id: knex('classes').where('id', 105).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 16).select('id'),
      class_id: knex('classes').where('id', 106).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 17).select('id'),
      class_id: knex('classes').where('id', 102).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 18).select('id'),
      class_id: knex('classes').where('id', 103).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 19).select('id'),
      class_id: knex('classes').where('id', 104).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 20).select('id'),
      class_id: knex('classes').where('id', 105).select('id')
    })
  ]);
};

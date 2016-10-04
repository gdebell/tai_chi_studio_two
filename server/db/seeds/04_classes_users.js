exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('classes_users').insert({
      user_id: knex('users').where('id', 101).select('id'),
      class_id: knex('classes').where('id', 101).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 102).select('id'),
      class_id: knex('classes').where('id', 102).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 103).select('id'),
      class_id: knex('classes').where('id', 103).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 104).select('id'),
      class_id: knex('classes').where('id', 104).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 105).select('id'),
      class_id: knex('classes').where('id', 106).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 106).select('id'),
      class_id: knex('classes').where('id', 107).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id',107).select('id'),
      class_id: knex('classes').where('id', 108).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 108).select('id'),
      class_id: knex('classes').where('id', 109).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 109).select('id'),
      class_id: knex('classes').where('id', 110).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 110).select('id'),
      class_id: knex('classes').where('id', 102).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 111).select('id'),
      class_id: knex('classes').where('id', 101).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 112).select('id'),
      class_id: knex('classes').where('id', 102).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 113).select('id'),
      class_id: knex('classes').where('id', 103).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 114).select('id'),
      class_id: knex('classes').where('id', 104).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 115).select('id'),
      class_id: knex('classes').where('id', 105).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 116).select('id'),
      class_id: knex('classes').where('id', 106).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 117).select('id'),
      class_id: knex('classes').where('id', 102).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 118).select('id'),
      class_id: knex('classes').where('id', 103).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 119).select('id'),
      class_id: knex('classes').where('id', 104).select('id')
    }),
    knex('classes_users').insert({
      user_id: knex('users').where('id', 120).select('id'),
      class_id: knex('classes').where('id', 105).select('id')
    })
  ]);
};

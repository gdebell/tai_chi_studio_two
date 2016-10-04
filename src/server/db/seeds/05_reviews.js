exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('reviews').insert({
      id: 101,
      review: 'Hands down, the best instructor! He is amazing. I wake up early on the weekdays for his class. His class will keep you engaged and motivated. Warning this class is highly addictive!',
      rating: 5,
      instructor_id: 101
    }),
    knex('reviews').insert({
      id: 102,
      review: 'I just finished my first class! What a powerful workout.  It was challenging and I was able to control my own effort. She made the class Super fun. I can\'t wait to come back!!',
      rating: 5,
      instructor_id: 102
    }),
    knex('reviews').insert({
      id: 103,
      review: 'I\'ve studied Tai Chi with her for at least 15 years. She is gentle yet thorough. Each movement of the form is broken down into easy pieces and she explains the allegorical journey. I learn something new in each class. Tai Chi has improved the way I hold my body and has also helped to relax and center me. I highly recommend taking a class with her.',
      rating: 5,
      instructor_id: 103
    }),
    knex('reviews').insert({
      id: 104,
      review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      rating: 4,
      instructor_id: 104
    }),
    knex('reviews').insert({
      id: 105,
      review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      rating: 5,
      instructor_id: 101
    }),
    knex('reviews').insert({
      id: 106,
      review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      rating: 4,
      instructor_id: 102
    }),
    knex('reviews').insert({
      id: 107,
      review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      rating: 5,
      instructor_id: 103
    }),
    knex('reviews').insert({
      id: 108,
      review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      rating: 5,
      instructor_id: 104
    }),
    knex('reviews').insert({
      id: 109,
      review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      rating: 3,
      instructor_id: 101
    })
  ]);
};

const faker = require('faker');
var count = 0;
exports.seed = function(knex, Promise) {
    let numberOfArrays = new Array(20);
    let arrayOfuser = Array.from(numberOfArrays).map(() => {
      count += 1;
      return createUser(knex, count);
    });
    createAdmin(knex);
    return Promise.all(arrayOfuser);
  };

function createAdmin (knex) {
  return knex('users').insert({
    first_name: 'admin',
    last_name: 'admin',
    email: 'admin@admin.com',
    address_line_1: 'admin',
    address_line_2: 'admin',
    city: 'Denver',
    state: 'CO',
    zip: '80112',
    comments: 'do not share this account info',
    password: 'password',
    is_admin: true
  });
}
function createUser (knex, id) {
  return knex('users')
    .insert({
      id: id,
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      email: faker.internet.email(),
      address_line_1: faker.address.streetAddress(),
      address_line_2: faker.address.secondaryAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zip: faker.address.zipCode(),
      comments: faker.lorem.sentence(),
      password: 'password'
    });
}

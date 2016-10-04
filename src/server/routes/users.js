const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const bcrypt = require('bcrypt');
const validation = require('./validations');

//get the the page that allows a user to sign up with the studio (new user)
router.get('/signup', function (req, res, next) {
  console.log('here is the req: ', req.body);
  res.render('validation/signup');
});

router.get('/verify', function (req, res, next) {
  var renderObject = {};

  knex('users')
  .where({
    email: req.body.email,
    password: req.body.password
  })
  .select()
  .then((results) => {
    renderObject = results[0];
    console.log('renderObject: ', renderObject);
    res.json(renderObject);
  })
  .catch((err) => {
      console.log(err);
      res.status(500);
      res.render('validation/signin');
    });
});

router.get('/viewuser', function (req, res, next) {
  var renderObject = {};

  knex('users')
  .where({
    email: req.session.user.email
  })
  .select()
  .then((results) => {
    renderObject = results[0];
    renderObject.is_admin = req.session.user.is_admin;
    console.log('renderObject: ', renderObject);
    res.render('user_profile', {renderObject});
  })
  .catch((err) => {
      console.log(err);
      res.status(500);
      res.render('validation/signin');
    });
});

//get the the page that allows a user to sign up with the studio (new user)
router.post('/signup', (req, res, next) => {
  console.log('testtttt', req.body);
  // Hash the password with the salt
  //we should use bcrypt here to store the password
  var hash = bcrypt.hashSync(req.body.password, 10);
  knex('users')
  .insert({
    id: 100,
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    email: req.body.email,
    address_line_1: req.body.address_line_1,
    address_line_2: req.body.address_line_2,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    liability: req.body.liability,
    comments: req.body.comments,
    password: hash,
    is_admin: req.body.is_admin
  }, '*')
  .then((results) => {
    res.send(200);
  })
  .catch((err) => {
    console.log(err);
    return next(err);
  });
});

//gets to the page that allows a user to log in (not a new user)
router.get('/signin', function (req, res, next) {
  res.render('validation/signin');
});

router.post('/signin', function (req, res, next) {
  knex('users')
  .where({
    email: req.body.email
  })
  .then((results) => {
    if (bcrypt.compareSync(req.body.password, results[0].password)) {
      console.log('results: ', results[0].password);
      req.session.user = {
        email: results[0].email,
        first_name: results[0].first_name,
        id: results[0].id,
        is_admin: results[0].is_admin
      };

      var renderObject = {
        email: results[0].email,
        first_name: results[0].first_name,
        id: results[0].id,
        is_admin: results[0].is_admin
      };

      var url = '/users/' + results[0].id;
      //res.json('log in successful');
      res.status(200).json(renderObject);
    } else {
      res.status(500).send({
        status: 'error',
        message: 'error'
      });
    }
  })
  .catch((err) => {
    console.log(err);
    res.status(500);
  });
});

//view a users profile
router.get('/view', function (req, res, next) {
  var member_id = req.params.id;
  var renderObject = {};
  //select from users by id
  //populate edit fields
  console.log('member: ', member_id);
  knex('users')
  .where('id', member_id)
  .then((results) => {
    renderObject = results[0];
    res.render('user_profile', {renderObject});
  });
});

router.get('/edit/user_edit_profile', function (req, res, next) {
    console.log('here in edit with req: ', req.session.user);
    var renderObject = {};

    knex('users')
    .where({
      email: req.session.user.email
    })
    .select()
    .then((results) => {
      renderObject = results[0];
      console.log('renderObject: ', renderObject);
      res.render('user_edit_profile', {renderObject});
    })
    .catch((err) => {
        console.log(err);
        res.status(500);
        res.render('validation/signin');
      });
  });

router.get('/user/logout', (req, res, next) => {
    console.log('in logout');
    req.session.user = {};
    req.logout();
    res.status(200).json({message:'success'});
  });

module.exports = router;

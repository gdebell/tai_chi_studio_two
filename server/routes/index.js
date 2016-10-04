const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

const indexController = require('../controllers/index');

// router.get('/', function (req, res, next) {
//   const renderObject = {};
//   renderObject.title = 'Welcome to Express!';
//   indexController.sum(1, 2, (error, results) => {
//     if (error) return next(error);
//     if (results) {
//       renderObject.sum = results;
//       res.render('index', renderObject);
//     }
//   });
// });

router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/about', function (req, res, next) {
  res.render('about');
});

router.get('/contact', function (req, res, next) {
  res.render('contact');
});

module.exports = router;

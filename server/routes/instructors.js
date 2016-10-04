const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

// get all instructors page
router.get('/', function (req, res, next) {
  knex('instructors')
  .select('*', 'instructors.id')
  .then(function(data) {
    knex('reviews')
    .avg('rating')
    .groupBy('instructor_id')
    .select('instructor_id')
    .then(function(rating) {
      data.map(function(el) {
        rating.forEach(function(el_rating) {
          if (el_rating.instructor_id === el.id) {
            el_rating.avg = parseInt(el_rating.avg);
            el.rating = '<i class="fa fa-star" aria-hidden="true"></i>'.repeat(el_rating.avg);
          }
        });
      });
      const renderObject = {};
      renderObject.admin = req.session.user;
      renderObject.instructor = data;
      res.render('instructors/instructors', renderObject);
    });

  })
  .catch((err) => {
    console.log(err);
    return next(err);
  });
});

// get new(add) instructor page
router.get('/new', (req, res, next) => {
  res.render('instructors/instructor_new');
});

router.get('/edit/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  knex('instructors')
  .where('id', id)
  .select('*')
  .then((data) => {
    const renderObject = {};
    renderObject.instructor = data;
    res.render('instructors/instructor_edit', renderObject);
  });
});

// get single instructor page
router.get('/:id', function (req, res, next) {
  const id = parseInt(req.params.id);
  knex('instructors')
  .where('id', id)
  .select('*')
  .then(function (instructor_info) {
    knex('reviews')
    .where('instructor_id', id)
    .select('*')
    .then(function (data) {
      data.map(function(el) {
        el.rating = '<i class="fa fa-star" aria-hidden="true"></i>'.repeat(el.rating);
      });
      knex('classes')
      .where('instructor_id', id)
      .select('*')
      .then(function (class_info) {
        const renderObject = {};
        renderObject.instructor = instructor_info;
        renderObject.class_info = class_info;
        renderObject.review = data;
        res.render('instructors/instructor', renderObject);
      });
    });
  })
  .catch((err) => {
    console.log(err);
    return next(err);
  });
});

// post new instructor to database
router.post('/new', (req, res, next) => {
  knex('instructors')
  .insert({
    // id: 10,
    names: req.body.names,
    biography: req.body.biography,
    photo_url: req.body.photo_url
  }, '*')
  .then((data) => {
    res.redirect('/instructors');
  })
  .catch((err) => {
    console.log(err);
    return next(err);
  });
});

// update instractor info
router.post('/edit/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  knex('instructors')
  .update({
    names: req.body.names,
    biography: req.body.biography,
    photo_url: req.body.photo_url
  })
  .where('id', id)
  .returning('*')
  .then((data) => {
    res.redirect('/instructors');
  })
  .catch((err) => {
    console.log(err);
    return next(err);
  });
});

// delete instractor (delete instractor and review)
router.delete('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  knex('reviews')
  .del()
  .where({
    instructor_id: id
  })
  .select('id')
  .returning('*')
  .then((deleted_review) => {
    knex('instructors')
    .del()
    .where('instructors.id', id)
    .returning('*')
    .then(() => {
      res.send({
        message: 'success'
      });
    });
  })
  .catch((err) => {
    console.log(err);
    return next(err);
  });
});

module.exports = router;

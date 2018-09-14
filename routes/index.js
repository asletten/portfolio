var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'Aaron Sletten'});
});

router.get('/resume', function(req, res, next) {
  res.render('resume', { title: 'Résumé'});
});

router.get('/interests', function(req, res, next) {
  res.render('interests', { title: 'Interests'});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact'});
});

//Projects
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects'});
});

//Lab monitor
router.get('/projects/lab_monitor', function(req, res, next) {
  res.render('projects/lab_monitor', { title: 'Lab Monitor Website'});
});

//Stawberry
router.get('/projects/strawberry_robot', function(req, res, next) {
  res.render('projects/strawberry', { title: 'Strawberry Imaging Robot'});
});

//Internal Database
router.get('/projects/internal_database', function(req, res, next) {
  res.render('projects/internal_database', { title: 'Internal Database Tool'});
});

//quadcopter_positioning
router.get('/projects/quadcopter_positioning', function(req, res, next) {
  res.render('projects/quadcopter_positioning', { title: 'Quadcopter Positioning'});
});

module.exports = router;
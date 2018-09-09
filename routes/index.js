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

//Projects
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects'});
});

//Lab monitor
router.get('/projects/lab_monitor', function(req, res, next) {
  res.render('projects/lab_monitor', { title: 'Lab Monitor Website'});
});

//Lab monitor
router.get('/projects/strawberry_robot', function(req, res, next) {
  res.render('projects/strawberry', { title: 'Strawberry Imaging Robot'});
});


module.exports = router;
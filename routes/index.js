var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'Aaron Sletten', condition: true, anyArray: [1,2,3] });
});

router.get('/resume', function(req, res, next) {
  res.render('resume', { title: 'Resume', condition: true, anyArray: [1,2,3] });
});

router.get('/interests', function(req, res, next) {
  res.render('interests', { title: 'Interests', condition: true, anyArray: [1,2,3] });
});

//Projects
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects', condition: true, anyArray: [1,2,3] });
});

router.get('/projects/lab_monitor', function(req, res, next) {
  res.render('projects/lab_monitor', { title: 'Lab Monitor Website', condition: true, anyArray: [1,2,3] });
});


module.exports = router;
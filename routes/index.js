var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'Aaron Sletten'});
});

router.get('/resume', function(req, res, next) {
  res.render('resume', { title: 'Resume'});
});

router.get('/resumepdf', function(req, res){
  var file = __dirname + '/upload/Aaron Sletten\'s Resume 2019.pdf';
  res.download(file); // Set disposition and send it.
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

//centroid_calculator
router.get('/projects/centroid_calculator', function(req, res, next) {
  res.render('projects/centroid_calculator', { title: 'Centroid Calculator'});
});

//endangered_map
router.get('/projects/endangered_map', function(req, res, next) {
  res.render('projects/endangered_map', { title: 'Endangered Species Map'});
});

//car_controller
router.get('/projects/car_controller', function(req, res, next) {
  res.render('projects/car_controller', { title: 'Computer Controlled RC Car'});
});

//geology_game
router.get('/projects/geology_game', function(req, res, next) {
  res.render('projects/geology_game', { title: 'Geology Game'});
});

//tank_game
router.get('/projects/tank_game', function(req, res, next) {
  res.render('projects/tank_game', { title: 'Tank Game'});
});

//parachutez
router.get('/projects/parachutez', function(req, res, next) {
  res.render('projects/parachutez', { title: 'Parachutez'});
});

//frankenstein_pc
router.get('/projects/frankenstein_pc', function(req, res, next) {
  res.render('projects/frankenstein_pc', { title: 'Frankenstein PC'});
});

//frankenstein_pc
router.get('/projects/php_database', function(req, res, next) {
  res.render('projects/php_database', { title: 'PHP Database Website'});
});

module.exports = router;
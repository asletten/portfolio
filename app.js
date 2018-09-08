
var hbs = require('express-handlebars');
var express = require('express');
var path = require('path');
var debug = require('debug')('worker:app');

var app = express();  //use express js module
var routes = require('./routes');

//view engine setup
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use('/', routes);

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/public/', express.static(path.join(__dirname, 'public')));
// app.use('bootstrap', './node_modules/bootstrap/');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.set('port', process.env.PORT || 3000);  //sets port 3000

app.listen(app.get('port'), function(){ //start express server
    // console.log( 'Express Server Started on http://localhost:3000');
	debug('Express Server Started on http://localhost:3000');    
});
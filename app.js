
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var event = require('./routes/event');
var main = require('./routes/main');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', main.signin);
app.get('/event/main', main.show);
app.post('/event/main', main.show);
app.get('/event/signup', main.signup);
app.post('/event/signup', main.signup);
app.post('/event/showCode', event.showCode);
app.get('/event/create', event.createEvent);
app.post('/event/create', event.createEvent);
app.post('/event/confirm', event.confirm);
app.get('/event/addCode', event.addCode);
app.post('/event/addEvent', event.addEvent);
app.get('/event/:url', event.eventInfo);
app.post('/event/:url', event.eventInfo);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

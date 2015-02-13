// This is our server we are going to require modules and packages and everything here

//middleware - anything that you use that you didnt write yourself
// require express so we can do expressy stuff
var express = require('express');

//middleware stuff
var connect = require('connect');

//allows us to handle http requests and responses and path allows us to do fancy stuff with the path (extensions, root static path, ect.)
var http = require('http');
var path = require('path');

//create the express app
var app = express();

app.set('port', 6789);
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//static file server points to the public folder
app.use(express.static(path.join(__dirname,'public')));

//this helps us see post data as json nice and pretty
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

var routes = require('./routes/routes.js')(app);

// app.listen(app.get('port'), function() {
//     console.log('Tacos are happening on port ' + app.get('port'));
// });
 var server = app.listen(app.get('port'), function() {
  console.log('listening');
 });
var io = require('socket.io')(server);


io.on('connection', function (socket) {

    console.log('connection made');

    socket.on('new_name', function(data){
        console.log('received event new_name with the following data', data);
    })

});

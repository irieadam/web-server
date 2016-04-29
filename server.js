/* omments added */

var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var middleware = require('./middleware.js');

// add application level middle ware for auth and logging
app.use( middleware.logger);

//routes
app.get('/about',middleware.requireAuthentication, function (req, res) {
res.send('about what?');
});

//expose public folder
app.use(express.static(__dirname + '/public'));

//start app
app.listen(PORT, function () {
    console.log('server started on ' + PORT + ' ' + __dirname );
} );
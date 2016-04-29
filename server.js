var express = require('express');
var app = express();
var PORT = 3000;

// define middleware object for express
var middleware = {
    requireAuthentication : function (req, res, next) {
        console.log('private route hit');
        next();
    },
    logger: function (req, res, next) {
        console.log('Request: ' + new Date().toString() + ' : '+ req.method + ' ' + req.originalUrl);
        next();
    }
};

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
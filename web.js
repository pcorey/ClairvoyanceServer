var express = require('express');
var app = express.createServer();
var io = require('socket.io').listen(app);

app.use(express.logger());

app.get('/', function (req, res) {
   res.sendfile(__dirname + '/index.html');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
   console.log('Listening on ' + port);
}

/*var express = require("express");
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
     response.send('Hello World!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
     console.log("Listening on " + port);
});*/

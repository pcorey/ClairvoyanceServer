var express = require('express'),
    app = express(),
    http = require('http'),
    server = http.createServer(app),
    io = require('socket.io').listen(server);

app.use(express.logger());

app.get('/', function (req, res) {
   res.sendfile(__dirname + '/demo.html');
});

var port = process.env.PORT || 5000;
server.listen(port, function() {
   console.log('Listening on ' + port);
});

io.sockets.on('connection', function(socket) {
   socket.on('selection', function(data) {
      console.log('Selection recieved.');
      console.log('Broadcasting ' + data);
      io.sockets.emit('broadcast', data);
   });
});


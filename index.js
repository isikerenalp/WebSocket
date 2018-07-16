const express = require('express');
const socket = require('socket.io');
// App
var app = express();
var server = app.listen(3000, function () {
  console.log('connected');
});
// Static files
app.use(express.static('public'));
// Socket
var io = socket(server);
io.on('connect', function (socket) {
  console.log('socket connection' , socket.id);
  socket.on('chat', function (data) {
    io.sockets.emit('chat',data);
  });
});

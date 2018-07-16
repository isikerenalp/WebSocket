//  Connection
const socket = io.connect('localhost:3000')

// Query
let message = document.getElementById('message');
    nickname = document.getElementById('nickname'),
    buton = document.getElementById('send'),
    output = document.getElementById('output');

// Emit events
buton.addEventListener('click', function () {
  socket.emit('chat', {
    message: message.value,
    nickname: nickname.value
  });
});

// Listen for events
socket.on('chat',function (data) {
  output.innerHTML += '<p><strong>'+data.nickname+': </strong>'+data.message+'</p>';
});

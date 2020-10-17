const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
app.get('/', (req, res) => {
  res.send('<h1>Hey Socket.io</h1>');
});

let messages = [];
let history = 50;

io.on('connection', (socket) => {
  for(let k in messages){
  socket.emit('chat message', messages[k])};
  socket.on('chat message', (msg) => {
    messages.push(msg);
    console.log(messages);
    if(messages.length > history){
      messages.shift();
    }
    io.emit('chat message', msg);

  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});

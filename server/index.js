const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const router = require('./router');
const cors = require('cors'); // Import the 'cors' middleware

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors()); // Invoke the 'cors' middleware here
const server = http.createServer(app);
const io = socketio(server);


io.on('connection', (socket) => {
  console.log('We have a connection!!!');

  socket.on('disconnect', () => {
    console.log('User had left!!!');
  });
});

app.use(router);

server.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});

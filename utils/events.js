const socketio = require('socket.io')(http);

function connection (socket) {
    console.log("Someone joined!")
}
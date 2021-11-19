const socketio = require('socket.io');

function runServer () {
    const io = socketio();
    io.on('connection', (socket) => {
        console.log('Client connected');
    });
}

module.exports = {
    runServer,
}
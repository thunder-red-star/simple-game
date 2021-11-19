const socketio = require('socket.io');
const events = require('./events.js');

function runServer () {
    io.on('connection', (socket) => {
        console.log('a user connected');
    });
}

module.exports = {
    runServer,
}
const socketio = require('socket.io')(http);
const events = require('./events.js');

function runServer () {
    io.on('connection', (socket) => {

    });
}

module.exports = {
    runServer,
}
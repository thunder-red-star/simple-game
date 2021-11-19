const socketio = require('socket.io');

function connection (socket) {
    console.log("Someone joined!");
}

module.exports = {
    connection
}
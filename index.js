const express = require('express');
const app = express();

const server = require('./utils/server.js')
const {runServer} = require("./utils/server");

// return static file if request is for index.html
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

// create express app
runServer();
const webserver = app.listen(3000, () => {
  console.log('listening for requests on port 3000');
});
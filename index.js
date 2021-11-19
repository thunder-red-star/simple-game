const express = require('express');
const app = express();

const webserver = require('./utils/server.js')

// return static file if request is for index.html
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

// create express app
const webserver = app.listen(3000, () => {
  console.log('listening for requests on port 3000');
});
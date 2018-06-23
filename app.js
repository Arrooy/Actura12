var express = require('express');
var app = express();
var serv = require('http').Server(app);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/client/ca/index.html');
});
app.get('/es', function(req, res) {
  res.sendFile(__dirname + '/client/es/index.html');
});
app.get('/en', function(req, res) {
  res.sendFile(__dirname + '/client/en/index.html');
});

app.use('/client', express.static(__dirname + '/client'));

serv.listen(process.env.PORT || 2000);
console.log("Server started.");

//requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

//globals
var port = process.env.PORT || 7575;

//uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));

//listen
app.listen(port, function() {
  console.log('server up on port', port);
});

//base url
app.get('/', function(req, res) {
  res.sendFile(path.resolve('public/views/index.html'));
});

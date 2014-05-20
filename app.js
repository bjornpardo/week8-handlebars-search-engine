var express = require('express');
var bodyParser = require('body-parser');
var SearchData = require('./models/search-data.json');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', function(req, res) {
	res.render('index');
});

app.post('/search', function(req, res) {
  console.log(req.body);
});

var server = app.listen(5244, function() {
	console.log('Express server listening on port ' + server.address().port);
});

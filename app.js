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
	// console.log('hello');
});

app.get('/search', function(req, res) {
	// console.log(req.body);
	// res.send(req.body);
	var searchedText = req.query.search;
	// console.log(searchedText);

	// loop over object in object:
	for (var key in SearchData) {
		var obj = SearchData[key];
		for (var prop in obj) {
			// console.log(prop);
			if (prop.toLowerCase() === searchedText.toLowerCase()) {
				console.log(prop.desc);
				res.send(prop.toLowerCase());
			}

			else {
				res.render('layout');
			}
		} 
	}

});

var server = app.listen(5244, function() {
	console.log('Express server listening on port ' + server.address().port);
});

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
	// var results =[];

	// loop over object in object:
	for (var key in SearchData) {
		var obj = SearchData[key];
		for (var prop in obj) {
			// console.log(obj[prop].desc);
			if (prop.toLowerCase() === searchedText.toLowerCase()) {
				// console.log(obj[prop].desc);
				res.send(obj[prop].desc);
				// or:
				// results.push(obj[prop]);
			}
		} 
	}
	// res.send(results);
});

var server = app.listen(5244, function() {
	console.log('Express server listening on port ' + server.address().port);
});

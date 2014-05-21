$(document).on('ready', function() {
console.log('hello');

	var resultsTemplate = $('#results-template');
	var templateText = resultsTemplate.html();
	console.log(templateText);

	var renderResults = Handlebars.compile(templateText);

	$('.search').on('click', function() {
		var text = $('input').val();
		console.log(text);
		// return false;
		// console.log(req.body);
	

		$.get('/search', { search: text }, function(data) {

		});
	});	
});
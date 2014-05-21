$(document).on('ready', function() {
console.log('hello');

	var resultsTemplate = $('#results-template');
	var templateText = resultsTemplate.html();
	console.log(templateText);

	var renderResults = Handlebars.compile(templateText);

	$('#searchform').on('submit', function(e) {
		var text = $('input').val();
		console.log(text);
		e.preventDefault();
	
		$.get('/search', { search: text }, function(data) {
			console.log(data);

		});
	});	
});
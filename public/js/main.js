$(document).on('ready', function() {
console.log('hello');

	var resultsTemplate = $('#results-template');
	var templateText = resultsTemplate.html();
	console.log(templateText);

	var renderResults = Handlebars.compile(templateText);



});
import { PopularArticles } from './weather-service.js';

$(document).ready(function() {
	$('#weatherLocation').click(function() {
		const city = $('#location').val();
		$('#location').val('');

		(async () => {
			let popularArticles = new PopularArticles();
			const response = await popularArticles.getArticles();
			console.log(response);
			getElements(response);
		})();

		const getElements = function(response) {
			if (response) {
				$('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
				$('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
			} else {
				$('.showHumidity').text(`There was an error handling your request.`);
				$('.showTemp').text(`Please check your inputs and try again!`);
			}
		};
	});
});

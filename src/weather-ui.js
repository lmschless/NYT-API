import { PopularArticles } from './weather-service.js';

$(document).ready(function() {
	$('#weatherLocation').click(function() {
		const city = $('#location').val();
		$('#location').val('');

		(async () => {
			let popularArticles = new PopularArticles();
			const response = await popularArticles.getArticles();
			console.log(response.results[0].url);
			getElements(response);
		})();

		const getElements = function(response) {
			if (response) {
				$('.showHumidity').append(
					`<div><h1>${response.results[0].title}</h1><h4>${response.results[0].byline}<p>${response.results[0]
						.url}</p> <p><img src="${response.results[0].media.media-metadata.url}" alt="" srcset=""></p></div>`
				);
			} else {
				$('.showHumidity').text(`There was an error handling your request.`);
				$('.showTemp').text(`Please check your inputs and try again!`);
			}
		};
	});
});

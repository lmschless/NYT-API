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
						.url}</p> <p><img src="https://static01.nyt.com/images/2020/03/21/world/It21italy-virus1sub-copy/21italy-virus1sub-thumbStandard-v2.jpg" alt="" srcset=""></p></div>`
				);
			} else {
				$('.showHumidity').text(`There was an error handling your request.`);
				$('.showTemp').text(`Please check your inputs and try again!`);
			}
		};
	});
});

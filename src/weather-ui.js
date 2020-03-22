import { PopularArticles } from './weather-service.js';

$(document).ready(function() {
	let test;
	$('#weatherLocation').click(function() {
		// const city = $('#location').val();
		// $('#location').val('');

		(async () => {
			let popularArticles = new PopularArticles();
			const response = await popularArticles.getArticles();
			test = response.results;
			console.log(response.results);
			displayResults(response);

			// getElements(response);
		})();

		// <p><img src="${response.results[i].media[0]['media-metadata'][0].url}" alt="" srcset=""></p>

		const displayResults = (response) => {
			// const image = response.results[0].media[0]['media-metadata'][1].url;
			for (let i = 0; i < response.results.length; i++) {
				$('.showHumidity').append(
					`<div><h1>#${i} ${response.results[i].title}</h1><h4>${response.results[i].byline}<p>${response.results[i]
						.url}</p></div>`
				);
				if (response.results[i].media.length != 0) {
					$('.showHumidity').append(
						`<p><img src="${response.results[i].media[0]['media-metadata'][2].url}" alt="" srcset=""></p>`
					);
				} else {
					$('.showHumidity').append(`No image`);
				}
			}
			console.log(response);
			console.log(image);
		};

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

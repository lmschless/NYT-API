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
					continue;
				}
			}
			console.log(response);
		};
	});
});

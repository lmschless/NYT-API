import { PopularArticles } from './weather-service.js';
import $ from 'jquery';

$(document).ready(function() {
	$('#weatherLocation').click(function() {
		(async () => {
			let popularArticles = new PopularArticles();
			const response = await popularArticles.getArticles();
			console.log(response.results);
			displayResults(response);
		})();

		const displayResults = (response) => {
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

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
				$('.showHumidity').append(`<div class="media">`);

				if (response.results[i].media.length != 0) {
					$('.showHumidity').append(
						`<div class="media-body">
						<h5 class="mt-0">#${i} ${response.results[i].title}</h5>
						${response.results[i].byline}<br><img src="${response.results[i].media[0]['media-metadata'][2].url}" class="mr-3"
						 alt="" srcset="">
					 </div>
				 </div>`
					);
				} else {
					$('.showHumidity').append(
						`<br><div class="media-body">
							<h5 class="mt-0">#${i} ${response.results[i].title}</h5><br>
							${response.results[i].byline}
						</div>
					</div>`
					);
				}

				// if (response.results[i].media.length != 0) {
				// 	$('.showHumidity').append(
				// 		`<img src="${response.results[i].media[0]['media-metadata'][1]
				// 			.url}" class="mr-0" alt="" srcset=""></div></div>`
				// 	);
				// } else {
				// 	continue;
				// }
			}
			console.log(response);
		};

		// const displayResults = (response) => {
		// 	for (let i = 0; i < response.results.length; i++) {
		// 		$('.showHumidity').append(
		// 			`<div><h1>#${i} ${response.results[i].title}</h1><h4>${response.results[i].byline}<p>${response.results[i]
		// 				.url}</p></div>`
		// 		);
		// 		if (response.results[i].media.length != 0) {
		// 			$('.showHumidity').append(
		// 				`<p><img src="${response.results[i].media[0]['media-metadata'][2].url}" alt="" srcset=""></p>`
		// 			);
		// 		} else {
		// 			continue;
		// 		}
		// 	}
		// 	console.log(response);
		// };
	});
});

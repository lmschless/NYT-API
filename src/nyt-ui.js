import { PopularArticles } from './nyt-apis.js';
import { SearchArticles } from './nyt-apis.js';
import $ from 'jquery';
const format = require('date-format');

$(document).ready(function() {
	$('#popular-articles').click(function() {
		$('.display-articles').empty();
		(async () => {
			let popularArticles = new PopularArticles();
			const response = await popularArticles.getArticles();
			console.log(response.results);
			displayResults(response);
		})();
	});
	$('#search-articles').click(function() {
		$('.display-articles').empty();
		const searchTerm = $('#search-box').val();
		(async () => {
			let searchArticles = new SearchArticles();
			const response = await searchArticles.findArticles(searchTerm);
			displayResults(response);
			console.log(searchTerm);
		})();
	});

	const displayResults = (response) => {
		if (response.results) {
			for (let i = 0; i < response.results.length; i++) {
				$('.display-articles').append(`<div class="media">`);
				if (response.results[i].media.length != 0) {
					$('.display-articles').append(
						`<div class="media-body">
				<h5 class="mt-0">#${i} ${response.results[i].title}</h5>
				${response.results[i].byline}<br><a href="${response.results[i].url}"><img src="${response.results[i].media[0][
							'media-metadata'
						][2].url}" class="mr-3"
				 alt="" srcset=""></a>
			 </div>
		 </div>`
					);
				} else {
					$('.display-articles').append(
						`<br><div class="media-body">
					<h3 class="mt-0">#${i} ${response.results[i].title}</h3><br>
					${response.results[i].byline}
				</div>
			</div>`
					);
				}
			}
			console.log(response);
		} else {
			$('.display-articles').append(
				`<h5>${response.response.meta.hits} articles returned in ${response.response.meta
					.time}ms (displaying the top 10 results)</h5><br>`
			);
			for (let i = 0; i < 10; i++) {
				// Uses date-format package to beautify pubDates from the response.
				let date = response.response.docs[i].pub_date;
				let updatedDate = format.parse(format.ISO8601_FORMAT, date);

				console.log(updatedDate);
				$('.display-articles').append(`<div class="media">`);
				$('.display-articles').append(
					`<div class="media-body"><h3 class="mt-0">#${i} ${response.response.docs[i].headline
						.main}</h3><p>${updatedDate}</p><p>${response.response.docs[i].abstract}</p><br>`
				);
			}
			console.log(response);
			console.log(response.response.docs[0].snippet);
			console.log('using search, not popular articles!');
		}
	};
});

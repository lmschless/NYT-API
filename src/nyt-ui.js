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
			displayResults(response);
		})();
	});
	$('#search-articles').click(function() {
		searchResults();
	});
	// handle enter code in search box
	$('#search-box').keypress(function(event) {
		if (event.keyCode === 13) {
			searchResults();
		}
	});
	const searchResults = () => {
		$('.display-articles').empty();
		const searchTerm = $('#search-box').val();
		(async () => {
			let searchArticles = new SearchArticles();
			const response = await searchArticles.findArticles(searchTerm);
			displayResults(response);
		})();
		$('#search-box').val('');
	};

	const displayResults = (response) => {
		if (response.results) {
			// run the popular articles api
			for (let i = 0; i < response.results.length; i++) {
				$('.display-articles').append(`<div class="media">`);
				if (response.results[i].media.length != 0) {
					$('.display-articles').append(
						`<div class="media-body">
				<h5 class="mt-0">${i + 1} - ${response.results[i].title}</h5>
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
					<h3 class="mt-0">${i + 1} - ${response.results[i].title}</h3><br>
					${response.results[i].byline}
				</div>
			</div>`
					);
				}
			}
			console.log(response);
		} else {
			// run the search api
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
					`<div class="media-body"><h1 class="mt-0">${i + 1} - ${response.response.docs[i].headline
						.main}</h1><p>Published: ${updatedDate}</p><p><q>${response.response.docs[i]
						.lead_paragraph}</q></p><p><a href="${response.response.docs[i]
						.web_url}">Click here to read the full article!</a></p><br>`
				);
			}
			console.log(response);
			console.log(response.response.docs[0].web_url);
			console.log('using search, not popular articles!');
		}
	};
});

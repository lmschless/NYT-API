import { PopularArticles } from './nyt-apis.js';
import { SearchArticles } from './nyt-apis.js';
import $ from 'jquery';

$(document).ready(function() {
	let displayResults;
	$('#popular-articles').click(function() {
		(async () => {
			let popularArticles = new PopularArticles();
			const response = await popularArticles.getArticles();
			console.log(response.results);
			displayResults(response);
		})();
	});
	displayResults = (response) => {
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
						<h5 class="mt-0">#${i} ${response.results[i].title}</h5><br>
						${response.results[i].byline}
					</div>
				</div>`
					);
				}
			}
			console.log(response);
		} else {
			for (let i = 0; i < 10; i++) {
				$('.display-articles').append(`${response.response.docs[i].headline.main}<br>`);
			}
			console.log(response);
			console.log(response.response.docs[0].snippet);
			console.log('using search, not popular articles!');
		}
	};

	$('#search-articles').click(function() {
		const searchTerm = $('#search-box').val();
		(async () => {
			let searchArticles = new SearchArticles();
			const response = await searchArticles.findArticles(searchTerm);
			displayResults(response);
		})();
	});
});

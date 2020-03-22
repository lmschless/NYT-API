import './weather-ui.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // async/await method for api call
export class PopularArticles {
	async getArticles() {
		try {
			let response = await fetch(
				`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=3KfCi2cnPyWhA5FCqS3qlqUKULBAPRGk`
			);
			let jsonifiedResponse;
			if (response.ok && response.status == 200) {
				jsonifiedResponse = await response.json();
			} else {
				jsonifiedResponse = false;
			}
			return jsonifiedResponse;
		} catch (error) {
			return false;
		}
	}
}

// Fetch method for API calling

// fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`)
// 	.then(function(response) {
// 		if (response.ok && response.status == 200) {
// 			return response.json();
// 		} else {
// 			return false;
// 		}
// 	})
// 	.catch(function(error) {
// 		return false;
// 	})
// 	.then(function(jsonifiedResponse) {
// 		getElements(jsonifiedResponse);

// 		});
// });

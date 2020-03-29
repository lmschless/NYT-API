![Image description]('./nyt-api.png')

# New York Times Article API - Independent Project for Epicodus. 

#### _Returns popular articles using the NYT API. Also has functionality to display search results of a given query. The app utlizes loops to display API responses all at once._

#### _3/28/20_

#### By _**Luke Schlessinger**_

## Setup/Installation Requirements
API key for grading purposes (I have it hidden in a .env file.) API_KEY = 3KfCi2cnPyWhA5FCqS3qlqUKULBAPRGk
* _Clone repo, run npm install, create a .env file in your project directory with the above API key line, type "npm run start" (you may have to refresh the page once for it to load). Try out both Buttons to see total functionality!_

## Specifications:
  * Spec 1: The app returns a list of popular articles from The New York Times API.
    + Input: Click "Get Most Popular NYT Articles"
    + Output: A list of 20 articles are listed from the NYT API response which include a number, title, byline, and image (including a URL link back to NYT.)
  * Spec 2: The app returns 10 search results for a given search term.
    + Input: Type a query into the input box and click "Search for an Article"
    + Output: A header that displays how many articles have been returned, total duration for the API response and 10 article search results. This list was created using an API response of Title, published date (formatted with date-format package), lead paragraph, and a click through link to the article itself.
     
## Future Features
* _Styling, UI design._

## Support and contact details

_Please open an issue if you find any bugs, thanks!_

## Technologies Used

_JS, jQuery, date-format package, .env file to hide API key, webpack,  CSS._

### License

* The MIT License (MIT) 

Copyright (c) 2020 **_Luke Schlessinger_**

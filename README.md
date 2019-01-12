# Game of Life
![The Game of Life Wiki](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)

## Rules

The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead, (or populated and unpopulated, respectively). Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

### Any live cell with fewer than two live neighbors dies, as if by underpopulation.
### Any live cell with two or three live neighbors lives on to the next generation.
### Any live cell with more than three live neighbors dies, as if by overpopulation.
### Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed; births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick. Each generation is a pure function of the preceding one. The rules continue to be applied repeatedly to create further generations.

### [game-of-life](https://rembr-app.herokuapp.com/) deployed on AWS

![Rembr Web Application](https://media.giphy.com/media/1XhtZPa4a7e4DaaReV/giphy.gif)

## Built With
* [docker](https://www.docker.com) - Packaged Software into Standardized Units for Development, Shipment and Deployment
* [enzyme](https://airbnb.io/enzyme/) - Enzyme is a JavaScript Testing utility for React
* [jest](https://jestjs.io/) - Front-end JavaScript testing library with little configuration required. 
* [react](https://reactjs.org/) - A JavaScript library for building component-based user interfaces
* [semantic ui](https://semantic-ui.com/) - Front-end framework for styling

## Inspiration
As any web developer will tell you, we love having multiple tabs open. Even if we don't intend on using the content of the tab for days, weeks, *or months*, we keep them open for that one time we might need the content on hand. This slows down your browser, prevents you from restarting your computer in fear of losing your precious tabs (*although with modern browsers, on restart, the browser will ask you to restore your tabs*). I wanted a way to avoid this pain point, without cluttering up my bookmarks with random web pages. *Fun fact* : During production, my active broswer window alone had 27 tabs open that I just couldn't let go of. 

## How I built it
Before I began coding out the app, I wireframed everything from the HTML page that pops up from the extension to the login and signup page. Mapping the structure of this app helped modularize all of my files in an MVC format and into reusable react components where applicable. My process:
 * Wireframes
 * Node-express server with MongoDB and front-end boilerplate code for React
 * Chrome extension to get XMLHTTP requests sending to the server.
 * Authentication for the chrome extension first (to have a email to assoicat the data with)
 * Authentication for the client-side web app.
 * Web designing, documentation
 * Hooked up application to Redux
 * Added testing with Jest/Enzyme
The front-end for the web app is built with react, redux, react-router, and bootstrap. The backend is built with a node server, express framework and mongodb as a database. The extension uses HTML, bootstrap, and jquery/javascript.

## Challenges I ran into
Before serious development even started, I knew I had to get ready to read the [chrome extension](https://developer.chrome.com/extensions/devguide) documentation. At first, the process of using background pages and content scripts seemed obscure but after reading through the docs, looking at examples, I was able to hone into exactly what my app needed. Some of the other *minor* issues I ran into along the way :
* Develop a meaningful and original idea that solves a pain point that either I or the developer community face
* Hooking up auth0 authentication for both the extension and the web app so users have access to their private data and it's secured. 
* Developers available: as the sole developer for this app, my full-stack abilities were stretched to their limits as I tried to incorporate all functioning components into a polished web application. 

## Accomplishments that I'm proud of
That being said, working on the entire app, from start to finish, including design specs, was immensly gratifying. Also, learning a new technology, google's [chrome extension](https://developer.chrome.com/extensions/devguide), proved to be a major boost in my confidence as a developer. Seamlessly including third party API's like particles-js and [indico.io](https://www.npmjs.com/package/indico.io) was also a great accomplishment.

## What I learned
I learned how beneficial wireframing and brainstorming are before any major project. I also followed git version control best practices (checking out to a separate branch, not pushing to master), but more importantly I followed a work flow developed on Trello. I was able to quantify my progress by checking back with the goals I set out at the start of the project. The goals and expectations mutated as the project went on but I was always able to work towards a MVP with key pieces in mind that I needed to incorporate.

## Author

- [Dariell Vasquez](https://github.com/Dquez)

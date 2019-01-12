# Game of Life
![The Game of Life Wiki](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)

## Rules

The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead, (or populated and unpopulated, respectively). Every cell interacts with its eight neighbors, which are the cells that are horizontal, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

* Any live cell with fewer than two live neighbors dies, as if by underpopulation.
* Any live cell with two or three live neighbors lives on to the next generation.
* Any live cell with more than three live neighbors dies, as if by overpopulation.
* Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed; births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick. Each generation is a pure function of the preceding one. The rules continue to be applied repeatedly to create further generations.


## Built With
* [docker](https://www.docker.com) - Packaged Software into Standardized Units for Development, Shipment and Deployment
* [enzyme](https://airbnb.io/enzyme/) - Enzyme is a JavaScript Testing utility for React
* [jest](https://jestjs.io/) - Front-end JavaScript testing library with little configuration required. 
* [react](https://reactjs.org/) - A JavaScript library for building component-based user interfaces
* [semantic ui](https://semantic-ui.com/) - Front-end framework for styling

## How I built it
Before I began coding out the app, I researched how the game is actually played. After sifting through Wikipedia and other articles, I had to think about what type of grid system I wanted to use to build the application. I initially started with a plain HTML grid but wasn't sure how I would add and remove blocks dynamically. That's when I turned to the array of arrays, to hold my tile pieces while the game was going on. When the component is being initialized, an empty grid is created with the help of some CSS. I chose to add in a random grid button because during testing, "flipping" the tiles myself was tedious. Once I got the basic grid layout and click handler in place, it was time for the 4 rule logic. Before you can determine if a tile should be turned on or off/ or dead or alive, you need to count how many potential neighbors it has. After cross-referencing the spaces around a given tile using a normalized x and y coordinate, neighbors are determined and the game logic determines if the tile should be alive or not. This process continues at an interval of 250 milliseconds, or until the user clicks the stop button or the clear board button.

## Challenges I ran into
It was initially difficult to conceptualize how the game was played, without looking into tutorials/Wikipedia pages. Once I thoroughly understood the game, the board format, and the rules, I was able to pseudocode some of the steps required. The tricky part is having all the moving pieces fit nicely together. Another challenge I ran into was deciding between using HTML5's canvas element, a plain HTML grid or the HTML/CSS option. In the end, it was easier to toggle on and off tile components if I layered them on top of the grid, instead of toggling on and off a piece of the grid itself. I also battled with whether or not to add React 16's context system to pass some data from a centralized store to both the Board and Tile component. After configuring the context.consumer, I realized it was making my code more difficult to read and less reusable, so I decided to stick with props and initial state. For code reusability, I made functional, pure components wherever possible, to avoid side effects in my code.

## Accomplishments that I'm proud of
Rolling out a fully functioning game with a full test suite. Also, dockerizing the app, makes it easy to share my code on hosting providers.

## What I learned
No matter what your strengths are, a fun yet challenging game like this could help you brush up on fundamental math and programming concepts while also challenging you to incorporate new material you may have learned.
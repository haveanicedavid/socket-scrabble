# David

Project: (Infinite) Scrabble

Technologies:

- WebSockets
- Node.js
- Canvas

Learning Goals:

- Learn how to facilitate server-client communication over WebSockets
- Update server and client-side data structures with based on events
- Render complicated data structures in the browser using Canvas
- Handle multi-user concurrencies issues
- Build a web server in Express using Node.js

First iteration:

- Project setup
  - Webpack configuration
- Basic game logic
  - Player can put letters on the board
  - Game checks for valid moves
  - Player can only put letters at the starting point or next to other letters
- Word checking
  - Player can dictate when they are done placing a word
  - Game checks to see if the word in valid
    - If it is not valid then it is removed
    - If it is valid then it is added to the player's score



TODO: 
- Center piece in the center of the board
- Place as much logic as possible in the server
- Put words array into a module exports in the server so taht client doesn't have to load
- Checkboard = returns wheteher the word is valid
  - if it isn't successful, 

- Keep board on the server, so client only sees updated stuff
- Move as much board logic as possible to the server
- Word checker -> takes a word, returns if it's valid
- Board should check if the move is valid 
  - Keep board object on the server that can tell clients what's up with the active pieces / data
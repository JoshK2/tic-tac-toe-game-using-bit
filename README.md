# Modular Tic Tac Toe Game built with TypeScript and tested with Mocha [![components](https://img.shields.io/bit/collection/total-components/joshk/tic-tac-toe-game.svg)](https://bit.dev/joshk/tic-tac-toe-game)

A simple Tic Tac Toe game build with TypeScript components and test with Mocha tester then shared them to [bit](https://bit.dev/joshk/tic-tac-toe-game) for testing in the live PlayGround and see the result of tests runnig in bit.  
Allow users to consume the entire game or just a part of the game components using NPM and Yarn or using bit to consume and modify the component directly inside the project.  

The game has multiple options to modify the game rules, like the dynamic dimension of the table, and the number of matching value to win the game.

Try the game in live PlayGround in the project [collection](https://bit.dev/joshk/tic-tac-toe-game)

<p align="center">
  <a href="https://bit.dev/joshk/tic-tac-toe-game"><img src="https://i.imagesup.co/images2/524e0b55c67eb5ae8a0ca15a76d54df9930a50c9.jpg"></a>
</p>

## Tutorial

See the full tutorial- build your own modular application with React TypeScript components.

**[Build a Tic Tac Toe App with TypeScript, React and Mocha](https://blog.bitsrc.io/build-a-tic-tac-toe-game-with-typescript-react-and-mocha-ce6f1e74c996)**.

## Import and use the entire game component in few seconds with NPM, Yarn and bit
To install components from this project, first configure [bit.dev](https://bit.dev) as a scoped registry (one-time action).  
```
npm config set '@bit:registry' https://node.bit.dev

npm i @bit/joshk.tic-tac-toe-game.game
yarn add @bit/joshk.tic-tac-toe-game.game
bit import joshk.tic-tac-toe-game/game
```

Then import the component in your app:
```
import React from 'react';
import Game from '@bit/joshk.tic-tac-toe-game.game';

export default <Game />
```

That's it!

## Button and input text

These components is used from [bit](https://bit.dev) to work less, and not create from scratch.

### PrimeReact
[primereact input text component](https://bit.dev/primefaces/primereact/inputtext)   
[primereact button component](https://bit.dev/primefaces/primereact/button)  

### to install them in your project

```bash
yarn add @bit/primefaces.primereact.inputtext
yarn add @bit/primefaces.primereact.button 
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)  

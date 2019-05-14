import React from 'react';
import './App.scss';
import Game from './components/Game';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="TicTacToe">
        <Game />
      </div>
    </div>
  );
}

export default App;

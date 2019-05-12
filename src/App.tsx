import React from 'react';
import './App.css';
import Game from './components/Game';

const App: React.FC = () => {
  return (
    <div className="App">
      <Game size={[5, 10]} />
    </div>
  );
}

export default App;

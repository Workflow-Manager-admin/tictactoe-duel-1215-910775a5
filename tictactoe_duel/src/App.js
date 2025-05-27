import React from 'react';
import './App.css';
import TicTacToeContainer from './components/TicTacToe/TicTacToeContainer';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> KAVIA AI
            </div>
            <button className="btn">Template Button</button>
          </div>
        </div>
      </nav>

      <main>
        <div className="container">
          <div className="hero">
            <div className="subtitle">Welcome to</div>
            <h1 className="title">TicTacToe Duel</h1>
            <div className="description">
              Classic game of X's and O's. Get three in a row to win!
            </div>
            <TicTacToeContainer />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
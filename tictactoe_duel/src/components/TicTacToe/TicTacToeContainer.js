import React, { useState } from 'react';
import './TicTacToe.css';

const TicTacToeContainer = () => {
    // Initialize game state
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [gameOver, setGameOver] = useState(false);

    // Calculate winner based on current board state
    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2], // top row
            [3, 4, 5], // middle row
            [6, 7, 8], // bottom row
            [0, 3, 6], // left column
            [1, 4, 7], // middle column
            [2, 5, 8], // right column
            [0, 4, 8], // diagonal
            [2, 4, 6], // diagonal
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    // Handle cell click
    const handleClick = (index) => {
        // Return if cell is filled or game is over
        if (board[index] || calculateWinner(board)) {
            return;
        }

        const newBoard = board.slice();
        newBoard[index] = isXNext ? 'X' : 'O';
        setBoard(newBoard);
        
        // Check if this move results in a win
        const winner = calculateWinner(newBoard);
        if (winner || newBoard.every(cell => cell !== null)) {
            setGameOver(true);
        }
        
        setIsXNext(!isXNext);
    };

    // Reset game state
    const handleRestart = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
        setGameOver(false);
    };

    // Determine game status
    const getGameStatus = () => {
        const winner = calculateWinner(board);
        if (winner) {
            return `Winner: ${winner}`;
        }
        if (board.every(cell => cell !== null)) {
            return "Game Draw!";
        }
        return `Next Player: ${isXNext ? 'X' : 'O'}`;
    };

    return (
        <div className="tictactoe-container">
            <div className="game-status">{getGameStatus()}</div>
            
            <div className="game-board">
                {board.map((cell, index) => (
                    <button
                        key={index}
                        className={`board-cell ${cell?.toLowerCase() || ''}`}
                        onClick={() => handleClick(index)}
                        disabled={gameOver}
                    >
                        {cell}
                    </button>
                ))}
            </div>

            <button 
                className="btn btn-large restart-button" 
                onClick={handleRestart}
            >
                Restart Game
            </button>
        </div>
    );
};

export default TicTacToeContainer;

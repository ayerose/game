import React, { useState } from 'react';
import { calculateWinner } from '../logic';
import Board from './Board';

const styles = {
  width: '200px',
  margin: '20px auto',
};

const styleBtn = {
  backgroundColor: '#40916c',
};

const pStyle = {
  fontSize: '26px',
  fontWeight: 'bold',
};
const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]); // create empty array
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]); // most Recent step

  const handleClick = (i) => {
    const timeInHistory = history.slice(0, stepNumber + 1);
    const current = timeInHistory[stepNumber];
    const squares = [...current];
    // if user clicks on already occupied square or if game is won -> then return
    if (winner || squares[i]) return;
    // put an X or an O in the clicked square
    squares[i] = xIsNext ? 'X' : 'O';
    setHistory([...timeInHistory, squares]);
    setStepNumber(timeInHistory.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const renderMoves = () =>
    history.map((_step, move) => {
      // render out btns where we jump back and forth
      const destination = move ? `Go to move#${move}` : 'Go to start';
      return (
        <li key={move}>
          <button style={styleBtn} onClick={() => jumpTo(move)}>
            {destination}
          </button>
        </li>
      );
    });

  return (
    <>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div style={styles}>
        <p style={pStyle}>
          {winner
            ? 'The winner is: ' + winner + '!'
            : 'The next Player is: ' + (xIsNext ? 'X' : 'O')}
        </p>
        {renderMoves()}
      </div>
    </>
  );
};

export default Game;

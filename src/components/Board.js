//scaffholding component
import React from 'react';
import Square from './Square';

const style = {
  border: '4px solid #52b788',
  borderRadius: '10px',
  width: '650px',
  height: '650px',
  margin: '0 auto',
  display: 'grid',
  gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
};

//maP through squares and display them
const Board = ({ squares, onClick }) => (
  <div style={style}>
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board;

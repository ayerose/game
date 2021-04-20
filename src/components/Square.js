//scaffholding component
import React from 'react';

//style squares
const style = {
  background: '#95d5b2',
  border: '2px solid #74c69d',
  fontSize: '30px',
  fontWeight: '800',
  cursor: 'pointer',
  outline: 'none',
};
const Square = ({ value, onClick }) => (
  <button style={style} onClick={onClick}>
    {value}
  </button>
);

export default Square;

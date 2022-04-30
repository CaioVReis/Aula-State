import React from 'react';

const Button = ({ clickCountadd, countValue, children }) => (
  <button onClick={() => clickCountadd(countValue + 1)}>{children} </button>
);

export default Button;

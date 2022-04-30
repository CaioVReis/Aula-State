import React, { useState } from 'react';
import './style.css';
import Label from './label';
import Button from './button';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>
        <Label Nmr={count} />
      </h1>
      <Button clickCountadd={setCount} countValue={count}>
        Contar
      </Button>

      <Button clickCountadd={setCount} countValue={count}>
        Diminuir
      </Button>
    </div>
  );
}

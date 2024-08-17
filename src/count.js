import './App.css';
import React from 'react';

export default function Count() {
    const [count, setCount] = React.useState(0);
    function increase() { setCount(count + 1); }
    function decrease() { setCount(count - 1); }
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={decrease} id="dec">decrease</button>
        <button onClick={increase} id="inc">increase</button>
      </div>
      
    );
  }
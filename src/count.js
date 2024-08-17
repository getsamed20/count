import './App.css';
import React from 'react';



export default function Count() {
    const [count, setCount] = React.useState(0);
    function increace() { setCount(count + 1); }
    function decreace() { setCount(count - 1); }
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={decreace} id="dec">decreace</button>
        <button onClick={increace} id="inc">increace</button>
      </div>
      
    );
  }
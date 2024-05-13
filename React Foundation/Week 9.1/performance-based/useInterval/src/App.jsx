import React, { useState, useEffect } from 'react';
import { useInterval } from './hooks/useInterval';

function App() {
  const [count,setCount]=useState(0);


   useInterval(()=>{setCount(c=>c+1)},1000);

  return (
    <div>
      <h1>Timer</h1>
      <p>You have been watching for {count} seconds.</p>
    </div>
  );
}

export default App;

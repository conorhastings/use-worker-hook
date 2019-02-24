import React, { useState, useEffect } from 'react';
import useWorker from 'use-worker-hook';

function add(a, b) {
  return a+b;
}
function App({a, b}) {
  const added = useWorker(add, 0, a);
  const added2 = useWorker(add, 0, b)
  return <h1>added: {added}{added2}</h1>

  
}

export default App;

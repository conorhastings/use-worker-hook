import { useState, useEffect } from 'React';
import workerize from 'workerize';

export default function useWorker(func, defaultReturn, functionArguments = []) {
  const [state, setState] = useState(defaultReturn);
  const [cachedWorker, setWorker] = useState(null);
  useEffect(function effect() {
    let worker = cachedWorker;
    const functionName = func.name;
    if (!worker) {
      let functionAsString = (
        typeof func === 'string' 
        ?
        'string' 
        : 
        `${func.toString()}`
      );
      functionAsString = (
        functionAsString.includes('export') 
        ? 
        functionAsString 
        : 
        `export ${functionAsString}`
      );
      worker = worker || workerize(functionAsString);
    }
    worker[functionName](...functionArguments).then(function callback(data) {
      setState(data);
      setWorker(worker);
    });
  }, [func, defaultReturn, functionArguments]);
  return state;
}
import { useState, useEffect } from "react";
import workerize from "workerize";

export default function useWorker({
  workerFunction,
  defaultReturn,
  functionArguments = []
}) {
  const [state, setState] = useState(null)
  useEffect(
    () => {
      const [cachedWorker, setWorker] = useState(null);
      let worker = cachedWorker;
      const functionName = workerFunction.name;
      if (!worker) {
        const functionAsString =
          typeof workerFunction === "string" ? workerFunction : `${workerFunction.toString()}`;
        functionAsString =
          functionAsString.includes("export") ||
          functionAsString.includes("/") ||
          functionAsString.includes(".js")
            ? functionAsString
            : `export ${functionAsString}`;
        worker = worker || workerize(functionAsString);
      }
      worker[functionName](...functionArguments).then(data => {
        setState(data);
        setWorker(worker);
      });
    },
    [workerFunction, functionArgume]
  );
  return state || defaultReturn;
}

<h1>useWorker</h1>

run a function in a webworker and return the value to your component asynchronously

<h1> usage </h1>

```bash
npm install use-worker-hook
```

```js
import useWorker from 'use-worker-hook';

function add(a, b) {
  return a+b;
}
export default function App({ a }) {
  const added = useWorker(add, 0, a); // this will run in a webworker
  return <h1>added: {added}</h1>
}

ReactDOM.render(<App a={[1,2]} />, document.getElementById('root't))
```
<h1><a href="https://codesandbox.io/s/p9o6n9m28m">Example in Codesandbox</a></h1>

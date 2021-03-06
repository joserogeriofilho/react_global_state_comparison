import { useContext } from 'react';
import { AppContext } from '../context'

function ReactContext({subtitle}) {
  const { counter, increment, decrement } = useContext(AppContext);

  return(
    <div>
      <h1>React Context</h1>
      <h3>{subtitle}</h3>
      <p>Counter: {counter}</p>
      <button onClick={() => increment() }>+</button>
      <button onClick={() => decrement() }>-</button>
    </div>
  );
}

export default ReactContext;
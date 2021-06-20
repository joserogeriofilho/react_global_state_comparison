import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/actions'

function ReduxNewWay() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return(
    <div>
      <h1>Redux New Way</h1>
      <h3>Counter com Redux useSelector, useDispatch</h3>
      <p>Counter: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default ReduxNewWay;
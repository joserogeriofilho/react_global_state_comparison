import { connect } from 'react-redux';
import { increment, decrement } from '../redux/actions'

function ReduxOldWay({count, increment, decrement}) {
  return(
    <div>
      <h1>Redux Old Way</h1>
      <h3>Counter com Redux connect, mapStateToProps, mapDispatchToProps</h3>
      <p>Counter: {count}</p>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
    </div>
  );
}

function mapStateToProps(state) {
  const { count } = state;
  return { count };
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxOldWay);
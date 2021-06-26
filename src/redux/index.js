import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const ReduxContext = ({children}) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
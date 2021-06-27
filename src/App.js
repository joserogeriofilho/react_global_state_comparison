import './App.css';

import { ReduxContext } from './redux';
import { CounterProvider, Counter2Provider } from './context'

import ReduxOldWay from './components/ReduxOldWay';
import ReduxNewWay from './components/ReduxNewWay';
import ReactContext from './components/ReactContext';


function App() {
  return (
    <div className="App">
      <ReduxContext>
        <ReduxOldWay />
        <ReduxNewWay />
      </ReduxContext>
      <CounterProvider>
        <ReactContext subtitle={"Getting the state using useContext hook"} />
      </CounterProvider>
      <Counter2Provider>
        <ReactContext subtitle={"Using a different Provider and a different counter"} />
      </Counter2Provider>
    </div>
  );
}

export default App;

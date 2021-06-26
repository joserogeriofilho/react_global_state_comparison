import './App.css';

import { ReduxContext } from './redux';
import { AppCounterProvider } from './context'

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
      <AppCounterProvider>
        <ReactContext />
      </AppCounterProvider>
    </div>
  );
}

export default App;

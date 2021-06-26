import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppCounterProvider = ({children}) => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(c => c+1);
  }

  const decrement = () => {
    setCounter(c => c+1);
  }

  return(
    <AppContext.Provider value={{counter, increment, decrement}}>
      {children}
    </AppContext.Provider>
  );
}
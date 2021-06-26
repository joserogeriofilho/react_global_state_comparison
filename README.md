# React Global State Comparison
Comparison between two global state strategies: **Redux** (both the connect() useService() functions) and **React Context API**

## Summary
1. Redux
      * Suggested File Structure
      * Configuration Steps

## Redux

### Suggested File Structure
```
+-- 📁 src
|   +-- 📁 redux
|     +-- 📁 actions
|       +-- 📄 actions1.js
|       ...
|       +-- 📄 actions9.js
|       +-- 📄 index.js
|     +-- 📁 reducers
|       +-- 📄 reducer1.js
|       ...
|       +-- 📄 reducer9.js
|       +-- 📄 index.js
|     +-- 📄 index.js
```

### Redux Configuration Steps
1. **Create the file structure** with at least one reducer file inside `reducers` folder and one actions file inside `actions` folder;
2. **Create your reducer functions** in separate files: one for each 'dominion' of your global state; after this, unify them all using `combineReducers` and export this 'one reducer to rule them all' as `rootReducer` (or whatever you wanna call it) in the `reducers/index.js` file;
3. **Create your action functions** inside `actions/index.js`; if your global state is of high complexicity is possible to separete them into differente files and export them all at once in the `actions/index.js` just like you did with the reducers;
4. **Create and export a `store`** on the `redux/index.js` using the `createStore` function and the root reducer created in the previous step;
4. **Create and export a `ReduxProvider`** on the `redux/index.js` file using the `Provider` component from the `react-redux` library and having the `{children}` as child of said component;
it's possible to not export this component and directly wrap your app with the `react-redux.Provider` component on the `index.js` or `App.js` files but in this case you'll need to import both `Provider` and your `store` in said files;
5. **Wrap your application with a Provider** in the `src/index.js` or `App.js` files using the `Provider` created in the previous step;
6. **Connect a component** with the store using `connect`, `mapStateAsProps` and `mapDispatchToProps` or **use the new react-redux hooks** `useSelector` and `useDispatch`;

## React Context API

### Suggested File Structure
```
+-- 📁 src
|   +-- 📁 context
|     +-- 📄 context1.js
|     ...
|     +-- 📄 index.js
```

### React Context API Configuration Steps
1. **Create the file structure**: if multiple providers are to be exported you can create separeted files to each `Provider` or simply put all your state in the `index.js` file;
2. **Create and export a context** in the `context/index.js` file using `createContext();
3. **Create and export a `provider` component** with whatever state (including functions) is needed and make it return the previously created context `Provider`, rendering the `children` prop;
4. **Import your provider component** in the `App.js` component and wrap the children component;
5. **Get the state using `useContext`** on the child component passing as argument the `Context` previously created;
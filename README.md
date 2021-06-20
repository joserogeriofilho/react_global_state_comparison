# React Global State Comparison
Comparison between two global state strategies: **Redux** (both the connect() useService() functions) and **React Context**

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

### Configuration Steps
1. **Create the file structure** with at least one reducer file inside `reducers` folder and one actions file inside `actions` folder;
2. **Create your reducer functions** in separate files: one for each 'dominion' of your global state; after this, unify them all using `combineReducers` and export this 'one reducer to rule them all' as `rootReducer` (or whatever you wanna call it) in the `reducers/index.js` file;
3. **Create your action functions** inside `actions/index.js`; if your global state is of high complexicity is possible to separete them into differente files and export them all at once in the `actions/index.js` just like you did with the reducers;
4. **Create and export a `store`** on the `redux/index.js` using the `createStore` function and the root reducer created in the previous step;
5. **Wrap your application with a Provider** in the `src/index.js` file passing the store created in the previous step;
6. **Connect a component** with the store using `connect`, `mapStateAsProps` and `mapDispatchToProps` or **use the new react-redux hooks** `useSelector` and `useDispatch`;
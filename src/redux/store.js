import { createStore, applyMiddleware, compose } from "redux";
import createDebounce from "redux-debounced";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
import { loadState, saveState } from '../utility/localstorage';


const enhancers = [];
// const initialState = {};
const middlewares = [thunk, createDebounce()];

if (process.env.NODE_ENV === 'development') {
  /* eslint-disable import/no-extraneous-dependencies, global-require */
  const logger = require('redux-logger').default;
  middlewares.push(logger);

  const { __REDUX_DEVTOOLS_EXTENSION__ } = window;

  if (typeof __REDUX_DEVTOOLS_EXTENSION__ === 'function') {
    enhancers.push(__REDUX_DEVTOOLS_EXTENSION__());
  }
}

const composedEnhancers = compose(applyMiddleware(...middlewares), ...enhancers);

const giveStore = () => {
  const persistedState = loadState();
  const store = createStore(
    rootReducer,
    persistedState,
    composedEnhancers
  );
  

  //user contains the TOKEN
  store.subscribe(() => {
    saveState({
      login: store.getState().login,
    });
  });
  return store;
};


export default giveStore;

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import authors from './author';

export const POETRYDB_API_KEY = `${process.env.REACT_APP_POETRYDB_API_KEY}`;

const reducer = combineReducers({ authors });
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

// const initialState = localStorage.state
//   ? JSON.parse(localStorage.state)
//   : undefined;
const store = createStore(reducer, middleware);

// Save the current store state to localStorage whenever it changes.
// store.subscribe(() => {
//   localStorage.state = JSON.stringify(store.getState());
// });

// const store = createStore(reducer, middleware);

export default store;
export * from './author';

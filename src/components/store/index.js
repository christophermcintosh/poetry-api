import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import authors from './author';
import isFetching from './isFetching';

export const POETRYDB_API_KEY = `${process.env.REACT_APP_POETRYDB_API_KEY}`;

const reducer = combineReducers({ authors, isFetching });
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

const store = createStore(reducer, middleware);

export default store;
export * from './author';
export * from './isFetching';

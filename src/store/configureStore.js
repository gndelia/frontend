import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { authMiddleware } from 'redux-implicit-oauth2';

import callAPIMiddleware from './callAPIMiddleware';
import rootReducer from './Reducers';

export default (initialState) => {
  const middleWareTools = compose(
      applyMiddleware(thunkMiddleware, callAPIMiddleware, authMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f,
  );
  return createStore(rootReducer, initialState, middleWareTools);
};


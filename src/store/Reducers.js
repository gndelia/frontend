import { combineReducers } from 'redux';
import { authReducer as auth } from 'redux-implicit-oauth2';
import seguidor from './Reducers/Seguidor';
import utnianosAuth from './Reducers/Auth';

const reduceReducers = (...reducers) => (previous, current) =>
  reducers.reduce(
    (p, r) => r(p, current),
    previous
  );

const rootReducer = combineReducers({
  seguidor,
  auth: reduceReducers(auth, utnianosAuth)
});

export default rootReducer;

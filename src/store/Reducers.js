import { combineReducers } from 'redux';
import { authReducer as auth } from 'redux-implicit-oauth2';
import seguidor from './Reducers/Seguidor';
import utnianosAuth from './Reducers/Auth';

const rootReducer = combineReducers({
  seguidor,
  auth,
  utnianosAuth
});

export default rootReducer;

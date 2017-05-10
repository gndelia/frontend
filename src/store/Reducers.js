import { combineReducers } from 'redux';
import { authReducer as auth } from 'redux-implicit-oauth2';
import seguidor from './Reducers/Seguidor';


const rootReducer = combineReducers({
  seguidor,
  auth
});

export default rootReducer;

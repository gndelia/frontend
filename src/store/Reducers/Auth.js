import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from 'redux-implicit-oauth2';

export default (state, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isLoggingIn: true };
    case LOGIN_SUCCESS:
      return { ...state, isLoggingIn: false };
    case LOGIN_FAILURE:
      return { ...state, isLoggingIn: false };
    case LOGOUT:
      return { ...state };
    default:
      return state;
  }
};

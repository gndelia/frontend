import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from 'redux-implicit-oauth2';

const initialState = {
  providers: [{
    name: 'google',
    url: 'https://accounts.google.com/o/oauth2/v2/auth',
    client: '288053943731-m7pcqqi602kqacaoki5fetmhgbbr5bka.apps.googleusercontent.com',
    redirect: 'http://localhost:3000',
    scope: 'openid profile email'
  }]
};

export default (state = initialState, action) => {
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

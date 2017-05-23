import { login, logout } from 'redux-implicit-oauth2';

const config = {
  url: 'https://accounts.google.com/o/oauth2/v2/auth',
  client: '288053943731-m7pcqqi602kqacaoki5fetmhgbbr5bka.apps.googleusercontent.com',
  redirect: 'http://localhost:3000',
  scope: 'openid profile email '
};

export const REQUEST_AUTH = 'REQUEST_AUTH';
export const RECEIVE_AUTH = 'RECEIVE_AUTH';
export const REQUEST_AUTH_FAILURE = 'REQUEST_AUTH_FAILURE';

export const doLogin = () => dispatch => login(config)(dispatch)
  .then((result) => {
    const provider = 'google';
    dispatch({
      types: [REQUEST_AUTH, RECEIVE_AUTH, REQUEST_AUTH_FAILURE],
      shouldCallAPI: () => true,
      endpoint: `login/token/${provider}`,
      callHeaders: { method: 'POST', mode: 'cors', cache: 'default' },
      payload: { token: result.token }
    });
  });

export const doLogout = logout;
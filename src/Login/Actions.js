import { login, logout } from 'redux-implicit-oauth2';
import Fetch from '../store/Fetch';

export const REQUEST_AUTH = 'REQUEST_AUTH';
export const RECEIVE_AUTH = 'RECEIVE_AUTH';
export const REQUEST_AUTH_FAILURE = 'REQUEST_AUTH_FAILURE';

export const doLogin = provider => dispatch => () => login(provider)(dispatch)
  .then((result) => {
    dispatch(Fetch.POST(`/api/login/token/${provider.name}`,
                        [REQUEST_AUTH, RECEIVE_AUTH, REQUEST_AUTH_FAILURE],
                        { token: result.token }
    ));
  });

export const doLogout = logout;

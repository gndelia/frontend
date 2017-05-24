import React from 'react';
import PropTypes from 'prop-types';

const Login = ({ isLoggedIn, isLoggingIn, onLogin, onLogout }) => {
  let caption;
  let onClick;
  if (isLoggingIn) {
    caption = '...';
    onClick = undefined;
  } else if (isLoggedIn) {
    caption = 'Logout';
    onClick = onLogout;
  } else {
    caption = 'Login';
    onClick = onLogin;
  }
  return <button type="button" onClick={onClick}>{caption}</button>;
};

Login.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  isLoggingIn: PropTypes.bool.isRequired,
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired
};

export default Login;

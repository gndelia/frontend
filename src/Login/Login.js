import React, { PropTypes } from 'react';

const Login = ({ isLoggedIn, onLogin, onLogout }) => {
  if (isLoggedIn) {
    return <button type="button" onClick={onLogout}>Logout</button>;
  } else {
    return <button type="button" onClick={onLogin}>Login</button>;
  }
};

Login.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired
};

export default Login;

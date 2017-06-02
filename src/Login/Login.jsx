import React from 'react';
import PropTypes from 'prop-types';
import cssModules from 'react-css-modules';

import Styles from './Login.scss';
import SocialLogin from './SocialLogin';

const Login = ({ isLoggedIn, isLoggingIn, onLogin, onLogout, providers }) => {
  return (
    <div className="loginContainer">
      <form>
        <input name="usuario" />
        <input name="password" type="password" />
      </form>
      <SocialLogin onLogin={onLogin} providers={providers} />
    </div>
  )
};

Login.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  isLoggingIn: PropTypes.bool.isRequired,
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired
};

export default cssModules(Login, Styles);

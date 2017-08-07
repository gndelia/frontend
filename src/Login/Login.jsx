import React from 'react'
import PropTypes from 'prop-types'
import cssModules from 'react-css-modules'

import Styles from './Login.scss'
import SocialLogin from './SocialLogin/SocialLogin'
import LoginForm from './LoginForm';

const Login = ({ isLoggedIn, onLogin, onLogout, providers }) => {

  if(!isLoggedIn)
  {
    return(
    <div styleName="loginContainer">

      <div styleName="LoginTitle">
  	     <h1>Login</h1>
  	  </div>

      <LoginForm />
      <SocialLogin onLogin={onLogin} providers={providers} />
    </div>
    );
  }
  else
  {
    return(
    <div styleName="loginContainer">
      <button type="button" onClick={onLogout}>Logout</button>
    </div>
    );
  }

}

Login.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  providers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    client: PropTypes.string,
    url: PropTypes.string,
    redirect: PropTypes.string,
    scope: PropTypes.string })).isRequired
}

export default cssModules(Login, Styles)

import React from 'react'
import PropTypes from 'prop-types'
import cssModules from 'react-css-modules'

import Styles from './Login.scss'
import SocialLogin from './SocialLogin/SocialLogin'

const Login = ({ isLoggedIn, onLogin, onLogout, providers }) => {
  const loginOrLogout = (!isLoggedIn) ?
    (<div>
      <form className="passwordLogin">
        <input name="usuario" />
        <input name="password" type="password" />
      </form>
      <SocialLogin onLogin={onLogin} providers={providers} />
    </div>) :
    (<button type="button" onClick={onLogout}>Logout</button>)
  return (
    <div className="loginContainer">
      {loginOrLogout}
    </div>
  )
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

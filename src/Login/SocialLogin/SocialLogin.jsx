import React from 'react';
import PropTypes from 'prop-types';

const SocialLogin = ({ onLogin, providers }) => {
  const maybeProviders = providers.map(prov =>
    <button type="button" key={prov.name} onClick={onLogin(prov)}>{prov.name}</button>);

  return (<div className="socialLogin">
    {maybeProviders}
  </div>)
}

SocialLogin.propTypes = {
  onLogin: PropTypes.func.isRequired,
  providers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    client: PropTypes.string,
    url: PropTypes.string,
    redirect: PropTypes.string,
    scope: PropTypes.string })).isRequired
}

export default SocialLogin;

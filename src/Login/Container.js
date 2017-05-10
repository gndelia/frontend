import { connect } from 'react-redux';
import { login, logout } from 'redux-implicit-oauth2';
import Login from './Login';

const config = {
  url: 'https://accounts.google.com/o/oauth2/v2/auth',
  client: '288053943731-m7pcqqi602kqacaoki5fetmhgbbr5bka.apps.googleusercontent.com',
  redirect: 'http://localhost:3000',
  scope: 'https://www.googleapis.com/auth/userinfo.profile'
};

const mapStateToProps = ({ auth }) => ({
  isLoggedIn: auth.isLoggedIn
});

const mapDispatchToProps = {
  onLogin: () => login(config),
  onLogout: logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

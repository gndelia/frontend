import { connect } from 'react-redux';
import { doLogin, doLogout } from './Actions';
import Login from './Login';

const mapStateToProps = ({ auth, utnianosAuth }) => ({
  isLoggedIn: auth.isLoggedIn,
  isLoggingIn: auth.isLoggingIn,
  providers: utnianosAuth.providers
});

const mapDispatchToProps = {
  onLogin: doLogin,
  onLogout: doLogout
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

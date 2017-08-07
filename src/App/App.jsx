import React from 'react';
import PropTypes from 'prop-types';
import cssModules from 'react-css-modules';
import Navbar from '../Navbar/Container';
import Footer from './Footer';
import Styles from './Base.scss';

const App = ({ children }) => (
  <div styleName="App">
    <Navbar />
    <div styleName="MainApp" >
      {children}
    </div>
    <Footer />
  </div>
);

App.propTypes = {
  children: PropTypes.element.isRequired
}

export default cssModules(App, Styles, { allowMultiple: true });

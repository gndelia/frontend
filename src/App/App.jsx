import React from 'react';
import cssModules from 'react-css-modules';
import Navbar from '../Navbar/Container';
import Footer from './Footer';
import Login from '../Login/Container';
import Styles from './Base.scss';

const App = ({ children }) => (
  <div styleName="App">
    <Navbar />
    <Login />
    <div styleName="MainApp" >
      {children}
    </div>
    <Footer />
  </div>
);

export default cssModules(App, Styles, { allowMultiple: true });

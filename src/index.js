import React from 'react';
import ReactDOM from 'react-dom';
import {createBrowserHistory} from 'history';
import {Router, Route, Switch} from 'react-router-dom';

import 'assets/scss/material-kit-react.scss?v=1.8.0';

// pages for this product
import HomePage from 'views/Home';
import LandingPage from 'views/LandingPage/LandingPage.js';
import ProfilePage from 'views/ProfilePage/ProfilePage.js';
import LoginPage from 'views/LoginPage/LoginPage.js';
import Components from 'views/Components/Components';
import ContactPage from 'views/ContactPage';
import AboutUsPage from 'views/AboutUsPage';

let hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage}/>
      <Route path="/profile-page" component={ProfilePage}/>
      <Route path="/login-page" component={LoginPage}/>
      <Route path="/sec" component={Components}/>
      <Route path='/contacto' component={ContactPage} />
      <Route path='/descubrenos' component={AboutUsPage}/>
      <Route path="/" component={HomePage}/>
    </Switch>
  </Router>,
  document.getElementById('root'),
);

import React from 'react';
import {createBrowserHistory} from 'history';
import {Router, Route, Switch} from 'react-router-dom';
import { render } from 'react-snapshot';

import 'assets/scss/material-kit-react.scss?v=1.8.0';

import HomePage from 'views/Home';
import ContactPage from 'views/ContactPage';
import AboutUsPage from 'views/AboutUsPage';

let hist = createBrowserHistory();

render(
  <Router history={hist}>
    <Switch>
      <Route exact path='/contacto' component={ContactPage} />
      <Route exact path='/descubrenos' component={AboutUsPage}/>
      <Route exact path="/" component={HomePage}/>
    </Switch>
  </Router>,
  document.getElementById('root'),
);

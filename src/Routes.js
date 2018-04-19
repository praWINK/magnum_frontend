import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { HomePage, LogInPage, ListCustomer, AddNewCustomer, EditCustomer,ViewCustomer} from './pages';
import createBrowserHistory from 'history/createBrowserHistory';
//import 'semantic-ui-css/semantic.min.css';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/master.css';

class Routes extends Component {
  render() {
    const history = createBrowserHistory()
    return (
      <Router history={history} >
        <div>
          <Route exact path="/" component={ListCustomer} />
          <Route  path="/addNewCustomer" component={AddNewCustomer} />
          <Route path="/editCustomer" component={EditCustomer} />
          <Route path="/viewCustomer" component={ViewCustomer} />
          <Route path="/log-in" component={LogInPage} />
        </div>
      </Router>
    );
  }
}

export default Routes;
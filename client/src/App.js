import React from 'react';
import {Provider} from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import {
  OfficePage,
  OverviewPage
} from './screens'
import store from './store'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/'>
              <OverviewPage/>
            </Route>
            <Route path='/companyDetail/:id/:name'>
              <OfficePage/>
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;

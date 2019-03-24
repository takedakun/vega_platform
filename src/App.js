import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Visualization from './components/visualization_page/index';
import TopPage from './components/top_page/index';
import UserPage from './components/user_page/index';
import NoMatch from './components/no_match/index';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={TopPage} />
          <Route exact path='/:id' component={UserPage} />
          <Route exact path='/:id/:vis_id' component={Visualization} />
          <Route componet={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;

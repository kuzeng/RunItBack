import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Main from './pages';

class App extends Component {
  render() {
    return (
      <div>
          <Switch>
            <Route path="/" component={Main} />
          </Switch>
      </div>
    );
  }
}

export default App;

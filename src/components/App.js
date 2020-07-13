import React, { Component } from 'react';
import {Router, Route} from 'react-router-dom'
import {history} from '../util/history'
import Home from './Home'
class App extends Component {
  render(){
  return (
    <div className="App">
      <Router history={history}>
        <Route path="/home" component={Home}/>
      </Router>
    </div>
  );
  }
}

export default App;

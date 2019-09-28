import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import GreetingWindow from './containers/GreetingWindow/GreetingWindow';
import SignIn from './containers/SignIn/SignIn';
import LogIn from './containers/LogIn/LogIn';
import DashBoard from './containers/DashBoard/DashBoard';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={GreetingWindow} />
      <Route exact path="/dashboard" component={DashBoard} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/login" component={LogIn} />
    </div>
  );
}

export default App;

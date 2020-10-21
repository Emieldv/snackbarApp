import React from 'react';
import Home from './pages/home';
import Order from './pages/order';
import Login from './pages/login';
import Pay from './pages/pay';
import Register from './pages/register';
import Profile from './pages/profile';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login}/>
        <Route path="/order" component={Order}/>
        <Route path="/pay" component={Pay}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/register" component={Register}/>
      </Switch>
    </Router>
  );
}

export default App
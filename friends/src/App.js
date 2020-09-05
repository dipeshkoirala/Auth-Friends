import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'

import ServerData from "./components/ServerData";
import PvtRoute from "./components/PvtRoute";
import { BrowserRouter as Router,Link, Switch , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <span> <h1 className="hch1 bg-primary">Authenticate-Friends</h1></span>
   <Router>
      {/* <Login/> */}
      <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Switch>
          <PvtRoute exact path="/protected" component={ServerData} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      
    </Router>
    </div>
  );
}

export default App;

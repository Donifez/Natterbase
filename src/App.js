import React from 'react';
import Personal from "./Account/personal";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard/dashboard";
import './App.css';

function App() {
  return (
    <div className="App">
   
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/personal" component={Personal} />
      </Switch>
    
    </div>
  );
}

export default App;

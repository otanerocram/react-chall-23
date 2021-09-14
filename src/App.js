import React from "react"
import LoginForm from "./components/LoginForm";
import PlanForm from "./components/PlanForm";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"


function App() {

  
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route 
          exact 
          path="/plan" 
          component={()=> <PlanForm authorized={true} />} />
      </Switch>
    </Router>
    // <LoginForm />
  );
}

export default App;

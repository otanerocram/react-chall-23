import React from "react";
import LoginForm from "./components/LoginForm";
import PlanForm from "./components/PlanForm";
import Gracias from "./components/Gracias";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route
          exact
          path="/plan"
          component={() => <PlanForm authorized={true} />}
        />
        <Route exact path="/gracias" component={Gracias} />
      </Switch>
    </Router>
    // <LoginForm />
  );
}

export default App;

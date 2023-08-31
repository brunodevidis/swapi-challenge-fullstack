import React from "react";
import Home from "./components/Home";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/main/main.scss";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// Pages
import IndexPage from "./pages/IndexPage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <IndexPage />
        </Route>
        <Route exact path={`/:id`}>
          <DetailPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

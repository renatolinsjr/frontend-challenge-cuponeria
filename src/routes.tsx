import React from "react";
import { Switch, Route } from "react-router-dom";

// Pages
import IndexPage from "./pages/IndexPage";
import DetailPage from "./pages/DetailPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <IndexPage />
      </Route>
      <Route exact path={`/:id`}>
        <DetailPage />
      </Route>
    </Switch>
  );
};

export default Routes;

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Users from "./sites/Users";
import UserEdit from "./sites/UserEdit";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path={"/users"} component={Users} />
          <Route exact path={"/userEdit"} component={UserEdit} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;

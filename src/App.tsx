import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Users from "./components/pages/Users";
import UserEdit from "./components/pages/UserEdit";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
// import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
      <Navbar></Navbar>
        <Switch>
          <Route exact path={"/users"} component={Users} />
          <Route exact path={"/"} component={Users} />
          <Route exact path={"/userEdit"} component={UserEdit} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;

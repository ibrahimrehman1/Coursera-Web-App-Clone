import React from "react";
import { Route, Switch } from "react-router-dom";
import Profile from "../components/Profile";
import Purchases from "../components/Purchases";
import Updates from "../components/Updates";
import Accomplishments from "../components/Accomplishments";
import Home from "../pages/Home";
import NotLoggedHome from "../pages/NotLoggedHome";

export default function Router() {
  return (
    <>
      <Switch>
        <Route component={localStorage.length ? Home : NotLoggedHome} path="/" exact />
        {/* <Route component={HomeComponent} path="/home" exact /> */}
        <Route component={Profile} path="/profile" exact />
        <Route component={Purchases} path="/purchases" exact />
        <Route component={Updates} path="/updates" exact />
        <Route component={Accomplishments} path="/accomplishments" exact />
      </Switch>
    </>
  );
}

import React from "react";
import { Route, Switch } from "react-router-dom";
import { ProfileComponent } from "../components/ProfileComponent.jsx";
import MyPurchases from "../components/MyPurchases.jsx";
import Updates from "../components/Updates.jsx";
import Accomplishments from "../components/Accomplishments.jsx";
import Home from "../pages/Home";
import NotLoggedHome from "../pages/NotLoggedHome";

export default function Router() {
  return (
    <>
      <Switch>
        <Route component={localStorage.length ? Home : NotLoggedHome} path="/" exact />
        {/* <Route component={HomeComponent} path="/home" exact /> */}
        <Route component={ProfileComponent} path="/profile" exact />
        <Route component={MyPurchases} path="/purchases" exact />
        <Route component={Updates} path="/updates" exact />
        <Route component={Accomplishments} path="/accomplishments" exact />
      </Switch>
    </>
  );
}

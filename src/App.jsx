import React from "react";
import {Navbar} from "./components/NavbarComponent.jsx";
import {Header} from "./components/HeaderComponent.jsx";
import {ArticleOne} from "./components/ArticleOneComponent.jsx";
import {Route, Switch} from "react-router-dom";
import {HomeComponent} from "./components/HomeComponent.jsx";
import {ProfileComponent} from "./components/ProfileComponent.jsx";
import {Divider} from "@material-ui/core";
import FooterComponent from "./components/FooterComponent.jsx";

function FirstMainComponent({history}){
  if (localStorage.length){
    history.push("/home");
  }
  return(
    <React.Fragment>
      <Navbar status={false} username="" history={history}/>
      <main>
        <Header />
        <ArticleOne history={history}/>
      </main>
    </React.Fragment>
  )
}


function App() {
  return (
    <div>
      <Switch>
        <Route component={FirstMainComponent} path="/" exact/>
        <Route component={HomeComponent} path="/home" exact/>
        <Route component={ProfileComponent} path="/profile" exact/>
      </Switch>
      
    </div>
  );
}

export default App;

import React from "react";
import {Header} from "./components/HeaderComponent.jsx";
import {ArticleOne} from "./components/ArticleOneComponent.jsx";
import {Route, Switch} from "react-router-dom";
import {HomeComponent} from "./components/HomeComponent.jsx";
import {ProfileComponent} from "./components/ProfileComponent.jsx";
import MyPurchases from "./components/MyPurchases.jsx";
import Updates from "./components/Updates.jsx";
import Accomplishments from "./components/Accomplishments.jsx";


function FirstMainComponent({history}){
  if (localStorage.length){
    history.push("/home");
  }
  return(
    <React.Fragment>
      <main>
        <Header />
        <ArticleOne/>
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
        <Route component={MyPurchases} path="/purchases" exact/>
        <Route component={Updates} path="/updates" exact/>
        <Route component={Accomplishments} path="/accomplishments" exact/>
      </Switch>
      
    </div>
  );
}

export default App;

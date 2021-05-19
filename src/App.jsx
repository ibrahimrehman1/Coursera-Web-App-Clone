import React from "react";
import {Navbar} from "./components/NavbarComponent.jsx";
import {Header} from "./components/HeaderComponent.jsx";
import {ArticleOne} from "./components/ArticleOneComponent.jsx";
import {Route, Switch} from "react-router-dom";
import {HomeComponent} from "./components/HomeComponent.jsx";

function FirstMainComponent({history}){
  return(
    <React.Fragment>
      <Navbar status={false} username="" history={history}/>
      <main>
        <Header />
        <ArticleOne />
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
      </Switch>
    </div>
  );
}

export default App;

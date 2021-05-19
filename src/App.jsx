import React from "react";
import {Navbar} from "./components/NavbarComponent.jsx";
import {Header} from "./components/HeaderComponent.jsx";
import {ArticleOne} from "./components/ArticleOneComponent.jsx";
import {Route, Switch, Link} from "react-router-dom";
import {HomeComponent} from "./components/HomeComponent.jsx";

function FirstMainComponent(){
  return(
    <React.Fragment>
      <Navbar/>
      <main>
        <Link to="/home">
          <Header />
        </Link>
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

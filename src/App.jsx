import React from "react";
import {Navbar} from "./components/NavbarComponent.jsx";
import {Header} from "./components/HeaderComponent.jsx";
import {ArticleOne} from "./components/ArticleOneComponent.jsx";
import {ArticleTwo} from "./components/ArticleTwoComponent.jsx";
import {ArticleThree} from "./components/ArticleThreeComponent.jsx";
import {ArticleFour} from "./components/ArticleFourComponent.jsx";
import {Route, Switch} from "react-router-dom";

function FirstMainComponent(){
  return(
    <main>
        <Header />
        <ArticleOne />
        <ArticleTwo />
        <ArticleThree />
        <ArticleFour />
    </main>
  )
}


function SecondMainComponent(){
  return(
    <main>
        
    </main>
  )
}


function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route component={FirstMainComponent} path="/" exact/>
        <Route component={SecondMainComponent} path="/home" exact/>
      </Switch>
    </div>
  );
}

export default App;

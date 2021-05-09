import React from "react";
import {Navbar} from "./components/NavbarComponent.jsx";
import {Header} from "./components/HeaderComponent.jsx";
import {ArticleOne} from "./components/ArticleOneComponent.jsx";
import {ArticleTwo} from "./components/ArticleTwoComponent.jsx";
import {ArticleThree} from "./components/ArticleThreeComponent.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Header />
        <ArticleOne />
        <ArticleTwo />
        <ArticleThree />
      </main>
    </div>
  );
}

export default App;

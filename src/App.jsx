import React from "react";
import {Navbar} from "./components/NavbarComponent.jsx";
import {Header} from "./components/HeaderComponent.jsx";
import {ArticleOne} from "./components/ArticleOneComponent.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Header />
        <ArticleOne />
      </main>
    </div>
  );
}

export default App;

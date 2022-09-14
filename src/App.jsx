import React from "react";
import { Header } from "./components/HeaderComponent.jsx";
import { ArticleOne } from "./components/ArticleOneComponent.jsx";
import Router from "./router";

export function FirstMainComponent({ history }) {
  if (localStorage.length) {
    history.push("/home");
  }
  return (
    <React.Fragment>
      <main>
        <Header />
        <ArticleOne />
      </main>
    </React.Fragment>
  );
}

function App() {
  return <Router />;
}

export default App;

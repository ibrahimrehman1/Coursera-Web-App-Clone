import React from "react";
import { Header } from "./HeaderComponent.jsx";
import { ArticleOne } from "./ArticleOneComponent.jsx";

export default function FirstMainComponent({ history }) {
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
  
import React from "react";
import Header from "./Header";
import GoalColloborationLearningOutcome from "./GoalCollaborationLearningOutcome";

export default function FirstMainComponent({ history }) {
    if (localStorage.length) {
      history.push("/home");
    }
    return (
      <>
        <main>
          <Header />
          <GoalColloborationLearningOutcome />
        </main>
      </>
    );
  }
  
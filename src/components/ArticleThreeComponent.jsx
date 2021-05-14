import React from "react";
import Outcomes from "../assets/outcomes.png";
import {Button} from "@material-ui/core"
import {LoginSignUp} from "./LoginSignUpComponent.jsx";

function ArticleThree(){
    return(
        <article className="article3">
            <img src={Outcomes} alt="" />
            <section className="article3-section">
                <h2>Learner outcomes on Coursera</h2>
                <p>87% of people learning for professional development report career benefits like getting a promotion, a raise, or starting a new career</p>
                <span>- Coursera Learner Outcomes Survey (2019)</span>
                <LoginSignUp pos="signuparticle3"/>
                <Button variant="contained" color="primary" className="navbar-btn" style={{alignSelf: "flex-start", marginTop: "20px"}} >
                    <strong>Try Coursera for Business</strong>
                </Button>
            </section>
        </article>
    )
}

export {ArticleThree};
import React from "react";
import ImageNextStep from "../assets/Image-Next-Step.png";
import {LoginSignUp} from "./LoginSignUpComponent.jsx";

export function ArticleFive(){
    return(
        <article className="article5">
            <img src={ImageNextStep} alt="" />
            <section>
                <h2>Take the next step toward your personal and professional goals with Coursera.</h2>
                <p style={{marginBottom: "50px"}}>Join now to receive personalized recommendations from the full Coursera catalog.
                oin for Free</p>
                <LoginSignUp pos="signupheader"/>
            </section>
        </article>
    );
}
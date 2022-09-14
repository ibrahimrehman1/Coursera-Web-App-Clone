import React from "react";
import {Button} from "@material-ui/core";
import HeroImg from "../../assets/hero-b.png";
import LoginSignup from "../LoginSignup";


export default function Header(){
    return(
        <header className="header">
            <div className="header-div1">
                <h1>Learn Without Limits</h1>
                <p>Build skills with courses, certificates, and degrees online from world-class universities and companies.</p>
                <LoginSignup pos="signupheader"/>
            </div>
            <div className="header-div2">
                <img src={HeroImg} alt="Hero Image" />
            </div>
        </header>
    )
}

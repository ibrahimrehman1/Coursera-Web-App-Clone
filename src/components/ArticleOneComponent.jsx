import React from "react";
import Illinois from "../assets/illinois.png"
import Duke from "../assets/duke.png"
import Google from "../assets/google.png"
import IBM from "../assets/ibm.png"
import Stanford from "../assets/stanford.png"
import Umich from "../assets/umich.jpg"
import Penn from "../assets/penn.png"
import Imperial from "../assets/imperial.png"

function ArticleOne(){
    return(
        <article className="article1">
            <h2>We collaborate with 200+ leading universities and companies</h2>
            <div className="article1-div">
                <ul>
                    <li>
                        <a href="#">
                            <img src={Illinois} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={Duke} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={Google} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={IBM} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={Umich} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={Penn} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={Imperial} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={Stanford} alt="" />
                        </a>
                    </li>
                    
                </ul>
            </div>
        </article>
    )
}

export {ArticleOne};
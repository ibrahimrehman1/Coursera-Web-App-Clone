import React from "react";
import IconLearn from "../assets/Icon-Learn.png";
import IconEarn from "../assets/Icon-Earn-Degree.png";
import IconGet from "../assets/Icon-Get-Ready.png";
import IconUpskill from "../assets/Icon-Upskill-your-org.png";


function ArticleTwo(){
    return(
        <article className="article2">
            <h2>Achieve your goals with Coursera</h2>
            <section className="article2-section">
                <div className="article2-section-div">
                    <img src={IconLearn} alt="" />
                    <h3>Learn the latest skills</h3>
                    <p>like business analytics, graphic design, Python, and more</p>
                </div>
                <div className="article2-section-div">
                    <img src={IconEarn} alt="" />
                    <h3>Get ready for a career</h3>
                    <p>in high-demand fields like IT, AI and cloud engineering</p>
                </div>
                <div className="article2-section-div">
                    <img src={IconGet} alt="" />
                    <h3>Earn a degree</h3>
                    <p>from a leading university in business, computer science, and more</p>
                </div>
                <div className="article2-section-div">
                    <img src={IconUpskill} alt="" />
                    <h3>Upskill your organization</h3>
                    <p>with on-demand training and development programs</p>
                </div>
            </section>
        </article>
    )
}

export {ArticleTwo};
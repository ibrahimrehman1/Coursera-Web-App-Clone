import React from "react";
import Illinois from "../assets/illinois.png"
import Duke from "../assets/duke.png"
import Google from "../assets/google.png"
import IBM from "../assets/ibm.png"
import Stanford from "../assets/stanford.png"
import Umich from "../assets/umich.jpg"
import Penn from "../assets/penn.png"
import Imperial from "../assets/imperial.png"
import ImageNextStep from "../assets/Image-Next-Step.png";
import {LoginSignUp} from "./LoginSignUpComponent.jsx";
import TopQualityImg from "../assets/top-quality-image.png";
import AccessibleCerts from "../assets/accessible-updated-certs.png";
import AppliedLearning from "../assets/applied-learning.png";
import CertificateCrop from "../assets/certificate-crop.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Outcomes from "../assets/outcomes.png";
import {Button} from "@material-ui/core"
import IconLearn from "../assets/Icon-Learn.png";
import IconEarn from "../assets/Icon-Earn-Degree.png";
import IconGet from "../assets/Icon-Get-Ready.png";
import IconUpskill from "../assets/Icon-Upskill-your-org.png";


function ArticleOne(){
    return(
        <article>
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
            <article className="article4">
                <h2>World-class learning for anyone, anywhere</h2>
                <img src={TopQualityImg} alt="" />
                <section>
                    <h4>Top Quality</h4>
                    <h3>Learn from leading universities and companies</h3>
                    <p>Start streaming on-demand video lectures today from top instructors in subjects like business, computer science, data science, language learning, &amp; more.
                    </p>
                </section>
                <img src={AccessibleCerts} alt="" />
                <section>
                    <h4>Accessible</h4>
                    <h3>Find flexible, affordable options</h3>
                    <p>Choose from many options including free courses and university degrees at a breakthrough price. Learn at your own pace, 100% online.
                    </p>
                </section>
                <img src={AppliedLearning} alt="" />
                <section style={{alignSelf: "flex-start"}}>
                    <h4>Applied Learning</h4>
                    <h3>Master skills with in-depth learning</h3>
                    <p>Apply what you learn with self-paced quizzes and hands-on projects. Get feedback from a global community of learners.
                    </p>
                </section>
                <img src={CertificateCrop} alt="" />
                <section>
                    <h4>Shareable Certificates</h4>
                    <h3>Earn industry-recognized credentials</h3>
                    <p>Demonstrate your new skills by sharing your Course Certificate, Professional Certificate, MasterTrack® Certificate, or diploma with your network.
                    </p>
                </section>
                <section id="coursera-community-section">
                    <h2 style={{textAlign: "center"}}>From the Coursera community</h2>
                    <p>77+ million people are already learning on Coursera
                    </p>
                    <Carousel>
                    <div>
                        <img src={CertificateCrop} style={{width: "50%"}}/>
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src={AppliedLearning} style={{width: "50%"}}/>
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src={AccessibleCerts} style={{width: "50%"}}/>
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
                </section>
            </article>
            <article className="article5">
                <img src={ImageNextStep} alt="" />
                <section>
                    <h2>Take the next step toward your personal and professional goals with Coursera.</h2>
                    <p style={{marginBottom: "50px"}}>Join now to receive personalized recommendations from the full Coursera catalog.
                    oin for Free</p>
                    <LoginSignUp pos="signupheader"/>
                </section>
            </article>
        </article>
    )
}

export {ArticleOne};
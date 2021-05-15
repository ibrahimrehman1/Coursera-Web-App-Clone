import React from "react";
import TopQualityImg from "../assets/top-quality-image.png";
import AccessibleCerts from "../assets/accessible-updated-certs.png";
import AppliedLearning from "../assets/applied-learning.png";
import CertificateCrop from "../assets/certificate-crop.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function ArticleFour(){
    return(
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
    )
}

export {ArticleFour};
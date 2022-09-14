import React from "react";
import GoogleIcon from "../../assets/gplay_icon.png";
import AppleIcon from "../../assets/apple_icon.png";
import CorpLogo from "../../assets/2018-B-Corp-Logo-Black-S.png";
import { Divider } from "@material-ui/core";

export default function Footer() {
  let courseraLinks = [
    "About",
    "What We Offer",
    "Leadership",
    "Careers",
    "Catalog",
    "Coursera Plus",
    "Professional Certificates",
    "MasterTrack Certificates",
    "Degrees",
    "For Enterprise",
    "For Government",
    "For Campus",
    "Coronavirus Response",
  ];

  let communityLinks = [
    "Learners",
    "Partners",
    "Developers",
    "Beta Testers",
    "Translators",
    "Blog",
    "Tech Blog",
    "Teaching Center",
  ];

  let moreLinks = [
    "Press",
    "Investors",
    "Terms",
    "Privacy",
    "Help",
    "Accessibility",
    "Contact",
    "Articles",
    "Directory",
    "Affiliates",
  ];
  return (
    <footer className="footer">
      <Divider />
      <div>
        <div>
          <h2>Coursera</h2>
          <ul className="coursera-footer-list">
            {courseraLinks.map((val, index) => {
              return <li key={index}>{val}</li>;
            })}
          </ul>
        </div>
        <div>
          <h2>Community</h2>
          <ul className="coursera-footer-list">
            {communityLinks.map((val, index) => {
              return <li key={index}>{val}</li>;
            })}
          </ul>
        </div>
        <div>
          <h2>More</h2>
          <ul className="coursera-footer-list">
            {moreLinks.map((val, index) => {
              return <li key={index}>{val}</li>;
            })}
          </ul>
        </div>
        <div>
          <h2>Mobile App</h2>
          <div class="app-img-div">
            <img src={AppleIcon} alt="Apple Icon" width="150px" />
            <img src={GoogleIcon} alt="Google Play Icon" width="150px" />
            <img src={CorpLogo} alt="Corp Icon" width="120px" />
          </div>
        </div>
      </div>
      <Divider />
      <div style={{justifyContent: "space-between"}}>
          <h6>&copy; 2021 Coursera Inc. All rights reserved.</h6>
          <section class="header-social-div">
                <div><i class="fab fa-facebook-f"></i></div>
                <div><i class="fab fa-instagram"></i></div>
                <div><i class="fab fa-linkedin-in"></i></div>
                <div><i class="fab fa-twitter"></i></div>
            </section>
      </div>

    </footer>

  );
}

import React from "react";
import { useSelector } from "react-redux";
import { Divider, Button } from "@material-ui/core";
import { Helmet } from "react-helmet";

export default function ProfileComponent() {
  const {achievements, workExperienceAndEducation} = useSelector((state) => {
    return state.Profile;
  });

  const {username, imageURI} = useSelector((state)=>{
    if (state.User.imageURI){
      return state.User;
    }
    return {username: localStorage.getItem("username"), imageURI: localStorage.getItem("imageURI")};
  });


  return (
    <>
      <Helmet>
        <title>{username} | Coursera</title>
      </Helmet>
      <main className="profile-main">
        <article className="profile-main-article">
          <img
            src={imageURI}
            alt="Profile Picture"
            style={{
              borderRadius: "50%",
              width: "150px",
              height: "auto",
              marginTop: "50px",
            }}
          />
          <h2 style={{ fontSize: "2rem", marginBottom: "0px" }}>{username}</h2>
          <h4 style={{ fontSize: "1.5rem" }}>Student</h4>
          <p>
            Currently learning Industrial IoT on Google Cloud Platform, Security
            Best Practices in Google Cloud
          </p>
        </article>
        <article className="achievements-article">
          <section className="achievements-article-section">
            <div>
              <h2>Achievements</h2>
              <a href="#">See All</a>
            </div>
          </section>
          <Divider />
          <section className="achievements-article-section2">
            {achievements.map((val, index) => {
              if (index < 4) {
                return (
                  <div key={index}>
                    <i class="fas fa-certificate"></i>
                    <div>
                      <h6>{val.courseName}</h6>
                      <span>Achieved {val.completionDate}</span>
                    </div>
                  </div>
                );
              }
            })}
          </section>
        </article>
        <article className="achievements-article">
          <section className="achievements-article-section">
            <div>
              <h2>Work Experience and Education</h2>
            </div>
          </section>
          <Divider />
          <ul style={{ listStyleType: "none" }}>
            {workExperienceAndEducation.map((val, index) => {
              return (
                <li key={index}>
                  <div>
                    <h4>{val.title}</h4>
                    <h6>{val.description}</h6>
                  </div>
                  <Divider />
                </li>
              );
            })}
          </ul>
        </article>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            color="primary"
            className="navbar-btn"
            style={{ marginLeft: "10px" }}
          >
            <strong>Edit Profile</strong>
          </Button>
        </div>
        
      </main>
    </>
  );
}

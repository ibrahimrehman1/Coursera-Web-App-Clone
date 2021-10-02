import React from "react";
import { Navbar } from "./NavbarComponent.jsx";
import { useSelector, useDispatch } from "react-redux";
import { updateUsername } from "../redux/actions";
import { Divider } from "@material-ui/core";

function ProfileComponent() {
  let username;
  let token;
  let dispatch = useDispatch();
  if (localStorage.length > 1) {
    username = localStorage.getItem("username");
  } else {
    token = localStorage.getItem("token");
  }
  username =
    useSelector((state) => {
      return state.User.username;
    }) || username;

  console.log(username);

  var achievements = useSelector((state)=>{
      return state.Profile.achievements;
  })

  console.log(achievements);

  React.useEffect(() => {
    if (!username) {
      async function fetchData() {
        let jsonData = await fetch("http://localhost:5000/username", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        });
        let data = await jsonData.json();
        console.log(data);
        dispatch(updateUsername(data.username));
      }
      fetchData();
    }
  }, []);

  username =
    useSelector((state) => {
      return state.User.username;
    }) || username;

  let imageURI =
    useSelector((state) => {
      return state.User.imageURI;
    }) || localStorage.getItem("imageURI");
  return (
    <>
      <Navbar status={true} username={username} imageURI={imageURI} />
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
                {
                    
                    achievements.map((val, index)=>{
                        if (index < 4){
                            return (<div key={index}>
                            <i class="fas fa-certificate"></i>
                            <div>
                                <h6>{val.courseName}</h6>
                                <span>Achieved {val.completionDate}</span>
                            </div>
                            </div>
                            );
                        }
                    })
                }
          </section>
        </article>
      </main>
    </>
  );
}

export { ProfileComponent };

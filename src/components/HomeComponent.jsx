import {useSelector, useDispatch} from "react-redux";
import {updateUsername} from "../redux/actions";
import React from "react";
import {Navbar} from "./NavbarComponent.jsx";


function HomeComponent(){
    let dispatch = useDispatch();
    let token = localStorage.getItem("token")
    let username = useSelector((state)=>{
      return state.User.username
    })
    console.log("Selector Username", username)
    React.useEffect(()=>{
      if (!username){
        console.log(username)
        async function fetchData(){
          let jsonData = await fetch("http://localhost:5000/username", {
              method: "POST",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify({token})
          })
          let data = await jsonData.json();
          console.log(data);
          dispatch(updateUsername(data.username))
        }
        fetchData();
      }
    }, [])

    username = useSelector((state)=>{
      return state.User.username
    })

    return(
      <React.Fragment>
  
        {localStorage.length ? <><Navbar status={true} username={username}/>
        <h1 style={{marginTop: "100px"}}></h1> </>: window.location.assign("/")}
        
      </React.Fragment>
    )
}

export {HomeComponent};
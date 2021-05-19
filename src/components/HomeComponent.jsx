import {useSelector, useDispatch} from "react-redux";
import {updateUsername} from "../redux/actions";
import React from "react";
import {Navbar} from "./NavbarComponent.jsx";


function HomeComponent(){
    let dispatch = useDispatch();
    React.useEffect(()=>{
      async function fetchData(){
        let jsonData = await fetch("http://localhost:5000/username", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({token: localStorage.getItem("token")})
        })
        let data = await jsonData.json();
        dispatch(updateUsername(data.username))
      }
      fetchData();
    }, [])
  
    let username = useSelector((state)=>{
      return state.User.username
    })
    
    return(
      <React.Fragment>
  
        {localStorage.length ? <><Navbar />
        <h1 style={{marginTop: "100px"}}>My name is {username}</h1> </>: window.location.assign("/")}
        
      </React.Fragment>
    )
}

export {HomeComponent};
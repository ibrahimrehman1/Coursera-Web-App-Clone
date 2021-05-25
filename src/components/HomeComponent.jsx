import {useSelector, useDispatch} from "react-redux";
import {updateUsername} from "../redux/actions";
import React from "react";
import {Navbar} from "./NavbarComponent.jsx";


function HomeComponent(){
  let username;
  let token;
  let dispatch = useDispatch();
  if (localStorage.length > 1){
    username = localStorage.getItem("username");
  }else{
    token = localStorage.getItem("token");
  }
  username = (useSelector((state)=>{
    return state.User.username
  })) || username

  console.log(username);  
  
  React.useEffect(()=>{
    if (!username){
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

  username = (useSelector((state)=>{
    return state.User.username
  })) || username

  let imageURI = useSelector(state=>{
    return(
      state.User.imageURI
    )
  }) || localStorage.getItem("imageURI");

  return(
    <React.Fragment>

      {localStorage.length ? <><Navbar status={true} username={username} imageURI={imageURI}/>
      </>: setTimeout(()=>window.location.assign("/"), 5000)}
      
    </React.Fragment>
  )
}

export {HomeComponent};
import React from "react";
import {Navbar} from "./NavbarComponent.jsx";
import {useSelector, useDispatch} from "react-redux";
import {updateUsername} from "../redux/actions";

function ProfileComponent(){
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
        <>
            <Navbar status={true} username={username} imageURI={imageURI}/>
            <main className="profile-main">
                <img src={imageURI} alt="Profile Picture" style={{borderRadius: "50%", width: "150px", height: "auto", marginTop: "50px"}}/>
                <h2 style={{fontSize: "2rem", marginBottom: "0px"}}>{username}</h2>
                <h4 style={{fontSize: '1.5rem'}}>Student</h4>
                <p>Currently learning Industrial IoT on Google Cloud Platform, Security Best Practices in Google Cloud</p>
            </main>
        </>
    )
}

export {ProfileComponent};
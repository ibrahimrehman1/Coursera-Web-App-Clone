import React, {useState} from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import AppleIcon from '@material-ui/icons/Apple';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Modal from '@material-ui/core/Modal';
import {makeStyles, TextField, Button} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {updateID, updateUsername, updateImageURI} from "../redux/actions";
import {Link} from "react-router-dom";
import {GoogleLogin} from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";


const useStyles2 = makeStyles((theme) => ({
    paper: {
        margin: "auto",
        display: "block",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        height: "60vw",
        overflow: "scroll"
    },
}));

export function LoginSignUp({pos, history}){
    const classes2 = useStyles2();
    const [open, setOpen] = useState(false);


    /* For First Modal*/
    const handleOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
    setOpen(false);
    };

    const dispatch = useDispatch();

    const signup = async () =>{
        const [fullname, email, password] = [document.querySelector("#fullName").value, document.querySelector("#email").value, document.querySelector("#password").value];
        if (fullname && email && password){
            try{
                let data = await fetch("http://localhost:5000/signup", {
                    method: "POST",
                    body: JSON.stringify({fullname, email, password}),
                    headers: {
                        "Content-Type": "application/json",
                    }
                })

                let userData = await data.json();
                localStorage.setItem("token", userData.token);
                console.log(userData);
                dispatch(updateID(userData.userID))
                dispatch(updateUsername(userData.username))
                

            }catch(err){
                console.log(err.message)
            }
        }
    }


    const login = async () =>{
        const [email, password] = [document.querySelector("#loginEmail").value, document.querySelector("#loginPassword").value];
        if (email && password){
            try{
                let data = await fetch("http://localhost:5000/login", {
                    method: "POST",
                    body: JSON.stringify({email, password}),
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                let userData = await data.json();
                dispatch(updateID(userData.userID))
                dispatch(updateUsername(userData.username))
                localStorage.setItem("token", userData.token);
                console.log(userData);
            }catch(err){
                console.log(err.message)
            }
        }
    }


    const [fullname, updateFullName] = useState("");
    const [email, updateEmail] = useState("");
    const [password, updatePassword] = useState("");
    

    function changeFullName(val){
        let nameSpan = document.querySelector("#span1");
        if (val.length > 20){
            nameSpan.innerHTML = "Username should contain less than or equal to 20 characters";
        }else if( val.length < 5){
            nameSpan.innerHTML = "Username should contain more than or equal to 5 characters";
            updateFullName(val);
        }
        else{
            nameSpan.innerHTML = "";
            updateFullName(val);

        }
    }

    function changeEmail(val){
        updateEmail(val);
    }

    function changePassword(val){
        let passwordSpan = document.querySelector("#span3");
        if (val.length > 20){
            passwordSpan.innerHTML = "Password should contain less than or equal to 20 characters";
        }else if( val.length < 5){
            passwordSpan.innerHTML = "Password should contain more than or equal to 5 characters";
            updatePassword(val);
        }
        else{
            passwordSpan.innerHTML = "";
            updatePassword(val);

        }
        
    }

    const googleSuccess = async (res)=>{
        console.log(res);
        const username = res.profileObj.name;
        const imageUrl = res.profileObj.imageUrl;
        dispatch(updateUsername(username));
        dispatch(updateImageURI(imageUrl));
        localStorage.setItem("access_token", res.tokenObj.access_token)
        localStorage.setItem("username", res.At.Ve)
        localStorage.setItem("imageURI", imageUrl)
        history.push("/home");
        
    }

    const googleFailure = (err)=>{
        console.log(err);
    }


    const responseFacebook = (res) =>{
        console.log(res);
        const username = res.name;
        dispatch(updateUsername(username));
        localStorage.setItem("access_token", res.accessToken)
        localStorage.setItem("username", username)
        history.push("/home");
    }

    const componentClicked = (data) =>{
        console.log(data);
    }

    const body = (
        <div className={classes2.paper}>
            <section className="signup-form-section">
                <h2>Signup</h2>
                <p>Learn on your own time from top universities and businesses.</p>
                <TextField id="fullName" label="Enter Your Full Name" variant="outlined" style={{marginTop: "20px", minWidth: "80%"}} value={fullname} onChange={(e)=>changeFullName(e.target.value)} spellCheck="false" required/>
                <span id="span1" style={{color: "red"}}></span>
                <TextField id="email" label="name@gmail.com" variant="outlined" style={{marginTop: "25px", minWidth: "80%"}} value={email} onChange={(e)=>changeEmail(e.target.value)} required/>
                <span id="span2"></span>
                <TextField id="password" label="Create Password" variant="outlined" style={{marginTop: "25px", minWidth: "80%"}} type="password" value={password} onChange={(e)=>changePassword(e.target.value)} required/>
                <span id="span3"></span>
                
                <Link to="/home" onClick={signup} style={{minWidth: "100%"}}>
                    <Button variant="contained" color="primary" style={{width: "80%", backgroundColor: "#0056D2", fontWeight: "400", marginTop: '30px', padding: ".9em"}}>
                        Join for Free
                    </Button>
                </Link>

                <p>-or-</p>

                <GoogleLogin 
                    clientId="746490706685-f6665foqhvjjoor7k27snfoj1qq36nb1.apps.googleusercontent.com"
                    render={(renderProps)=>{
                        return(
                        <Button variant="outlined" style={{width: "80%", fontWeight: "400", marginTop: '10px', padding: ".9em"}} startIcon={<GTranslateIcon />} onClick={renderProps.onClick} disabled={renderProps.disabled}>
                            Continue With Google
                        </Button>
                        )
                    }}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy='single_host_origin'
                />
                
                <FacebookLogin 
                appId="2701761796782192"
                autoLoad={false} 
                fields="name, email, picture" 
                callback={responseFacebook}
                onClick={componentClicked}
                render={renderProps=>(
                    <Button variant="outlined" style={{width: "80%", fontWeight: "400", marginTop: '10px', padding: ".9em"}} startIcon={<FacebookIcon />} onClick={renderProps.onClick}>
                        Continue With Facebook
                    </Button>
                )}/>
                
                
                

                <p>Already on Coursera? <a href="#" onClick={(e)=>handleOpenCloseModals(e.target.innerText)}>Log In</a></p>
                <a href="#">Sign Up with your Organization</a>
                <p style={{marginTop: "30px", opacity: ".8"}}>I accept Coursera's Terms of Use and Privacy Notice. Having trouble logging in? Learner help center
                <br></br>
                <br></br>

This site is protected by reCAPTCHA Enterprise and the Google Privacy Policy and Terms of Service apply.</p>

            </section>

        </div>
    );



    /* For Second Modal*/
    const [open2, setOpen2] = useState(false);

    const handleOpen2 = () => {
    setOpen2(true);
    };

    const handleClose2 = () => {
    setOpen2(false);
    };



    const body2 = (
    <div className={classes2.paper}>
        <section className="signup-form-section">
            <h2>Welcome Back</h2>
            
            <TextField id="loginEmail" label="name@gmail.com" variant="outlined" style={{marginTop: "25px", minWidth: "80%"}} required type="text"/>
            
            <TextField id="loginPassword" label="Enter Password" variant="outlined" style={{marginTop: "25px", minWidth: "80%"}} required type="password"/>
            
            <Link to="/home" onClick={login} style={{minWidth: "100%"}}>
                <Button variant="contained" color="primary" style={{width: "80%", backgroundColor: "#0056D2", fontWeight: "400", marginTop: '30px', padding: ".9em"}}>
                    Login
                </Button>
            </Link>

            <p>-or-</p>

            <GoogleLogin 
                    clientId="746490706685-f6665foqhvjjoor7k27snfoj1qq36nb1.apps.googleusercontent.com"
                    render={(renderProps)=>{
                        return(
                        <Button variant="outlined" style={{width: "80%", fontWeight: "400", marginTop: '10px', padding: ".9em"}} startIcon={<GTranslateIcon />} onClick={renderProps.onClick} disabled={renderProps.disabled}>
                            Continue With Google
                        </Button>
                        )
                    }}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy='single_host_origin'
            />

            <FacebookLogin 
                appId="2701761796782192"
                autoLoad={false} 
                fields="name, email, picture" 
                callback={responseFacebook}
                onClick={componentClicked}
                render={renderProps=>(
                    <Button variant="outlined" style={{width: "80%", fontWeight: "400", marginTop: '10px', padding: ".9em"}} startIcon={<FacebookIcon />} onClick={renderProps.onClick}>
                        Continue With Facebook
                    </Button>
            )}/>

            <Button variant="outlined" style={{width: "80%", fontWeight: "400", marginTop: '10px', padding: ".9em"}} startIcon={<AppleIcon />}>
                Continue With Apple
            </Button>

            <p>New to Coursera? <a href="#" onClick={(e)=>handleOpenCloseModals(e.target.innerText)}>Sign Up</a></p>
            <a href="#">Log in with your Organization</a>
            <p style={{marginTop: "30px", opacity: ".8"}}>Having trouble logging in? Learner help center
            <br></br>
            <br></br>

            This site is protected by reCAPTCHA Enterprise and the Google Privacy Policy and Terms of Service apply.</p>

        </section>

    </div>
    );


    function handleOpenCloseModals(txt){
        if (txt === "Sign Up"){
          handleClose2()
          handleOpen();
        }else{
          handleClose()
          handleOpen2();
        }
    }

    return(
        <React.Fragment>
            {pos === "signup" ? <Button variant="contained" color="primary" className="navbar-btn" endIcon={<ArrowDownwardIcon />} onClick={handleOpen}>
                <strong>Join for Free</strong>
            </Button> : pos === "signupheader" ? <Button variant="contained" color="primary" className="navbar-btn" endIcon={<ArrowDownwardIcon />} onClick={handleOpen} style={{alignSelf: "start"}}>
                <strong>Join for Free</strong>
            </Button>: pos === "signuparticle3" ? <Button variant="contained" color="primary" className="navbar-btn" endIcon={<ArrowDownwardIcon />} onClick={handleOpen} style={{alignSelf: "start", marginTop: "20px"}}>
                <strong>Join for Free</strong>
            </Button> :<a href="#" onClick={handleOpen2}>Login</a>}
            
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>

            <Modal
                open={open2}
                onClose={handleClose2}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body2}
            </Modal>
        </React.Fragment>
       
    )
}
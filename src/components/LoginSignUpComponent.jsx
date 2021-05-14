import React, {useState} from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import AppleIcon from '@material-ui/icons/Apple';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Modal from '@material-ui/core/Modal';
import {makeStyles, TextField, Button} from "@material-ui/core";


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

export function LoginSignUp({pos, updateUserStatus}){
    const classes2 = useStyles2();
    const [open, setOpen] = useState(false);


    /* For First Modal*/
    const handleOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
    setOpen(false);
    };



    const signup = async () =>{
        const [fullname, email, password] = [document.querySelector("#fullName").value, document.querySelector("#email").value, document.querySelector("#password").value];
        if (fullname && email && password){
            let data = await fetch("http://localhost:5000/signup", {
                method: "POST",
                body: JSON.stringify({fullname, email, password}),
                headers: {
                    "Content-Type": "application/json",
                }
            })

            let {userID, token} = await data.json();
            if (userID){
                updateUserStatus(true);
            }
        }
    }



    const [fullname, updateFullName] = useState("");
    const [email, updateEmail] = useState("");
    const [password, updatePassword] = useState("");
    
    let emailSpan = document.querySelector("#span2");

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
                
                <Button variant="contained" color="primary" style={{width: "80%", backgroundColor: "#0056D2", fontWeight: "400", marginTop: '30px', padding: ".9em"}} onClick={signup}>
                    Join for Free
                </Button>

                <p>-or-</p>

                <Button variant="outlined" style={{width: "80%", fontWeight: "400", marginTop: '10px', padding: ".9em"}} startIcon={<GTranslateIcon />}>
                    Continue With Google
                </Button>

                <Button variant="outlined" style={{width: "80%", fontWeight: "400", marginTop: '10px', padding: ".9em"}} startIcon={<FacebookIcon />}>
                    Continue With Facebook
                </Button>

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
            
            <TextField id="outlined-basic" label="name@gmail.com" variant="outlined" style={{marginTop: "25px", minWidth: "80%"}} />
            
            <TextField id="outlined-basic" label="Create Password" variant="outlined" style={{marginTop: "25px", minWidth: "80%"}}/>

            <Button variant="contained" color="primary" style={{width: "80%", backgroundColor: "#0056D2", fontWeight: "400", marginTop: '30px', padding: ".9em"}}>
                Login
            </Button>

            <p>-or-</p>

            <Button variant="outlined" style={{width: "80%", fontWeight: "400", marginTop: '10px', padding: ".9em"}} startIcon={<GTranslateIcon />}>
                Continue With Google
            </Button>

            <Button variant="outlined" style={{width: "80%", fontWeight: "400", marginTop: '10px', padding: ".9em"}} startIcon={<FacebookIcon />}>
                Continue With Facebook
            </Button>

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
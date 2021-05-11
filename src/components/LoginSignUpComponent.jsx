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

export function LoginSignUp({pos}){
    const classes2 = useStyles2();
    const [open, setOpen] = useState(false);


    /* For First Modal*/
    const handleOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
    setOpen(false);
    };


    const body = (
        <div className={classes2.paper}>
            <section className="signup-form-section">
                <h2>Signup</h2>
                <p>Learn on your own time from top universities and businesses.</p>
                
                <TextField id="outlined-basic" label="Enter Your Full Name" variant="outlined" style={{marginTop: "20px", minWidth: "80%"}}/>
                
                <TextField id="outlined-basic" label="name@gmail.com" variant="outlined" style={{marginTop: "25px", minWidth: "80%"}} />
                
                <TextField id="outlined-basic" label="Create Password" variant="outlined" style={{marginTop: "25px", minWidth: "80%"}}/>

                <Button variant="contained" color="primary" style={{width: "80%", backgroundColor: "#0056D2", fontWeight: "400", marginTop: '30px', padding: ".9em"}}>
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
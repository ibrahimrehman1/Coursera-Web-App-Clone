import React, {useState} from "react";
import clsx from "clsx";
import CourseraLogo from "../assets/CourseraLogo.png";
import {Button, TextField} from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import FacebookIcon from '@material-ui/icons/Facebook';
import GTranslateIcon from '@material-ui/icons/GTranslate';

import {
    SwipeableDrawer, 
    makeStyles, 
    List, ListItem, 
    ListItemText, 
    Divider,
    ListSubheader,
    FormControl,
    InputLabel,
    Input,
} from "@material-ui/core";
import Modal from '@material-ui/core/Modal';



function rand() {
    return Math.round(Math.random() * 20) - 10;
}
  
// function getModalStyle() {
//     const top = 50 + rand();
//     const left = 50 + rand();

//     return {
//         top: `${top}%`,
//         left: `${left}%`,
//         transform: `translate(-${top}%, -${left}%)`,
//     };
// }
  
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
  

const useStyles = makeStyles({
    list: {
      width: 300,
    },
    fullList: {
      width: 'auto',
    },
});


function Navbar(){
    const classes = useStyles();
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };


    const list = (anchor) => (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
          })}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
                <ListSubheader style={{color: "black", fontSize: "1.2rem"}} disableSticky="true">
                  <strong>Goals</strong>
                </ListSubheader>
            {['Take a Free Course', 'Earn a Degree', 'Earn a Certificate', 'Launch or advance your Career'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
                <ListSubheader  style={{color: "black", fontSize: "1.2rem"}} disableSticky="true">
                    <strong>Subjects</strong>
                </ListSubheader>
            {['Data Science', 'Business', 'Computer Science', 'Information Technology', 'Language Learning', 'Health', 'Personal Development', 'Physical Science and Engineering', 'Social Sciences', 'Arts and Humanities', 'Math and Logic'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
                <ListItem style={{marginTop: "20px"}}>
                    <Button variant="contained" color="primary" className="navbar-btn">
                    <strong>Browse all Subjects</strong>
                    </Button>
                </ListItem>
          </List>
        </div>
      );




      const classes2 = useStyles2();
      const [open, setOpen] = React.useState(false);
    
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

                <p>Already on Coursera? <a href="#">Log In</a></p>
                <a href="#">Sign Up with your Organization</a>
                <p style={{marginTop: "30px", opacity: ".8"}}>I accept Coursera's Terms of Use and Privacy Notice. Having trouble logging in? Learner help center
                <br></br>
                <br></br>

This site is protected by reCAPTCHA Enterprise and the Google Privacy Policy and Terms of Service apply.</p>

            </section>

        </div>
      );













    return(
        <nav className="navbar">
            <a href="#">
                <img src={CourseraLogo} alt="Coursera Logo" className="coursera-logo"/>
            </a>


            <Button variant="contained" color="primary" className="navbar-btn" endIcon={<ArrowDownwardIcon />} onClick={toggleDrawer("left", true)}>
                <strong>Explore</strong>
            </Button>

            <SwipeableDrawer
                anchor="left"
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
                onOpen={toggleDrawer("left", true)}
                >
                {list("left")}
            </SwipeableDrawer>


            <TextField id="outlined-basic" label="What do you want to learn?" variant="outlined" className="search-bar"/>
            <Button variant="contained" color="primary" className="search-bar-btn">
                <SearchIcon />
            </Button>
            <Button color="dark" className="navbar-btn2">Enterprise</Button>
            <ul className="nav-list">
                <li>
                    <a href="#">Students</a>
                </li>
                <li>
                    <a href="#">Login</a>
                </li>
            </ul>
            <Button variant="contained" color="primary" className="navbar-btn" endIcon={<ArrowDownwardIcon />} onClick={handleOpen}>
                <strong>Join for Free</strong>
            </Button>



            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </nav>
    )
}

export {Navbar};
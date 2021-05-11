import React, {useState} from "react";
import clsx from "clsx";
import CourseraLogo from "../assets/CourseraLogo.png";
import {Button, TextField} from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import FacebookIcon from '@material-ui/icons/Facebook';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import AppleIcon from '@material-ui/icons/Apple';
import { withStyles } from '@material-ui/core/styles';

import {
    SwipeableDrawer, 
    makeStyles, 
    List, ListItem, 
    ListItemText, 
    Divider,
    ListSubheader,
    Menu,
    MenuItem
} from "@material-ui/core";
import Modal from '@material-ui/core/Modal';

  


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));


const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);



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
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };






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




      const [open2, setOpen2] = React.useState(false);
    
      const handleOpen2 = () => {
        setOpen2(true);
      };
    
      const handleClose2 = () => {
        setOpen2(false);
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


      function handleOpenCloseModals(txt){
        if (txt === "Sign Up"){
          handleClose2()
          handleOpen();
        }else{
          handleClose()
          handleOpen2();
        }
      }



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
            <Button color="dark" className="navbar-btn2" endIcon={<ArrowDownwardIcon />} onClick={handleClick}>Enterprise</Button>
            <ul className="nav-list">
                <li>
                    <a href="#">Students</a>
                </li>
                <li>
                    <a href="#" onClick={handleOpen2}>Login</a>
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

            <Modal
                open={open2}
                onClose={handleClose2}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body2}
            </Modal>



            <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <StyledMenuItem>
          <ListItemText primary="Coursera for Business" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Coursera for Teams" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Coursera for Government" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Coursera for Campus" />
        </StyledMenuItem>
      </StyledMenu>
        </nav>
    )
}

export {Navbar};
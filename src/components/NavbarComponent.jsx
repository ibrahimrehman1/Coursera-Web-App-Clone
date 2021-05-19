import React, {useState, useEffect} from "react";
import clsx from "clsx";
import CourseraLogo from "../assets/CourseraLogo.png";
import {Button, TextField} from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
import {NavbarStyledMenu} from "./NavbarStyledMenuComponent.jsx";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import {LoginSignUp} from "./LoginSignUpComponent.jsx";
import {Link} from "react-router-dom";

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

      



      const [anchorEl, setAnchorEl] = React.useState(null);

      const handleUserClick = (event) => {
        setAnchorEl(event.currentTarget);
      };

      const handleUserClose = () => {
        setAnchorEl(null);
      };



    
    return(
        <nav className="navbar">
            <div style={{display: "flex", alignSelf: "flex-start"}}>
              <Link to="/">
                  <img src={CourseraLogo} alt="Coursera Logo" className="coursera-logo"/>
              </Link>


              <Button variant="contained" color="primary" className="navbar-btn" endIcon={<ArrowDownwardIcon />} onClick={toggleDrawer("left", true)} style={{marginLeft: "10px"}}>
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

              <div style={{marginLeft: "10px", display: "inline-flex"}}>
                <TextField id="outlined-basic" label="What do you want to learn?" variant="outlined" className="search-bar"/>
                <Button variant="contained" color="primary" className="search-bar-btn">
                    <SearchIcon />
                </Button>
              </div>
            </div>
            
            
            
          {/* {!user_status ? 
          <React.Fragment>
            <NavbarStyledMenu />
            <ul className="nav-list">
                <li>
                    <LoginSignUp pos="login"/>

                </li>
            </ul>
            <LoginSignUp pos="signup"/>
          </React.Fragment>
          : 
            <div style={{alignSelf: "center"}}>
              <NavbarStyledMenu />
              <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleUserClick}>
                Ibrahim
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleUserClose}
              >
                <MenuItem onClick={handleUserClose}>Profile</MenuItem>
                <MenuItem onClick={handleUserClose}>My Purchases</MenuItem>
                <MenuItem onClick={handleUserClose}>Settings</MenuItem>
                <MenuItem onClick={handleUserClose}>Updates</MenuItem>
                <MenuItem onClick={handleUserClose}>Accomplishments</MenuItem>
                <MenuItem onClick={handleUserClose}>Help Center</MenuItem>
                <MenuItem onClick={handleUserClose}>Logout</MenuItem>
              </Menu>
            </div>
            
            
            } */}
            <React.Fragment>
              <NavbarStyledMenu />
              <ul className="nav-list">
                  <li>
                      <LoginSignUp pos="login"/>

                  </li>
              </ul>
              <LoginSignUp pos="signup"/>
          </React.Fragment>

          
        </nav>
    )
}

export {Navbar};
import React, { useState } from "react";
import clsx from "clsx";
import CourseraLogo from "../../assets/CourseraLogo.png";
import { Button, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import NavbarMenu from "../NavbarMenu";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useSelector } from "react-redux";
import LoginSignup from "../LoginSignup";

import {
  SwipeableDrawer,
  makeStyles,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListSubheader,
  Menu,
  MenuItem,
} from "@material-ui/core";

const useStyles = makeStyles({
  list: {
    width: 350,
  },
  fullList: {
    width: "auto",
  },
});

export default function Navbar() {
  let subjects = useSelector((state) => {
    return state.Subject.subjects;
  });

  let username =
    useSelector((state) => {
      return state.User.username;
    }) || localStorage.getItem("username");

  let imageURI =
    useSelector((state) => {
      return state.User.imageURI;
    }) || localStorage.getItem("imageURI");

  const classes = useStyles();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListSubheader
          style={{ color: "black", fontSize: "1.2rem" }}
          disableSticky="true"
        >
          <strong>Goals</strong>
        </ListSubheader>
        {[
          "Take a Free Course",
          "Earn a Degree",
          "Earn a Certificate",
          "Launch or advance your Career",
        ].map((text, index) => (
          <ListItem button key={index}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader
          style={{ color: "black", fontSize: "1.2rem" }}
          disableSticky="true"
        >
          <strong>Subjects</strong>
        </ListSubheader>
        {subjects.map((subject, index) => (
          <>
            <ListItem key={index}>
              <NavbarMenu
                subject={subject}
                styleProps={{ width: "100%" }}
              />
            </ListItem>
          </>
        ))}
        <ListItem style={{ marginTop: "20px" }}>
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

  const handleUserLogout = () => {
    localStorage.clear();
    window.location.assign("/");
    setAnchorEl(null);
  };

  const handleUserClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="navbar">
      <div style={{ display: "flex", alignSelf: "flex-start" }}>
        <Link to="/">
          <img
            src={CourseraLogo}
            alt="Coursera Logo"
            className="coursera-logo"
          />
        </Link>

        <Button
          variant="contained"
          color="primary"
          className="navbar-btn"
          endIcon={<ArrowDownwardIcon />}
          onClick={toggleDrawer("left", true)}
          style={{ marginLeft: "10px" }}
        >
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

        <div style={{ marginLeft: "10px", display: "inline-flex" }}>
          <TextField
            id="outlined-basic"
            label="What do you want to learn?"
            variant="outlined"
            className="search-bar"
          />
          <Button
            variant="contained"
            color="primary"
            className="search-bar-btn"
          >
            <SearchIcon />
          </Button>
        </div>
      </div>

      {!username ? (
        <React.Fragment>
          <Button>Enterprise</Button>
          <ul className="nav-list">
            <li>
              <LoginSignup pos="login" />
            </li>
          </ul>
          <LoginSignup pos="signup" />
        </React.Fragment>
      ) : (
        <div style={{ alignSelf: "center" }}>
          <Button>Enterprise</Button>
          <div className="btnDivider"></div>

          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleUserClick}
            startIcon={
              imageURI ? (
                <img
                  src={imageURI}
                  style={{ borderRadius: "50%", width: "50px" }}
                />
              ) : (
                <AccountCircleIcon
                  style={{ fontSize: "2.8rem", color: "#3BAFDA" }}
                />
              )
            }
          >
            {username}
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleUserClose}
          >
            <MenuItem>
              <Link to="/profile" style={{ color: "inherit", width: "100%" }}>
                Profile
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/purchases" style={{ color: "inherit", width: "100%" }}>
                My Purchases
              </Link>
            </MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>
              <Link to="/updates" style={{ color: "inherit", width: "100%" }}>
                Updates
              </Link>
            </MenuItem>
            <MenuItem>
            <Link to="/accomplishments" style={{ color: "inherit", width: "100%" }}>

            Accomplishments
            </Link>
            </MenuItem>
            <MenuItem>Help Center</MenuItem>
            <MenuItem onClick={() => handleUserLogout("logout")}>
              Logout
            </MenuItem>
          </Menu>
        </div>
      )}
    </nav>
  );
}


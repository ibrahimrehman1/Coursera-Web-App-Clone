import React from "react";
import CourseraLogo from "../assets/CourseraLogo.png";
import {Button, TextField} from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


function Navbar(){
    return(
        <nav className="navbar">
            <a href="#">
                <img src={CourseraLogo} alt="Coursera Logo" className="coursera-logo"/>
            </a>
            <Button variant="contained" color="primary" className="navbar-btn" endIcon={<ArrowDownwardIcon />}>
                <strong>Explore</strong>
            </Button>
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
            <Button variant="contained" color="primary" className="navbar-btn" endIcon={<ArrowDownwardIcon />}>
                <strong>Join for Free</strong>
            </Button>
        </nav>
    )
}

export {Navbar};
import React, {useState} from "react";
import {ListItemText, MenuItem, Menu, Button} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';



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



export function NavbarStyledMenu({subject, styleProps}){
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    
    const {subject: subjectName, topics: subjectTopics} = subject;



    return(
        <React.Fragment>
            <Button color="dark" className="navbar-btn2" onClick={handleClick} style={styleProps}>{subjectName}</Button>
            {
              subjectTopics.length ? 
                <StyledMenu
                  id="customized-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >

                  {subjectTopics.map((topic, index)=>{
                    return(
                      <StyledMenuItem key={index}>
                        <ListItemText primary={topic} />
                      </StyledMenuItem>
                    )
                  })}
                </StyledMenu> : ""
            }
        </React.Fragment>
        
    )
}


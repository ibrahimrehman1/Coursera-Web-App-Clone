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



export function NavbarStyledMenu({text, styleProps}){
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };


    return(
        <React.Fragment>
            <Button color="dark" className="navbar-btn2" onClick={handleClick} style={styleProps}>{text}</Button>
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
        </React.Fragment>
        
    )
}


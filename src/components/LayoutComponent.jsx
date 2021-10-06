import React from "react";
import FooterComponent from "./FooterComponent";
import { useSelector } from "react-redux";
import {Navbar} from "./NavbarComponent.jsx";


export default function LayoutComponent({children}){

    return(
        <>
        <Navbar />
        {children}
        <FooterComponent />
        </>
    )
}
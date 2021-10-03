import React from "react";
import FooterComponent from "./FooterComponent";


export default function LayoutComponent({children}){
    return(
        <>
        {children}
        <FooterComponent />
        </>
    )
}
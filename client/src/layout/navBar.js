import React from "react";
import { Outlet } from "react-router";
import './NavBar.css'
import SearchNavBar from "../components/SearchNavBar/SearchNavBar.js";
import { Link } from "react-router-dom";

function NavBar (){

    return(
<>
        <div className="navBar">
            <div style={{marginTop:"1ch"}}>LOGO</div>


            <div className="menu">

                
                <Link to="/" className="menu-item">Acceuil</Link>
                
                <Link to="/" className="menu-item">produit</Link>
            
                <Link to="/" className="menu-item">service</Link>

                <Link to="/" className="menu-item">contact</Link>
                
                

            </div>

            <SearchNavBar/>  
                
            
        </div>
        
        <Outlet />
</>
    )

}

export default NavBar
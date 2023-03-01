import React from "react";
import { Outlet } from "react-router";
import './NavBar.css'
import SearchNavBar from "../components/SearchNavBar/SearchNavBar.js";
import { Link } from "react-router-dom";

function NavBar (){

    return(
<>
        <div className="navBar">
            <div style={{marginTop:"1ch", color:"#007193"}}>LOGO</div>


            <div className="menu">

                
                <Link to="/" className="menu-item">Acceuil</Link>
                
                <Link to="produit" className="menu-item">produit</Link>
            
                <Link to="services" className="menu-item">services</Link>

                <Link to="contact" className="menu-item">contact</Link>
                
                

            </div>

            <SearchNavBar/>  
            <div className="login">
                <Link to="Login" className="seConnecter">se connecter</Link>
            </div>
            

                
            
        </div>
        
        <Outlet />
</>
    )

}

export default NavBar
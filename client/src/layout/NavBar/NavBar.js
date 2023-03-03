import React from "react";
import { Outlet } from "react-router";
import './NavBar.css'
import SearchNavBar from "../../components/SearchNavBar/SearchNavBar.js";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";

function NavBar (){
    const connect = false


    return(
<>
        <div className="navBar">
            <div style={{marginTop:"1ch", color:"#007193" , marginRight:"2%"}}>LOGO</div>


            <div className="menu">

                
                <Link to="/" className="menu-item">Acceuil</Link>
                
                <Link to="produits" className="menu-item">produits</Link>
            
                <Link to="services" className="menu-item">services</Link>

                <Link to="contact" className="menu-item">contact</Link>
                
                

            </div>

            <div className="search">
                <SearchNavBar/> 
            </div>

            {connect ?  <div className="connecter">
                            <Link to="profil" className="avatar"><Avatar></Avatar></Link>
                        </div>
                     :  <div className="login">
                            <Link to="login" className="seConnecter">Se connecter</Link>
                        </div>
            }                   

                
        </div>
        <div className="outlet">
            <Outlet />
        </div>
</>
    )

}

export default NavBar
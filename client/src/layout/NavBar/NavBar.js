import React, { useEffect } from "react";
import './NavBar.css'
import SearchNavBar from "../../components/SearchNavBar/SearchNavBar.js";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";

import { Divide  } from 'hamburger-react'

function NavBar ({handleLeftDrawerToggle}){
    const width = window.innerWidth

    const isLogged = false

useEffect(()=>{
    if (width<=1100) {
        console.log(width)
    }
},[])


    return(
<>
        <div className="navBar">
            <div className="logo" style={{marginTop:"1ch", color:"#007193"}}>LOGO</div>

            <button className="burger"  >
                
                <Divide size={20} duration={0.8} color='#007193' onClick={handleLeftDrawerToggle}></Divide>
                
             </button> 

            <div className="menu">

                
                <Link to="/" className="menu-item">Acceuil</Link>
                
                <Link to="produits" className="menu-item">produits</Link>
            
                <Link to="services" className="menu-item">services</Link>

                <Link to="contact" className="menu-item">contact</Link>
                
                

            </div>

            <div className="search">
                <SearchNavBar/> 
            </div>

            {isLogged ?  <div className="connecter">
                            <Link to="profil" className="avatar"><Avatar></Avatar></Link>
                        </div>
                     :  <div className="login">
                            <Link to="login" className="seConnecter">Se connecter</Link>
                        </div>
            }     
                         

                
        </div>
        
        
</>
    )

}

export default NavBar
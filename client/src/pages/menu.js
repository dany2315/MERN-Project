import React from "react";
import './menu.css';
import { Link } from "react-router-dom";

function Menu () {


    return(
            <div className="menu">

                
                <Link to="/" className="close">x</Link>
                
                <Link to="/" className="menu-item">Acceuil</Link>
                
                <Link to="/" className="menu-item">produit</Link>
            
                <Link to="/" className="menu-item">service</Link>

                <Link to="/" className="menu-item">contact</Link>
                
                

            </div>
    )
}

export default Menu
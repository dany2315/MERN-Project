import React from "react";
import { Outlet } from "react-router";
import './navBar.css'

function NavBar (){


    return(
<>
        <div className="navBar">
                <p>NavBar</p>
                
            <div className="barre"></div>
        </div>
        
        <Outlet />
</>
    )

}

export default NavBar
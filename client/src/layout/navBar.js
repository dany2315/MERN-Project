import React from "react";
import { Outlet } from "react-router";

function NavBar (){


    return(
        <div>
                <p>NavBar</p>
                <Outlet />
        </div>
    )

}

export default NavBar
import React from "react";
import { Outlet } from "react-router";


function Vitrine (){


    return(

        <div>
                <h1>Vitrine</h1>
                <Outlet />
               
        </div>
    )

}

export default Vitrine
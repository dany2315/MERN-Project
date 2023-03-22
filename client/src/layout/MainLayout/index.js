import React from 'react';
import { Outlet } from "react-router";

import NavBar from '../NavBar/NavBar';

const MainLayout = () =>{

    return(
    <>
        <NavBar/>


        <Outlet />

    </>
)}

export default MainLayout
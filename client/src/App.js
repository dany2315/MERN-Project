import React ,{useState ,useEffect, useContext} from "react";
import  ReactDOM  from "react";
import { Router, Routes ,Route } from 'react-router-dom';
import userContext from'./store/userContext.js'
import './app.css';
import NavBar from "./layout";

function App(params) {


    return(
        <div>
            <Router>
                <userContext.Provider value={{connect,setConnect}}>
                <Routes>
                    <Route element={<NavBar/>}>
                        <Route path="/" element={<Vitrine />} />
                        <Route path="login" element={<FeatureComponent />} />
                        <Route path="client" {Connect ?element={<FeatureComponent />} :<Link to="login"/> }/>
                        <Route path="admin" element={<FeatureComponent />} />
                    </Route>
                </Routes>
                </userContext.Provider>

            </Router>
        </div>
    )

}

export default App
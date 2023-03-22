import React from "react";
import { Routes ,Route ,Navigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import MainLayout from './layout/MainLayout/index.js';
import Login from './pages/Login/Login.js';
import Dashbord from'./pages/Dashbord.js';
import Acceuil from './pages/Acceuil.js';
import Admin from './pages/Admin.js';
import Produits from "./pages/Produits";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Profil from "./pages/Profil"

function App() {


const connect = false


    return(
        
        <div>
            
                <Routes>
                
                    <Route path="/" element={<MainLayout/>} >
                        <Route index element={<Acceuil/>}/>
                        <Route path="produits" element={<Produits />} />
                        <Route path="services" element={<Services />} />
                        <Route path="contact" element={<Contact />} />

                        <Route path="profil" element={ connect ? < Profil/> : <Navigate to="/login" /> }/>

                        <Route path="dashbord" element={ connect ? < Dashbord/> : <Navigate to="/login" /> }/>
                        <Route path="admin" element={<Admin />} />
                        <Route path="login" element={connect ? <Navigate to="/" /> :<Login />} />
                    </Route>
                    
                    
                </Routes>

            
        </div>
      
    )

}

export default App
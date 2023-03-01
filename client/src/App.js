import React from "react";
import { Routes ,Route ,Navigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';


import NavBar from './layout/NavBar.js';
import Login from './pages/Login.js';
import Client from'./pages/Client.js';
import Acceuil from './pages/Acceuil.js';
import Admin from './pages/Admin.js';
import Menu from './pages/menu.js'
import Produit from "./pages/Produits";
import Services from "./pages/Services";
import Contact from "./pages/Contact";


function App() {


const connect = true


    return(
        
        <div>
            
                <Routes>
                
                    <Route path="/" element={<NavBar/>} >
                        <Route index element={<Acceuil/>}/>
                        <Route path="produit" element={<Produit />} />
                        <Route path="services" element={<Services />} />
                        <Route path="contact" element={<Contact />} />

                        <Route path="client" element={ connect ? < Client/> : <Navigate to="/login" /> }/>
                        <Route path="admin" element={<Admin />} />
                        <Route path="login" element={<Login />} />
                    </Route>
                    <Route path="menu" element={<Menu/>}/>
                    
                    
                    

                </Routes>

            
        </div>
      
    )

}

export default App
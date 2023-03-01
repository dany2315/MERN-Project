import React from "react";
import { Routes ,Route ,Navigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';


import NavBar from './layout/NavBar.js';
import Login from './pages/Login.js';
import Client from'./pages/Client.js';
import Vitrine from './pages/Vitrine.js';
import Admin from './pages/Admin.js';
import Menu from './pages/menu.js'


function App() {


const connect = true


    return(
        
        <div>
            
                <Routes>
                
                    <Route path="/" element={<NavBar/>} >
                        <Route index element={<Vitrine/>}/>
                        
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
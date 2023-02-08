import React from "react";
import { Routes ,Route ,Navigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';


import NavBar from './layout/navBar.js';
import Login from './pages/login.js';
import Client from'./pages/client.js';
import Vitrine from './pages/vitrine.js';
import Admin from './pages/admin.js';
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
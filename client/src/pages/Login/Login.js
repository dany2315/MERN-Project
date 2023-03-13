import React, { useState } from "react";
import'./Login.css'
import Box from '@mui/material/Box';
import LoadingButton from '@mui/lab/LoadingButton';
import FormError from "../../components/Form/FormError";
import FormStandard from "../../components/Form/FormStandard";
import  { verifuser } from "../../Controller/User";

function Login (){

    const [userPrev,setuserPrev] = useState({
        identifiant:"",
        password:""
    })
    const [loading, setLoading] = React.useState(false);
    const [form,setForm] = useState(true)
  



    function handleChangeIdentifiant(value) {
        setuserPrev({...userPrev,identifiant:value.toLowerCase()})
        console.log('identifiant',userPrev);
        
    }
    function handleChangePassword(value) {
        setuserPrev({...userPrev,password:value.toLowerCase()})
        console.log('password' , userPrev);
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        
        console.log({userPrev});
        const user = await verifuser(userPrev)
        
    }



    return(
        
        <div className="loginDiv">
                <form onSubmit={handleSubmit} className="cardLogin">
                    <div className="form">
                    {form ? <FormStandard  changePassword={handleChangePassword} changeIdentifiant={handleChangeIdentifiant}/>
                        :<FormError  changePassword={handleChangePassword} changeIdentifiant={handleChangeIdentifiant}/>}
                    </div>

                    <Box className="but">
                        <LoadingButton
                            type="submit"
                            size="small"
                            loading={loading}
                            loadingIndicator="Loading…"
                            variant="outlined"
                            >
                            <span>se connecter</span>
                        </LoadingButton>
                    </Box>
                </form>
        </div>
    
    )

}

export default Login
import React from "react";
import'./Login.css'
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

function Login (){


    return(
        <div className="loginDiv">
                <div className="cardLogin">
                <FormControl error variant="standard">
                    <InputLabel htmlFor="component-error">Name</InputLabel>
                    <Input
                    id="component-error"
                    defaultValue="Composed TextField"
                    aria-describedby="component-error-text"
                    />
                    <FormHelperText id="component-error-text">Error</FormHelperText>
                </FormControl>

                <FormControl variant="standard">
                    <InputLabel htmlFor="component-helper">Name</InputLabel>
                    <Input
                    id="component-helper"
                    defaultValue="Composed TextField"
                    aria-describedby="component-helper-text"
                    />
                    <FormHelperText id="component-helper-text">
                    Some important helper text
                    </FormHelperText>
                </FormControl>
                </div>
        </div>
    )

}

export default Login
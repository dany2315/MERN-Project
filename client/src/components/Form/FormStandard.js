import React from 'react';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';


function FormStandard(props) {
    



return(
    <>
            <FormControl variant="standard">

                <InputLabel htmlFor="component-helper">Identifiant</InputLabel>
                <Input
                id="component-helper"
                defaultValue=""
                aria-describedby="component-helper-text"
                onChange={(event)=>{props.changeIdentifiant(event.currentTarget.value)}}

                />
                <FormHelperText id="component-helper-text">
                Email ou Identifiant
                </FormHelperText>

            </FormControl>


            <FormControl variant="standard">

                <InputLabel htmlFor="component-helper">password</InputLabel>
                <Input
                id="component-helper"
                defaultValue=""
                aria-describedby="component-helper-text"
                onChange={(event)=>{props.changePassword(event.currentTarget.value)}}

                />
                <FormHelperText id="component-helper-text">
                Minimum 8 carractere
                </FormHelperText>

            </FormControl>
    </>
)}
export default FormStandard
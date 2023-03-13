import React from 'react';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

function FormError(props) {


        return(
            <>

            <FormControl error variant="standard">

                <InputLabel htmlFor="component-error">Identifiant</InputLabel>
                <Input
                id="component-error"
                defaultValue=""
                aria-describedby="component-error-text"
                onChange={(event)=>{props.changeIdentifiant(event.currentTarget.value)}}
                />
                <FormHelperText id="component-error-text">Error</FormHelperText>

            </FormControl>

            <FormControl error variant="standard">

                <InputLabel htmlFor="component-error">Password</InputLabel>
                <Input
                id="component-error"
                defaultValue=""
                aria-describedby="component-error-text"
                onChange={(event)=>{props.changePassword(event.currentTarget.value)}}

                />
                <FormHelperText id="component-error-text">Error</FormHelperText>

            </FormControl> 

            </>

        )
}
export default FormError
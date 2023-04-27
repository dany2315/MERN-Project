import React from 'react';

//mui
import { Box ,Drawer, useMediaQuery} from '@mui/material';
import {useTheme} from '@mui/material/styles';


const Sidebar = ({ drawerOpen, drawerToggle, window }) =>{
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

   

    return(
    <>
    <Drawer
    sx={{'& .MuiDrawer-paper': 
        {[theme.breakpoints.up('md')]: {
            top: '88px'
        }}}
    }>


comment sa 

    </Drawer>
    
    </>
)

}

export default Sidebar
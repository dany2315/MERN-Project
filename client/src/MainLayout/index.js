import React from "react";
import { Outlet } from "react-router";
import { useDispatch, useSelector } from "react-redux";

//imp mui
import { AppBar, Box,  Toolbar, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';


//Project import
import NavBar from "./NavBar";
import NavBarClient from "./NavBarClient";
import NavBarAdmin from "./NavBarAdmin";
import Sidebar from "./Sidebar";
import { SET_MENU } from "store/actions";
import { drawerWidth } from "store/constant";

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  ...theme.typography.mainContent,
  ...(!open && {
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 0,
      transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
      }),
      [theme.breakpoints.up('md')]: {
          marginLeft: -(drawerWidth - 20),
          width: `calc(100% - ${drawerWidth}px)`
      },
      [theme.breakpoints.down('md')]: {
          marginLeft: '20px',
          width: `calc(100% - ${drawerWidth}px)`,
          padding: '16px'
      },
      [theme.breakpoints.down('sm')]: {
          marginLeft: '10px',
          width: `calc(100% - ${drawerWidth}px)`,
          padding: '16px',
          marginRight: '10px'
      }
  }),
  ...(open && {
      transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      width: `calc(100% - ${drawerWidth}px)`,
      [theme.breakpoints.down('md')]: {
          marginLeft: '20px'
      },
      [theme.breakpoints.down('sm')]: {
          marginLeft: '10px'
      }
  })
}));

const MainLayout = () => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));
  const leftDrawerOpened = useSelector((state) => state.customization.opened);
  const dispatch = useDispatch();
  const handleLeftDrawerToggle = () => {
    dispatch({ type: SET_MENU, opened: !leftDrawerOpened });
  };

  const isLogged = true
  const isAdmin = false

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar
        position="fixed"
        
        sx={{
          bgcolor: theme.palette.background.default,
          transition: leftDrawerOpened ? theme.transitions.create('width') : 'none'
      }}
        >
          <Toolbar>
            
            {isAdmin?<NavBarAdmin/>:isLogged?<NavBarClient/>:<NavBar handleLeftDrawerToggle={handleLeftDrawerToggle} />}
          </Toolbar>
        </AppBar>
        {isAdmin?<SidebarAdmin/>:isLogged?<Sidebar drawerOpen={!matchDownMd ? leftDrawerOpened : !leftDrawerOpened} drawerToggle={handleLeftDrawerToggle}/>:null}
        

       <Main>
          <Outlet />
      </Main>
     </Box>
    </>
  );
};

export default MainLayout;

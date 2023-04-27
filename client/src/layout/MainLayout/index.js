import React from "react";
import { Outlet } from "react-router";
import { useDispatch, useSelector } from "react-redux";

//imp mui
import { AppBar, Box,  Toolbar, useMediaQuery } from '@mui/material';
import { useTheme } from "@mui/material/styles";

//Project import
import NavBar from "../NavBar/NavBar";
import Sidebar from "../Sidebar/Sidebar";
import { SET_MENU } from "../../store/actions";
import { drawerWidth } from "../../store/constant";



const MainLayout = () => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));
  const leftDrawerOpened = useSelector((state) => state.customization.opened);
  const dispatch = useDispatch();
  const handleLeftDrawerToggle = () => {
    dispatch({ type: SET_MENU, opened: !leftDrawerOpened });
  };

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
            <NavBar handleLeftDrawerToggle={handleLeftDrawerToggle} />
          </Toolbar>
        </AppBar>

        <Sidebar
          drawerOpen={!matchDownMd ? leftDrawerOpened : !leftDrawerOpened}
          drawerToggle={handleLeftDrawerToggle}
        />

        <Box
          elevation={1}
          md={6}
          sx={{
            border: "solid",
            borderWidth: 1,
            color: "black",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default MainLayout;

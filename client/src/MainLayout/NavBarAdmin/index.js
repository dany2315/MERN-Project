import React, { useEffect } from 'react';
//mui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, ButtonBase } from '@mui/material';

import './NavBar.css';
import SearchNavBar from '../../components/SearchNavBar/SearchNavBar.js';
import { Link } from 'react-router-dom';
import LogoSection from '../LogoSection/LogoSection';
import SearchSection from '../SearchSection/SearchSection';

import { IconMenu2 } from '@tabler/icons';

function NavBar({ handleLeftDrawerToggle }) {
    const theme = useTheme();
    const width = window.innerWidth;

    const isLogged = true;

    useEffect(() => {
        if (width <= 1100) {
            console.log(width);
        }
    }, []);

    return (
        <>
            {isLogged ? (
                <>
                    <Box
                        sx={{
                            width: 228,
                            display: 'flex',
                            [theme.breakpoints.down('md')]: {
                                width: 'auto'
                            }
                        }}
                    >
                        <Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
                            <LogoSection />
                        </Box>
                        <ButtonBase sx={{ overflow: 'hidden' }}>
                            <Avatar
                                variant="rounded"
                                sx={{
                                    ...theme.typography.commonAvatar,
                                    ...theme.typography.mediumAvatar,
                                    transition: 'all .2s ease-in-out',
                                    background: theme.palette.yellow.main,
                                    color: theme.palette.yellow.light,
                                    '&:hover': {
                                        background: theme.palette.yellow.light,
                                        color: theme.palette.yellow.main
                                    }
                                }}
                                onClick={handleLeftDrawerToggle}
                                color="inherit"
                            >
                                <IconMenu2 stroke={1.5} size="1.3rem" />
                            </Avatar>
                        </ButtonBase>
                    </Box>
                    <SearchSection />
                    <Box sx={{ flexGrow: 1 }}></Box>
                    <Box sx={{ flexGrow: 1 }}></Box>

                    <div className="connecter">
                        <Link to="profil" className="avatar">
                            <Avatar
                                sx={{
                                    background: theme.palette.yellow.main,
                                    color: theme.palette.yellow.light,
                                    '&:hover': {
                                        background: theme.palette.yellow.light,
                                        color: theme.palette.yellow.main
                                    }
                                }}
                            ></Avatar>
                        </Link>
                    </div>
                </>
            ) : (
                <>
                    <Box
                        sx={{
                            width: 228,
                            display: 'flex',
                            [theme.breakpoints.down('md')]: {
                                width: 'auto'
                            }
                        }}
                    >
                        <Box component="span" sx={{ display: { md: 'block' }, flexGrow: 1 }}>
                            <LogoSection />
                        </Box>
                        </Box>
                        <div className="menu">
                            <Link to="/" className="menu-item">
                                Acceuil
                            </Link>

                            <Link to="produits" className="menu-item">
                                produits
                            </Link>

                            <Link to="services" className="menu-item">
                                services
                            </Link>

                            <Link to="contact" className="menu-item">
                                contact
                            </Link>
                        </div>

                        <Box sx={{ flexGrow: 1 }}></Box>
                        <div className="login">
                            <Link to="login" className="seConnecter">
                                Se connecter
                            </Link>
                        </div>
                    
                </>
            )}
        </>
    );
}

export default NavBar;

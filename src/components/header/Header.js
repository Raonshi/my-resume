import React from 'react';
import './Header.css';
import { AppBar, Button, IconButton, MenuItem, Toolbar, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';


const Header = ({keyword}) => {
    return (
        <AppBar position='static'>
            <Toolbar variant='dense'>
                <IconButton edge='start' color='inherit' aria-label='menu' sx={{mr:2}}>
                    <Menu/>
                </IconButton>
                <Typography variant='h6' color='inherit' component='div'>
                    App Bar
                </Typography>
            </Toolbar>
        </AppBar>
        // <div className='header'>
        //     <Button variant='text'>
        //         <Typography variant='body2' color='text.secondary' align='center'>
        //         H1 Hello world
        //         </Typography>
        //     </Button>
        //     <div className='vertical-divider'></div>
        //     <h1>menu2</h1>
        // </div>
    );
}

export default Header;
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import AccountIcon from '@mui/icons-material/PermIdentityOutlined';
import CartIcon from '@mui/icons-material/ShoppingCartOutlined';
import Pwd from './fpwd';

import BookImage from '../../Images/BookImage.jpg';


export default function ForgotPassword() {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className='appbar'>
                    <img id='image' src={BookImage} alt='img'></img>
                    <Typography className='text'
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block',color:'whitesmoke' } }}
                    >
                        BookStore
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box >
    );
}
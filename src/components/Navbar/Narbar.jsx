import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/commerce.png';

const Narbar = () => {
  return (
    <>
      <AppBar position='fixed' className={classes.appBar} color='inherit'>
        <Toolbar>
          <Typography variant='h6' className={classes.title} color='inherit'>
            <img
              src={logo}
              alt='Commerce.js'
              height='25px'
              className={classes.image}
            />
            Commerce.js
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Narbar;

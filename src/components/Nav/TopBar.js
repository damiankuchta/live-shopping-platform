
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  AppBar,
  Toolbar,
  Typography,
  Button
} from '@mui/material';

export default function TopBar() {

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          {!isAuthenticated ?
            <React.Fragment>
              <Button color="inherit" component={NavLink} to="/login">
                Login
              </Button>
              <Button color="inherit" component={NavLink} to="/register">
                Register
              </Button>
            </React.Fragment>
            :
            <Button color="inherit" component={NavLink} to="/signOut">
              Sign out
            </Button>
          }
          <Button color="inherit" component={NavLink} to="/">
            Dashboard
          </Button>
          <Button color="inherit" component={NavLink} to="/protected">
                Protected
              </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
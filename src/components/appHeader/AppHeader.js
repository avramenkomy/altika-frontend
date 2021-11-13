import React, { useState } from 'react';
import { Toolbar, Typography, AppBar, IconButton, Container, Grid, Box } from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Logo from './Logo/Logo';
import CallUs from './CallUs/CallUs';

import './AppHeader.css'

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(0deg, #256EA4 30%, #508BB6)',
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  nav: {
    flexGrow: 1,
  },
  icon_button: {
    textAlign: 'center',
  }
}));

function AppHeader(props) {
  const [dark, setDark] = useState(props.darkTheme);
  const matches960 = useMediaQuery('(min-width:960px)');

  const handleChangeTheme = () => {
    setDark(!dark);
    props.onChangeTheme(!dark);
  }

  const classes = useStyles();
    return (
      <AppBar position={matches960 ? "sticky" : "static"} className={classes.root}>
        <Grid container spacing={1} alignContent="center" alignItems="center">
          { matches960 && <Grid item sm={3} md={2} lg={2}>
            <Logo />
          </Grid> }
          <Grid item xs={9} sm={8} md={6} lg={5} className={classes.nav}>
            <Container>
              <Toolbar>
                <Typography variant="h6" component="a" className={classes.title}>
                  News
                </Typography>
              </Toolbar>
            </Container>
          </Grid>
          <Grid item xs={3} sm={4} md={3} lg={4}>
            <CallUs />
          </Grid>
          { matches960 && <Grid item md={1} className={classes.icon_button}>
            <IconButton onClick={handleChangeTheme} >
              { dark ? <Brightness4Icon color="secondary" /> : <Brightness5Icon color="secondary" /> }
            </IconButton>
          </Grid> }
        </Grid>
      </AppBar>
    )
  }

export default AppHeader;
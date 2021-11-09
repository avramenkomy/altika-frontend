import React, { useState } from 'react';
import { Toolbar, Typography, AppBar, IconButton, Container } from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import { makeStyles } from "@material-ui/core/styles";

import Logo from '../Logo';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function AppHeader(props) {
  const [dark, setDark] = useState(props.darkTheme);

  const handleChangeTheme = () => {
    setDark(!dark);
    props.onChangeTheme(!dark);
  }

  const classes = useStyles();
    return (
      <AppBar position="sticky">
        <Container>
          <Toolbar>
            <Logo />
            <Typography variant="h6" component="a" className={classes.title}>
              News
            </Typography>
            <IconButton onClick={handleChangeTheme} >
              { dark ? <Brightness4Icon color="secondary" /> : <Brightness5Icon color="secondary" /> }
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    )
  }

export default AppHeader;
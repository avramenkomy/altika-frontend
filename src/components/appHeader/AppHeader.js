import React, { useState } from 'react';
import { Toolbar, Typography, AppBar, IconButton, Container, Grid } from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Logo from '../logo/Logo';

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
  grid_item: {
    padding: theme.spacing(2),
    textAlign: 'center',
  }
}));

function AppHeader(props) {
  const [dark, setDark] = useState(props.darkTheme);
  const matches = useMediaQuery('(min-width: 768px)');

  const handleChangeTheme = () => {
    setDark(!dark);
    props.onChangeTheme(!dark);
  }

  const classes = useStyles();
    return (
      <AppBar position="sticky">
        <Grid container spacing={matches ? 3 : 1}>
          { matches && <Grid item xs>
            <Logo className={classes.grid_item}/>
          </Grid> }
          <Grid item xs={12} xl={8} sm={6} md={6}>
            <Container className={classes.grid_item}>
              <Toolbar>
                <Typography variant="h6" component="a" className={classes.title}>
                  News
                </Typography>
              </Toolbar>
            </Container>
          </Grid>
          { matches && <Grid item xs>
            <IconButton onClick={handleChangeTheme} className={classes.grid_item}>
              { dark ? <Brightness4Icon color="secondary" /> : <Brightness5Icon color="secondary" /> }
            </IconButton>
          </Grid> }
        </Grid>
      </AppBar>
    )
  }

export default AppHeader;
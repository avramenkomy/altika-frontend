import React from 'react';
import { Paper, Container, Grid, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import MapsComponent from './MapsComponent';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(0deg, #256EA4, #508BB6 50%)',
    color: theme.palette.secondary.light
  },
  bottom_container: {
    backgroundColor: 'rgba(0, 0, 0, .2)',
  },
  bottom_text: {
    textAlign: 'center'
  }
}));

function FooterComponent() {
  const classes = useStyles();
  
  return (
    <Paper className={classes.root} square>
      <Grid container>
        <Grid item sm={12} md={4}>
          <div>ListItems component</div>
        </Grid>
        <Grid container direction="column" item xs={12} sm={4}>
          <Grid item sm={9}>
            <div>ContactsComponent</div>
          </Grid>
          <Grid item sm={3}>
            <div>SocialComponent</div>
          </Grid>
        </Grid>
        <Grid item sm={12} md={4}>
          <MapsComponent width="425" height="350" />
        </Grid>
      </Grid>
      <Grid container className={classes.bottom_container}>
        <Container>
          <Typography className={classes.bottom_text} variant="body2">
            ООО "Альтика и далее полное наименование"<br />
            ИНН 123456788, КПП 123456788, ОГРН 123456788<br />
          </Typography>
          
          <Typography className={classes.bottom_text} variant="body2">&#169;&nbsp;2022 Все права защищены</Typography>
        </Container>
      </Grid>
    </Paper>
  )
}

export default FooterComponent;

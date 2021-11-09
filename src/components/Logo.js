import React from 'react';
import { Grid } from '@material-ui/core';
import HomeWorkIcon from '@material-ui/icons/HomeWork';

export default function Logo() {
  return (
    <Grid container>
      <Grid item>
        <HomeWorkIcon />
      </Grid>
      <Grid item container></Grid>
    </Grid>
  )
}
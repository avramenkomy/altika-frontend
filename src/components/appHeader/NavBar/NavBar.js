import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary
  }
}))

export default function NavBar() {
  const classes = useStyles();
  return (
    <Box>NavBar</Box>
  )
}
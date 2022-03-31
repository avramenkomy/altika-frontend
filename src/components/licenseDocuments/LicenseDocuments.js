import React from 'react';
import { Container, Paper, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from './Carousel';
import Item from './Item';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  title: {
    textAlign: 'center'
  }
}));

function LicenseDocuments () {
  const classes = useStyles();

  return (
    <Paper square className={classes.root}>
      <Container maxWidth={"lg"}>
        <Typography variant="h5" className={classes.title}>
          Документы
        </Typography>
        <Carousel show={5}>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </Carousel>
      </Container>
    </Paper>
  )
}

export default LicenseDocuments;
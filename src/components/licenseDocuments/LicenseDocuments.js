import React from 'react';
import { Container, Paper, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

function LicenseDocuments () {
  const classes = useStyles();

  return (
    <Paper square className={classes.root}>
      <Container maxWidth={"lg"}>
        <Typography variant="h5" className={classes.title}>
          Документы
        </Typography>
      </Container>
    </Paper>
  )
}

export default LicenseDocuments;
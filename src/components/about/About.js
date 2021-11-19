import React from 'react';
import { Typography, Paper, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import decoration from '../../resources/img/background_image/natural-paper.png';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${decoration})`,
    backgroundColor: '#fff',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  title: {
    textAlign: 'center',
  },
  content: {
    textAlign: 'justify',
    lineHeight: '2rem',
  },
}));


export default function About() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Container maxWidth={"md"}>
        <Typography variant="h4" gutterBottom className={classes.title}>
          О нашей компании
        </Typography>
        <Typography variant="subtitle1" component="p" gutterBottom className={classes.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac euismod justo. Duis consequat nibh
          vel est dignissim consequat. Mauris lobortis lobortis convallis. Pellentesque hendrerit iaculis justo,
          nec rhoncus eros. Nam id leo nec eros dignissim posuere. Ut a ullamcorper nunc. Sed vel eros mollis,
          vestibulum odio sit amet, tristique sapien. Vestibulum pellentesque eros id hendrerit faucibus. Donec
          tortor orci, tincidunt vitae dolor nec, sodales malesuada neque. Ut maximus tortor quis nisl vehicula
          vestibulum.
        </Typography>
      </Container>
    </Paper>
  )
}
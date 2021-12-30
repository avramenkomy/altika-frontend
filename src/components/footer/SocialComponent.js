import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVk, faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > svg': {
      margin: theme.spacing(1),
    },
    textAlign: 'center'
  },
  title: {
    textAlign: 'center'
  }
}));

function SocialComponent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography variant="body" component="p">
          Присоединяйтесь к нам в социальныйх сетях
        </Typography>
      </div>
      <FontAwesomeIcon icon={faVk} size='2x'/>
      <FontAwesomeIcon icon={faInstagram} size='2x'/>
      <FontAwesomeIcon icon={faYoutube} size='2x'/>
      <FontAwesomeIcon icon={faWhatsapp} size='2x'/>
    </div>
  )
}

export default SocialComponent;
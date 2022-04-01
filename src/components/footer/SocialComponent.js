import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVk, faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'flex-start',
    marginLeft: theme.spacing(2),
  },
  title: {
    marginBottom: theme.spacing(1),
  },
  icons: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  icon_item: {
    marginRight: theme.spacing(2),
  },
}));

function SocialComponent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.title} hidden={false}>
        <Typography variant="body1" component="p">
          Присоединяйтесь к нам в социальных сетях
        </Typography>
      </div>
      <div className={classes.icons}>
        <div className={classes.icon_item}><FontAwesomeIcon icon={faVk} size="2x"/></div>
        <div className={classes.icon_item}><FontAwesomeIcon icon={faInstagram} size="2x"/></div>
        <div className={classes.icon_item}><FontAwesomeIcon icon={faYoutube} size="2x"/></div>
        <div className={classes.icon_item}><FontAwesomeIcon icon={faWhatsapp} size="2x"/></div>
      </div>
    </div>
  )
}

export default SocialComponent;
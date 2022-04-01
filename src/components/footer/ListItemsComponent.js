import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1)
  }
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function ListItemsComponent() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItemLink href="#">
        <ListItemText primary="Виды экспертиз" />
      </ListItemLink>
      <ListItemLink href="#">
        <ListItemText primary="Услуги" />
      </ListItemLink>
      <ListItemLink href="#">
        <ListItemText primary="Стоимость" />
      </ListItemLink>
      {/* TODO: Скрытые элементы меню футера в разработке*/}
      {/* <ListItemLink href="#">
        <ListItemText primary="Блог" />
      </ListItemLink>
      <ListItemLink href="#">
        <ListItemText primary="FAQ" />
      </ListItemLink> */}
    </List>
  )
}

export default ListItemsComponent;
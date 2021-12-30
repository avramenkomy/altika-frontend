import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function ListItemsComponent() {
  return (
    <List>
      <ListItemLink href="#">
        <ListItemText primary="Виды экспертиз" />
      </ListItemLink>
      <ListItemLink href="#">
        <ListItemText primary="Услуги" />
      </ListItemLink>
      <ListItemLink href="#">
        <ListItemText primary="Стоимость" />
      </ListItemLink>
      <ListItemLink href="#">
        <ListItemText primary="Блог" />
      </ListItemLink>
      <ListItemLink href="#">
        <ListItemText primary="FAQ" />
      </ListItemLink>
    </List>
  )
}

export default ListItemsComponent;
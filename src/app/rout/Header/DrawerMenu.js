import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const ItemList = () => {
  return (
    <List>
      <ListItem>
        <ListItemText primary="بانک ها" />
      </ListItem>
      <ListItem>
        <ListItemText primary="agtests" />
      </ListItem>
      <ListItem>
        <ListItemText primary="ثابت ها" />
      </ListItem>
      <ListItem>
        <ListItemText primary="test" />
      </ListItem>
    </List>
  );
};

export default ItemList;

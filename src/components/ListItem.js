import React from 'react';
import {View, Text} from 'react-native';

const ListItem = (props) => {
  const item = props.item;
  console.log(item);
  return (
    <View
      style={{
        padding: 20,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
      }}>
      <Text style={{backgroundColor: '#ddd'}}>ID: {item.id}</Text>
      <Text>Title: {item.title}</Text>
      <Text>Body: {item.body}</Text>
    </View>
  );
};

export default ListItem;


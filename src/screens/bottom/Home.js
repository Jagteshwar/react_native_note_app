import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {BASE_URL} from '../../apis/Api';
import {FlatList} from 'react-native-gesture-handler';
import ListItem from '../../components/ListItem';

const Home = () => {
  const [data, setData] = useState([]);

  const getApiData = async () => {
    //api call
    console.log('hello api');

    let data = await fetch(BASE_URL + 'posts');
    data = await data.json();
    setData(data);

    setData(data);
  };
  useEffect(() => {
    getApiData();
  }, []);

  return (
    <View>
      <Text style={{fontSize: 30, fontWeight: 'bold', alignSelf: 'center'}}>
        Api List
      </Text>
      {data.length ? (
        <View>
          <FlatList
            data={data}
            renderItem={({item}) => <ListItem item={item}/>}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      ) : null}
    </View>
  );
};

export default Home;

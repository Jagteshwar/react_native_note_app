import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View, Text, Image} from 'react-native';
import Home from '../bottom/Home';
import AddNote from '../bottom/AddNote';
import Profile from '../bottom/Profile';

const Bottom = createBottomTabNavigator();
const BottomScreen = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen
        name="Home"
        component={Home}
        options={{
            headerShown: false, 
            tabBarIcon: ({size, color})=> {
            return(
             <Image 
             source={require('../../images/home.png')}
             style={{width: size, height: size, tintColor: color}}
             />   
            )
        },
    }}
      />
      <Bottom.Screen
        name="AddNote"
        component={AddNote}
        options={{
            headerShown: false,
            tabBarIcon: ({size, color})=> {
                return(
                 <Image 
                 source={require('../../images/add.png')}
                 style={{width: size, height: size, tintColor: color}}
                 />   
                )
            },
        }}
      />
      <Bottom.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false,
            tabBarIcon: ({size, color})=> {
                return(
                 <Image 
                 source={require('../../images/user.png')}
                 style={{width: size, height: size, tintColor: color}}
                 />   
                )
            },
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomScreen;

import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Main} from '../screens/Main';
import {Login} from '../screens/Login';
import {SignUp} from '../screens/SignUp';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{headerShown: false}}
        />
         <Stack.Screen 
        name="SignUp" 
        component={SignUp} 
        />
         <Stack.Screen 
        name="Main" 
        component={Main} 
        options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

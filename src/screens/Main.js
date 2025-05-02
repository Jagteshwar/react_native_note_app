import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { Text, View } from 'react-native'
import BottomScreen from './drawer/DrawerScreen';

export const Main = () => {
  const Drawer = createDrawerNavigator();
    return (
     <Drawer.Navigator>
      <Drawer.Screen name='Bottom' component={BottomScreen}/>
     </Drawer.Navigator>
    )
}


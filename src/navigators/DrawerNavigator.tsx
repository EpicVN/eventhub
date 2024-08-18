import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import ExplorerNavigator from './ExplorerNavigator';
import { DrawerCustom } from '../components';
import TabNavigator from './TabNavigator';

const DrawerNavigator = () => {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerPosition: 'left',
            }}
            drawerContent={props => <DrawerCustom {...props}/>}
        >
            <Drawer.Screen name='Explore' component={TabNavigator}/>
        </Drawer.Navigator>
  )
}

export default DrawerNavigator
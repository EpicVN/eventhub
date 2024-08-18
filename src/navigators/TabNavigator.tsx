import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Calendar } from 'iconsax-react-native';
import React, { ReactNode } from 'react';
import { Platform } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { CircleComponent, TextComponent } from '../components';
import { appColors } from '../constants/appColors';
import { AddNewScreen } from '../screens';
import EventNavigator from './EventNavigator';
import ExplorerNavigator from './ExplorerNavigator';
import MapNavigator from './MapNavigator';
import ProfileNavigator from './ProfileNavigator';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 88 : 68,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: appColors.white,
        },

        tabBarIcon: ({ focused, color, size }) => {
          let icon: ReactNode;
          color = focused ? appColors.primary : appColors.gray5;
          size = 23;

          switch (route.name) {
            case 'Explorer':
              icon = <MaterialIcons name="explore" size={size} color={color} />;
              break;
            case 'Events':
              icon = <Calendar size={size} color={color} />;
              break;
            case 'Map':
              icon = (
                <FontAwesome5 name="map-marker-alt" size={size} color={color} />
              );
              break;
            case 'Profile':
              icon = <Ionicons name="person" size={size} color={color} />;
              break;
            case 'Add':
              icon = (
                <CircleComponent
                  size={52}
                  styles={{ marginTop: Platform.OS === 'ios' ? -50 : -60 }}
                >
                  <MaterialIcons
                    name="add-box"
                    size={24}
                    color={appColors.white}
                  />
                </CircleComponent>
              );
              break;
          }
          return icon;
        },

        tabBarIconStyle: {
          marginTop: 8,
        },

        tabBarLabel({ focused }) {
          return route.name === 'Add' ? null : (
            <TextComponent
              text={route.name}
              flex={0}
              size={12}
              color={focused ? appColors.primary : appColors.gray}
              styles={{
                marginBottom: Platform.OS === 'android' ? 12 : 0,
              }}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Explorer" component={ExplorerNavigator} />
      <Tab.Screen name="Events" component={EventNavigator} />
      <Tab.Screen name="Add" component={AddNewScreen} />
      <Tab.Screen name="Map" component={MapNavigator} />
      <Tab.Screen name="Profile" component={ProfileNavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

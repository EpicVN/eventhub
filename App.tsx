import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import AppRouters from './src/navigators/AppRouters';
import store from './src/redux/store';
import { SplashScreen } from './src/screens';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar 
          barStyle="dark-content" 
          backgroundColor="transparent"
          translucent
        />
          <NavigationContainer>
            <AppRouters />
          </NavigationContainer>
      </Provider>
    </>
  )
};

export default App;

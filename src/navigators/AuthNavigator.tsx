import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { ForgotPasswordScreen, LoginScreen, VerificationScreen } from '../screens';
import OnboardingScreen from '../screens/auth/OnboardingScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthNavigator = () => {
    const Stack = createNativeStackNavigator();

    // const [isExistingUser, setIsExistingUser] = useState(false);

    // useEffect(() => {
    //     checkUserExisting();
    // }, []);

    // const checkUserExisting = async () => {
    //     const res = await AsyncStorage.getItem('auth')

    //     res && setIsExistingUser(true);
    // }

    // console.log(isExistingUser)

    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen 
                    name="OnboardingScreen"
                    component={OnboardingScreen}
                />
                
                <Stack.Screen 
                    name="LoginScreen"
                    component={LoginScreen}
                />

                <Stack.Screen 
                    name="SignUpScreen"
                    component={SignUpScreen}
                />

                <Stack.Screen 
                    name="ForgotPasswordScreen"
                    component={ForgotPasswordScreen}
                />

                <Stack.Screen 
                    name="VerificationScreen"
                    component={VerificationScreen}
                />
        </Stack.Navigator>
    );
};

export default AuthNavigator;
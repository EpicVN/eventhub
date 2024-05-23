import { View, Text, ScrollView, ImageBackground, SafeAreaView } from 'react-native';
import React, { ReactNode } from 'react';
import { globalStyles } from '../styles/globalStyles';

interface Props {
    isImageBackground?: boolean,
    isScroll?: boolean,
    title?: string,
    children: ReactNode,
}

const ContainerComponent = (props: Props) => {
    const {isImageBackground, isScroll, title, children} = props;
    
    const returnContainer = isScroll ? (
        <ScrollView style={globalStyles.container}>{children}</ScrollView>
    ) : (
        <View style={globalStyles.container}>{children}</View>
    );

    return isImageBackground ? (
        <ImageBackground 
            source={require('../assets/images/splash-img.png')}
            style={{flex: 1}}
            imageStyle={{flex: 1}}
        >
            <SafeAreaView style={{flex: 1}}> 
                {returnContainer}
            </SafeAreaView>
        </ImageBackground>
    ) : (
        <SafeAreaView style={globalStyles.container}>
            <View>{returnContainer}</View>
        </SafeAreaView>
    );
};

export default ContainerComponent;
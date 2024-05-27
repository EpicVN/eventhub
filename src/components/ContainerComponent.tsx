import { useNavigation } from '@react-navigation/native';
import { ArrowLeft } from 'iconsax-react-native';
import React, { ReactNode } from 'react';
import { ImageBackground, SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { appColors } from '../constants/appColors';
import { globalStyles } from '../styles/globalStyles';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';
import { fontFamilies } from '../constants/fontFamilies';

interface Props {
    isImageBackground?: boolean,
    isScroll?: boolean,
    title?: string,
    children: ReactNode,
    back?: boolean,
}

const ContainerComponent = (props: Props) => {
    const {isImageBackground, isScroll, title, children, back} = props;

    const navigation: any = useNavigation();

    const headerContainer = () => {
        return (
            <View style={{flex: 1, paddingTop: 53}}>
                {(title || back) && 
                    (
                        <RowComponent 
                            styles={{
                                paddingHorizontal: 16,
                                marginBottom: 10,
                                minHeight: 48,
                                minWidth: 48
                            }}
                        >
                            {
                                back && (
                                    <TouchableOpacity
                                        onPress={() => navigation.goBack()}
                                        style={{marginRight: 11}}
                                    >
                                        <ArrowLeft size={22} color={appColors.text}/>
                                    </TouchableOpacity>
                                )
                                
                            }

                            {
                                title && (
                                    <TextComponent 
                                        text={title} 
                                        font={fontFamilies.medium}
                                        size={24}
                                    />
                                )
                                
                            }
                        </RowComponent>
                    )
                }
                {returnContainer}
            </View>
        )
    }
    
    const returnContainer = isScroll ? (
        <ScrollView style={{flex: 1}}>{children}</ScrollView>
    ) : (
        <View style={{flex: 1}}>{children}</View>
    );

    return isImageBackground ? (
        <ImageBackground 
            source={require('../assets/images/splash-img.png')}
            style={{flex: 1}}
            imageStyle={{flex: 1}}
        >
            <SafeAreaView style={{flex: 1}}> 
                {headerContainer()}
            </SafeAreaView>
        </ImageBackground>
    ) : (
        <SafeAreaView style={[globalStyles.container]}>
            <View>{headerContainer()}</View>
        </SafeAreaView>
    );
};

export default ContainerComponent;
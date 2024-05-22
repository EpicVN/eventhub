import React, { ReactNode } from 'react';
import { StyleProp, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import TextComponent from './TextComponent';
import { globalStyles } from '../styles/globalStyles';
import { appColors } from '../constants/appColors';
import { fontFamilies } from '../constants/fontFamilies';

interface Props {
    icon?: ReactNode;
    text: string;
    type?: 'primary' | 'text' | 'link';
    color?: string;
    styles?: StyleProp<ViewStyle>;
    textColor?: string;
    textStyle?: StyleProp<TextStyle>;
    onPress?: () => void;
    iconFlex?: 'right' | 'left'
}

const ButtonComponent = (props: Props) => {
    const {icon, text, type, color, styles, textColor, textStyle, onPress, iconFlex} = props;

    return type === 'primary' ? (
        <TouchableOpacity
            onPress={onPress}
            style={[
                globalStyles.button, 
                {
                    backgroundColor: appColors.primary
                }, 
                styles]}>
            {icon && icon}
            <TextComponent 
                text={text} 
                color={textColor ?? appColors.white} 
                styles={[
                    textStyle, 
                    {
                        marginLeft: icon ? 12 : 0,
                    },
                ]}
                font={fontFamilies.regular}
                flex={icon && iconFlex ==='right' ? 1 : 0}
            />
            {icon && iconFlex === 'right' && icon}
        </TouchableOpacity>
    ) : (
        <TouchableOpacity>
            <TextComponent 
                text={text} 
                color={type === 'link' ? appColors.link : appColors.text}
            />
        </TouchableOpacity>
    );
};

export default ButtonComponent;
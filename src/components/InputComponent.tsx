import { View, Text, TouchableOpacity, TextInput, StyleSheet, TextInputProps, KeyboardType } from 'react-native';
import React, { ReactNode, useState } from 'react';
import { EyeSlash } from 'iconsax-react-native';
import { appColors } from '../constants/appColors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { globalStyles } from '../styles/globalStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface Props {
    value: string,
    onChange: (val: string) => void,
    affix?: ReactNode,
    placeholder?: string,
    suffix?: ReactNode,
    isPassword?: boolean,
    allowClear?: boolean,
    type?: KeyboardType,
}

const InputComponent = (props: Props) => {
    const { value, onChange, affix, placeholder, suffix, isPassword, allowClear, type } = props;

    const [isShowPass, setIsShowPass] = useState(isPassword ?? false);

    return (
        <View style={styles.inputContainer}>
            {affix ?? affix}
            <TextInput
                value={value}
                style={[styles.input, globalStyles.text]}
                placeholderTextColor={'#747688'}
                placeholder={placeholder ?? ''}
                onChangeText={val => onChange(val)}
                secureTextEntry={isShowPass}
                keyboardType={type ?? 'default'}
            />
            {suffix ?? suffix}
            <TouchableOpacity 
                onPress={
                    isPassword 
                        ? () => setIsShowPass(!isShowPass) 
                        : () => onChange('')
                }
            >
                {isPassword ? (
                    <FontAwesome name={isShowPass ? 'eye-slash' : 'eye'} size={22} color={appColors.gray}/>
                ) : (
                    value.length > 0 && 
                    allowClear && (
                        <AntDesign name='close' size={22} color={appColors.text}/>
                    )
                )}
            </TouchableOpacity>
        </View>
    );
};

export default InputComponent;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: appColors.gray3,
        width: '100%',
        minHeight: 56,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        backgroundColor: appColors.white,
        marginBottom: 19,
    },

    input: {
        padding: 0,
        margin: 0,
        flex: 1,
        paddingHorizontal: 14,
        color: appColors.text
    }
});
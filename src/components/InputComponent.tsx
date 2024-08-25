import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  TextInputProps,
  KeyboardType,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React, { ReactNode, useState } from 'react';
import { EyeSlash } from 'iconsax-react-native';
import { appColors } from '../constants/appColors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { globalStyles } from '../styles/globalStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface Props {
  value: string;
  onChange: (val: string) => void;
  affix?: ReactNode;
  placeholder?: string;
  suffix?: ReactNode;
  isPassword?: boolean;
  allowClear?: boolean;
  type?: KeyboardType;
  onEnd?: () => void;
  multiline?: boolean;
  numberOfLine?: number;
  styles?: StyleProp<ViewStyle>;
}

const InputComponent = (props: Props) => {
  const {
    onEnd,
    value,
    onChange,
    affix,
    placeholder,
    suffix,
    isPassword,
    allowClear,
    type,
    multiline,
    numberOfLine,
    styles
  } = props;

  const [isShowPass, setIsShowPass] = useState(isPassword ?? false);

  return (
    <View
      style={[
        globalStyles.inputContainer,
        {
          alignItems: multiline ? 'flex-start' : 'center',
        },
        styles,
      ]}
    >
      {affix ?? affix}
      <TextInput
        multiline={multiline}
        numberOfLines={numberOfLine}
        value={value}
        style={[
          globalStyles.input,
          globalStyles.text,
          {
            paddingHorizontal: affix || suffix ? 12 : 0,
          },
        ]}
        placeholderTextColor={'#747688'}
        placeholder={placeholder ?? ''}
        onChangeText={(val) => onChange(val)}
        secureTextEntry={isShowPass}
        keyboardType={type ?? 'default'}
        autoCapitalize="none"
        onEndEditing={onEnd}
      />
      {suffix ?? suffix}
      <TouchableOpacity
        onPress={
          isPassword ? () => setIsShowPass(!isShowPass) : () => onChange('')
        }
      >
        {isPassword ? (
          <FontAwesome
            name={isShowPass ? 'eye-slash' : 'eye'}
            size={22}
            color={appColors.gray}
          />
        ) : (
          value.length > 0 &&
          allowClear && (
            <AntDesign name="close" size={22} color={appColors.text} />
          )
        )}
      </TouchableOpacity>
    </View>
  );
};

export default InputComponent;

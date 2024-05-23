import React, { useState } from 'react';
import { View } from 'react-native';
import { ContainerComponent, InputComponent } from '../../components';
import { globalStyles } from '../../styles/globalStyles';
import {Lock, Sms} from 'iconsax-react-native';
import { appColors } from '../../constants/appColors';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ContainerComponent
      isImageBackground
    >
      <InputComponent 
        value={email}
        allowClear
        placeholder='Email'
        onChange={val => setEmail(val)}
        affix={<Sms size={22} color={appColors.gray}></Sms>}
      />

      <InputComponent 
        value={password}
        allowClear
        isPassword
        placeholder='Password'
        onChange={val => setPassword(val)}
        affix={<Lock size={22} color={appColors.gray}></Lock>}
      />    
    </ContainerComponent>
  );
};

export default LoginScreen;
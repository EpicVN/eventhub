import { Lock, Sms } from 'iconsax-react-native';
import React, { useState } from 'react';
import { Alert, Image, Switch } from 'react-native';
import { ButtonComponent, ContainerComponent, InputComponent, RowComponent, SectionComponent, SpaceComponent, TextComponent } from '../../components';
import { appColors } from '../../constants/appColors';
import SocialLogin from './components/SocialLogin';
import authenticationAPI from '../../apis/authApi';
import { Validate } from '../../utils/validate';
import { useDispatch } from 'react-redux';
import { addAuth } from '../../redux/reducers/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRemember, setIsRemember] = useState(true);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    const emailValidation = Validate.Email(email);

    if (emailValidation) {
      try {
        const res = await authenticationAPI.HandleAuthentication('/login', {email, password}, 'post');
        dispatch(addAuth(res.data));
        await AsyncStorage.setItem('auth', isRemember ? JSON.stringify(res.data) : email);
      } catch (error) {
        console.log(error);
      }
    } else {
      Alert.alert("Email is not correct !")
    }
  };

  return (
    <ContainerComponent
      isImageBackground
      isScroll
    >
      <SectionComponent styles={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      }}>
        <Image 
          source={require('../../assets/images/text-logo.png')}
          style={{
            width: 162,
            height: 114,
            marginBottom: 10
          }}
        />
      </SectionComponent>

      <SectionComponent>
        <TextComponent text='Sign in' size={24} title/>
        <SpaceComponent height={21}/>
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

        <RowComponent justify='space-between'>
          <RowComponent onPress={() => setIsRemember(!isRemember)}>
            <Switch 
              value={isRemember} 
              onChange={() => setIsRemember(!isRemember)}
              trackColor={{true: appColors.primary}}
              thumbColor={appColors.white}
            />
            <TextComponent text='Remember me'/>
          </RowComponent>
          <ButtonComponent 
            text='Forgot password?'
            onPress={() => navigation.navigate("ForgotPasswordScreen")}
            type='text'
          />
        </RowComponent>
      </SectionComponent>

      <SpaceComponent height={16}/>

      <SectionComponent>
        <ButtonComponent onPress={handleLogin} text='SIGN IN' type='primary'/>
      </SectionComponent>

      <SocialLogin/>

      <SpaceComponent height={3}/>

      <SectionComponent>
        <RowComponent justify='center'>
          <TextComponent text='Don’t have an account?'/>
          <SpaceComponent width={5}/>
          <ButtonComponent text='Sign up' type='link' onPress={() => navigation.navigate('SignUpScreen')}/>
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>
  );
};

export default LoginScreen;
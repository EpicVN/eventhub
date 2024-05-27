import { Lock, Sms } from 'iconsax-react-native';
import React, { useState } from 'react';
import { ButtonComponent, ContainerComponent, InputComponent, RowComponent, SectionComponent, SpaceComponent, TextComponent } from '../../components';
import { appColors } from '../../constants/appColors';
import SocialLogin from './components/SocialLogin';

const initValue = {
  userName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUpScreen = ({navigation}: any) => {
  const [values, setValue] = useState(initValue);

  const handleChangeValue = (key: string, value: string) => {
    const data: any = {...values};

    data[`${key}`] = value;

    setValue(data);
  }

  return (
    <ContainerComponent
      isImageBackground
      isScroll
      back
    >

      <SectionComponent>
        <TextComponent text='Sign up' size={24} title/>

        <SpaceComponent height={21}/>

        <InputComponent 
          value={values.userName}
          allowClear
          placeholder='Full name'
          onChange={val => handleChangeValue('userName', val)}
          affix={<Lock size={22} color={appColors.gray}></Lock>}
        />

        <InputComponent 
          value={values.email}
          allowClear
          placeholder='abc@email.com'
          onChange={val => handleChangeValue('email', val)}
          affix={<Sms size={22} color={appColors.gray}></Sms>}
        />

        <InputComponent 
          value={values.password}
          allowClear
          isPassword
          placeholder='Your password'
          onChange={val => handleChangeValue('password', val)}
          affix={<Lock size={22} color={appColors.gray}></Lock>}
        /> 

        <InputComponent 
          value={values.confirmPassword}
          allowClear
          isPassword
          placeholder='Confirm password'
          onChange={val => handleChangeValue('confirmPassword', val)}
          affix={<Lock size={22} color={appColors.gray}></Lock>}
        /> 
      </SectionComponent>

      <SpaceComponent height={16}/>

      <SectionComponent>
        <ButtonComponent text='SIGN UP' type='primary' />
      </SectionComponent>

      <SocialLogin/>

      <SpaceComponent height={3}/>

      <SectionComponent>
        <RowComponent justify='center'>
          <TextComponent text='Already have an account?'/>
          <SpaceComponent width={5}/>
          <ButtonComponent text='Sign in' type='link' onPress={() => navigation.navigate('LoginScreen')}/>
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>
  );
};

export default SignUpScreen;
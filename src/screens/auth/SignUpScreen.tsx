import { Lock, Sms } from 'iconsax-react-native';
import React, { useEffect, useState } from 'react';
import { ButtonComponent, ContainerComponent, InputComponent, RowComponent, SectionComponent, SpaceComponent, TextComponent } from '../../components';
import { appColors } from '../../constants/appColors';
import SocialLogin from './components/SocialLogin';
import { LoadingModal } from '../../modals';
import authenticationAPI from '../../apis/authApi';
import { Validate } from '../../utils/validate';
import { useDispatch } from 'react-redux';
import { addAuth } from '../../redux/reducers/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ErrorMessages {
  email: string,
  password: string,
  confirmPassword: string,
}

const initValue = {
  userName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUpScreen = ({navigation}: any) => {
  const [values, setValue] = useState(initValue);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<any>();
  const [isDisble, setIsDisable] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!errorMessage || errorMessage && (errorMessage.email || errorMessage.password || errorMessage.confirmPassword)) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  }, [errorMessage])

  const handleChangeValue = (key: string, value: string) => {
    const data: any = {...values};

    data[`${key}`] = value;

    setValue(data);
  };

  const formValidator = (key: string) => {
    const data = {...errorMessage};
    let message = '';

    switch (key) {
      case 'email':
        if (!values.email) {
          message = 'Email is required !';
        } else if (!Validate.Email(values.email)) {
          message = 'Invalid email, try again';
        } else {
          message = '';
        }
        break;
      
      case 'password':
        message = !values.password ? 'Password is required !' : '';
        break;

      case 'confirmPassword':
        if (!values.confirmPassword) {
          message = 'Confirm password is required !'
        } else if (values.confirmPassword !== values.password) {
          message = 'Password do not match'
        }
        break;
    }

    data[`${key}`] = message;

    setErrorMessage(data);
  }

  const handleRegister = async () => {
    const api = `/verification`;
    setIsLoading(true);
    try {
      const res = await authenticationAPI.HandleAuthentication(
        api, 
        {email: values.email}, 
        'post',
      );

      setIsLoading(false);

      navigation.navigate('VerificationScreen', {
        code: res.data.code,
        ...values,
      })
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  return (
    <>
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
          onEnd={() => formValidator('email')}
        />

        <InputComponent 
          value={values.password}
          allowClear
          isPassword
          placeholder='Your password'
          onChange={val => handleChangeValue('password', val)}
          affix={<Lock size={22} color={appColors.gray}></Lock>}
          onEnd={() => formValidator('password')}
        /> 

        <InputComponent 
          value={values.confirmPassword}
          allowClear
          isPassword
          placeholder='Confirm password'
          onChange={val => handleChangeValue('confirmPassword', val)}
          affix={<Lock size={22} color={appColors.gray}></Lock>}
          onEnd={() => formValidator('confirmPassword')}
        /> 
      </SectionComponent>

        {
          errorMessage && (
            <SectionComponent>
              {Object.keys(errorMessage).map((error, index) => 
                errorMessage[`${error}`] && (
                  <TextComponent 
                    text={errorMessage[`${error}`]} 
                    key={`error${index}`}
                    color={appColors.danger}
                  />
                )
              )}
            </SectionComponent>
          )
        }

      <SpaceComponent height={16}/>

      <SectionComponent>
        <ButtonComponent 
          onPress={handleRegister} 
          text='SIGN UP' 
          type='primary'
          disable={isDisble}
        />
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
    <LoadingModal visible={isLoading}/>
    </>
    
  );
};

export default SignUpScreen;
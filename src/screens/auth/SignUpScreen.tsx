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

const initValue = {
  userName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUpScreen = ({navigation}: any) => {
  const [values, setValue] = useState(initValue);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (values.email || values.password) {
      setErrorMessage('');
    }
  }, [values.email, values.password])

  const handleChangeValue = (key: string, value: string) => {
    const data: any = {...values};

    data[`${key}`] = value;

    setValue(data);
  };

  const handleRegister = async () => {
    const {email, password, confirmPassword} = values;

    const emailValidation = Validate.Email(email);

    const passValidation = Validate.Password(password);

    if(email && password && confirmPassword) {
      if(emailValidation && passValidation) {
        setErrorMessage('');
        setIsLoading(true);
        try {
          const res = await authenticationAPI.HandleAuthentication(
            '/register', 
            {
              fullname: values.userName,
              email,
              password,
            }, 
            'post');

          dispatch(addAuth(res.data));5 
          await AsyncStorage.setItem('auth', JSON.stringify(res.data));
          setIsLoading(false);
        } catch (error) {
          console.log(error);
          setIsLoading(false);
        }
      } else {
        setErrorMessage('Incorrect email')
      }
    }
    else {
      setErrorMessage('Vui lòng nhập đầy đủ thông tin')
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

        {
          errorMessage && 
          <SectionComponent>
            <TextComponent text={errorMessage} color={appColors.danger}/>
          </SectionComponent>
        }

      <SpaceComponent height={16}/>

      <SectionComponent>
        <ButtonComponent 
          onPress={handleRegister} 
          text='SIGN UP' 
          type='primary' 
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
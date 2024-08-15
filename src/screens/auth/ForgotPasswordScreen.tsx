import { View, Text, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ButtonComponent, ContainerComponent, InputComponent, SectionComponent, SpaceComponent, TextComponent } from '../../components'
import { ArrowRight, Sms } from 'iconsax-react-native';
import { appColors } from '../../constants/appColors';
import { globalStyles } from '../../styles/globalStyles';
import { Validate } from '../../utils/validate';
import { LoadingModal } from '../../modals';
import authenticationAPI from '../../apis/authApi';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const [isDisable, setIsDisable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckEmail = () => {
    const isValidEmail = Validate.Email(email);
    setIsDisable(!isValidEmail);
  };

  const handleForgotPassword = async () => {
    const api = `/forgotPassword`;
    setIsLoading(true);

    try {
      const res: any = await authenticationAPI.HandleAuthentication(
        api,
        {email},
        'post'
      );

      console.log(res);
      Alert.alert("Reset password successfully", "We have sent an email with new password.");
      setIsLoading(false);

    } catch (error) {
      setIsLoading(false);
      console.log(`Can not create new password, ${error}`)
    }
  }

  return (
    <ContainerComponent
      isImageBackground
      back
      isScroll
    >
      <SectionComponent>
        <TextComponent text='Reset password' size={24} title/>

        <SpaceComponent height={12}/>

        <TextComponent text='Please enter your email address to request a password reset' size={15}/>

        <SpaceComponent height={26}/>

        <InputComponent 
          value={email}
          allowClear
          isPassword
          placeholder='abc@email.com'
          onChange={val => setEmail(val)}
          affix={<Sms size={20} color={appColors.gray}/>}
          onEnd={handleCheckEmail}
        /> 

        <SpaceComponent height={40}/>

        <ButtonComponent 
          type='primary'
          disable={isDisable}
          text='SEND'
          icon={
            <View style={[
              globalStyles.iconContainer,
              {
                backgroundColor:
                isDisable ? appColors.gray : appColors.primary
              },
            ]}>
              <ArrowRight size={13} color={appColors.white}/>
            </View>
          }
          iconFlex='right'
          onPress={handleForgotPassword}
        />
      </SectionComponent>

      <LoadingModal visible={isLoading}/>
    </ContainerComponent>
  )
}

export default ForgotPasswordScreen
import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { ButtonComponent, ContainerComponent, InputComponent, SectionComponent, SpaceComponent, TextComponent } from '../../components'
import { ArrowRight, Sms } from 'iconsax-react-native';
import { appColors } from '../../constants/appColors';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');

  return (
    <ContainerComponent
      isImageBackground
      back
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
        /> 

        <SpaceComponent height={40}/>

        <ButtonComponent 
          type='primary' 
          text='SEND'
          icon={<ArrowRight size={13} color={appColors.white}/>}
          iconFlex='right'
        />
      </SectionComponent>
    </ContainerComponent>
  )
}

export default ForgotPasswordScreen
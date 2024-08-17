import React, { useState } from 'react'
import { ButtonComponent, RowComponent, SectionComponent, SpaceComponent, TextComponent } from '../../../components'
import { appColors } from '../../../constants/appColors'
import { fontFamilies } from '../../../constants/fontFamilies'
import { Facebook, Google } from '../../../assets/svgs'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import authenticationAPI from '../../../apis/authApi'
import { useDispatch } from 'react-redux';
import { addAuth } from '../../../redux/reducers/authReducer'
import AsyncStorage from '@react-native-async-storage/async-storage'

GoogleSignin.configure({
  webClientId:
    '871971014206-f0gbufpnkbch3a9ccn69umcl7jbo1j6f.apps.googleusercontent.com',
  
});

const SocialLogin = () => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const handleLoginWithGoogle = async () => {
    await GoogleSignin.hasPlayServices({
      showPlayServicesUpdateDialog: true,
    });

    const api = `/google-signin`;

    try {
      await GoogleSignin.hasPlayServices();

      const userInfo = await GoogleSignin.signIn();

      const user = userInfo.user;

      const res: any = await authenticationAPI.HandleAuthentication(
        api,
        user,
        'post',
      );

      console.log(res.data);
      dispatch(addAuth(res.data));
      await AsyncStorage.setItem('auth', JSON.stringify(res.data));

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <SectionComponent>
        <TextComponent 
          text='OR' 
          color={appColors.gray4} 
          size={16} 
          font={fontFamilies.medium}
          styles={{
              textAlign: 'center'
          }}
        />

        <SpaceComponent height={15}/>

        <ButtonComponent
          type='primary'
          textFont={fontFamilies.regular}
          text='Login with Google'
          color={appColors.white}
          textColor={appColors.text}
          iconFlex='left'
          icon={<Google/>}
          onPress={handleLoginWithGoogle}
        />

        <ButtonComponent
          type='primary'
          textFont={fontFamilies.regular}
          text='Login with Facebook'
          color={appColors.white}
          textColor={appColors.text}
          iconFlex='left'
          icon={<Facebook/>}
        />
    </SectionComponent>
  )
}

export default SocialLogin
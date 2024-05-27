import React from 'react'
import { ButtonComponent, SectionComponent, SpaceComponent, TextComponent } from '../../../components'
import { appColors } from '../../../constants/appColors'
import { fontFamilies } from '../../../constants/fontFamilies'
import { Facebook, Google } from '../../../assets/svgs'

const SocialLogin = () => {
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

        <SpaceComponent height={5}/>

        <ButtonComponent
          type='primary'
          textFont={fontFamilies.regular}
          text='Login with Google'
          color={appColors.white}
          textColor={appColors.text}
          iconFlex='left'
          icon={<Google/>}
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
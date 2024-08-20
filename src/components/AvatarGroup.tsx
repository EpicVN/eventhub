import { View, Text, Image } from 'react-native';
import React from 'react';
import TextComponent from './TextComponent';
import RowComponent from './RowComponent';
import { appColors } from '../constants/appColors';
import { fontFamilies } from '../constants/fontFamilies';
import SpaceComponent from './SpaceComponent';

const AvatarGroup = () => {
  return (
    <RowComponent justify="flex-start" styles={{ marginVertical: 12 }}>
      {Array.from({ length: 3 }).map((item, index) => (
        <Image
          key={`img${index}`}
          source={require('../assets/images/avatar-icon.jpg')}
          style={{
            width: 24,
            height: 24,
            borderRadius: 100,
            borderWidth: 1,
            borderColor: appColors.white,
            marginLeft: index > 0 ? -8 : 0,
          }}
        />
      ))}

      <SpaceComponent width={10} />

      <TextComponent
        text="+20 Going"
        size={12}
        color={appColors.primary}
        font={fontFamilies.bold}
      />
    </RowComponent>
  );
};

export default AvatarGroup;

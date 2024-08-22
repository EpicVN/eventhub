import React from 'react';
import { Image } from 'react-native';
import { appColors } from '../constants/appColors';
import { fontFamilies } from '../constants/fontFamilies';
import RowComponent from './RowComponent';
import SpaceComponent from './SpaceComponent';
import TextComponent from './TextComponent';

interface Props {
  size?: number;
}

const AvatarGroup = (props: Props) => {
  const {size} = props;
  return (
    <RowComponent justify="flex-start" styles={{ marginVertical: 12 }}>
      {Array.from({ length: 3 }).map((item, index) => (
        <Image
          key={`img${index}`}
          source={require('../assets/images/avatar-icon.jpg')}
          style={{
            width: size ?? 24,
            height: size ?? 24,
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
        size={12 + (size ? (size - 24) / 5 : 0)}
        color={appColors.primary}
        font={fontFamilies.bold}
      />
    </RowComponent>
  );
};

export default AvatarGroup;

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ImageBackground } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { appColors } from '../constants/appColors';
import { appInfo } from '../constants/appInfos';
import { fontFamilies } from '../constants/fontFamilies';
import { EventModel } from '../models/EventModel';
import { globalStyles } from '../styles/globalStyles';
import AvatarGroup from './AvatarGroup';
import CardComponent from './CardComponent';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';

interface Props {
  item: EventModel;
  type: 'card' | 'list';
}

const EventItem = (props: Props) => {
  const { item, type } = props;

  const navigation: any = useNavigation();

  return (
    <CardComponent
      isShadow
      styles={{ width: appInfo.sizes.WIDTH * 0.6, padding: 10 }}
      onPress={() => navigation.navigate('EventDetail', {item})}
    >
      <ImageBackground
        style={{ flex: 1, height: 131, marginBottom: 14 }}
        source={require('../assets/images/event-image.png')}
        imageStyle={{
          resizeMode: 'cover',
          borderRadius: 10,
          height: 131,
        }}
      >
        <RowComponent justify="space-between">
          <CardComponent
            styles={globalStyles.noSpaceCard}
            isShadow
            color="#FFFFFFB3"
          >
            <TextComponent
              font={fontFamilies.bold}
              color="#F0635A"
              size={18}
              text="10"
            />
            <TextComponent
              font={fontFamilies.medium}
              color="#F0635A"
              size={10}
              text="JUNE"
            />
          </CardComponent>

          <CardComponent
            isShadow
            onPress={() => {}}
            color="#FFFFFFB3"
            styles={[
              {
                width: 30,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: -10
              },
            ]}
          >
            <MaterialIcons name="bookmark" size={20} color="#EB5757" />
          </CardComponent>
        </RowComponent>
      </ImageBackground>

      <TextComponent numberOfLine={1} text={item.title} title size={18} />

      <AvatarGroup />

      <RowComponent>
        <MaterialIcons name="place" size={24} color={appColors.gray5} />
        <TextComponent
          numberOfLine={1}
          flex={1}
          text={item.location.address}
          size={13}
          color={appColors.text2}
        />
      </RowComponent>
    </CardComponent>
  );
};

export default EventItem;

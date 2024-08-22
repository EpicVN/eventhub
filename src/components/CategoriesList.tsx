import { View, Text, FlatList } from 'react-native';
import React, { ReactNode } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { appColors } from '../constants/appColors';
import TagComponent from './TagComponent';
import { KnifeFork } from '../assets/svgs';

interface Props {
  isFill?: boolean;
}

interface Category {
  icon: ReactNode;
  color: string;
  label: string;
  key: string;
}

const CategoriesList = (props: Props) => {
  const { isFill } = props;

  const categories: Category[] = [
    {
      key: 'sports',
      label: 'Sports',
      icon: (
        <FontAwesome6
          name="basketball"
          color={isFill ? appColors.white : '#F0635A'}
          size={20}
        />
      ),
      color: '#F0635A',
    },

    {
      key: 'music',
      label: 'Music',
      icon: (
        <FontAwesome6
          name="music"
          color={isFill ? appColors.white : '#F59762'}
          size={20}
        />
      ),
      color: '#F59762',
    },

    {
      key: 'food',
      label: 'Food',
      icon: <KnifeFork color={isFill ? appColors.white : '#29D697'} />,
      color: '#29D697',
    },

    {
      key: 'art',
      label: 'Art',
      icon: (
        <Ionicons
          name="color-palette-sharp"
          color={isFill ? appColors.white : '#46CDFB'}
          size={20}
        />
      ),
      color: '#46CDFB',
    },
  ];

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories}
      renderItem={({ item, index }) => (
        <TagComponent
          bgColor={isFill ? item.color : appColors.white}
          onPress={() => {}}
          icon={item.icon}
          label={item.label}
          styles={{
            marginRight: index === categories.length - 1 ? 36 : 12,
            minWidth: 82,
          }}
        />
      )}
      style={{ paddingHorizontal: 24 }}
    />
  );
};

export default CategoriesList;

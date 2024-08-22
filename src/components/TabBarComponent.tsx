import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';
import { appColors } from '../constants/appColors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface Props {
  title: string;
  onPress: () => void;
}

const TabBarComponent = (props: Props) => {
  const { title, onPress } = props;

  return (
    <RowComponent
      styles={{
        paddingHorizontal: 24,
        marginTop: 40,
        marginBottom: 10,
      }}
    >
      <TextComponent text={title} title flex={1} size={18} />

      <TouchableOpacity>
        <RowComponent onPress={onPress}>
          <TextComponent text="See All" size={14} color={appColors.gray} />
          <MaterialIcons name="arrow-right" size={24} color={appColors.gray} />
        </RowComponent>
      </TouchableOpacity>
    </RowComponent>
  );
};

export default TabBarComponent;

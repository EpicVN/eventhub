import { View, Text } from 'react-native';
import React from 'react';
import { SelectModel } from '../models/SelectModel';
import TextComponent from './TextComponent';
import RowComponent from './RowComponent';
import { ArrowDown2 } from 'iconsax-react-native';
import { appColors } from '../constants/appColors';
import { globalStyles } from '../styles/globalStyles';

interface Props {
  label?: string;
  values: SelectModel[];
  selected?: string | string[];
  onSelect: (val: string) => void;
}

const DropdownPickerComponent = (props: Props) => {
  const { label, values, selected, onSelect } = props;
  return (
    <View style={{ marginBottom: 20 }}>
      {label && <TextComponent text={label} styles={{ marginBottom: 8 }} />}
      <RowComponent onPress={() => {}} styles={[globalStyles.inputContainer]}>
        <RowComponent styles={{ flex: 1 }}>
          <TextComponent text="Select" />
        </RowComponent>
        <ArrowDown2 size={22} color={appColors.gray} />
      </RowComponent>
    </View>
  );
};

export default DropdownPickerComponent;

import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';
import { ArrowDown2, Calendar, Clock } from 'iconsax-react-native';
import { appColors } from '../constants/appColors';
import DatePicker from 'react-native-date-picker';
import { globalStyles } from '../styles/globalStyles';
import { fontFamilies } from '../constants/fontFamilies';
import { DateTime } from '../utils/DateTime';

interface Props {
  selected: Date;
  type: 'date' | 'time';
  onSelect: (val: Date) => void;
  label?: string;
}

const DateTimePickerComponent = (props: Props) => {
  const { type, onSelect, selected, label } = props;
  const [isShow, setIsShow] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      {label && (
        <TextComponent size={16} text={label} styles={{ marginBottom: 8 }} />
      )}
      <RowComponent
        onPress={() => setIsShow(true)}
        styles={[globalStyles.inputContainer]}
      >
        <TextComponent
          text={`${
            selected
              ? type === 'time'
                ? DateTime.GetTime(selected)
                : DateTime.GetDate(selected)
              : 'Choice'
          }`}
          flex={1}
          font={fontFamilies.medium}
          size={16}
          styles={{ textAlign: 'center' }}
        />

        {type === 'time' ? (
          <Clock size={22} color={appColors.primary} />
        ) : (
          <Calendar variant="Bold" size={24} color={appColors.primary} />
        )}
      </RowComponent>

      <DatePicker
        modal
        mode={type}
        open={isShow}
        date={new Date()}
        onConfirm={(val) => {
          setIsShow(false);
          onSelect(val);
        }}
        onCancel={() => setIsShow(false)}
      />
    </View>
  );
};

export default DateTimePickerComponent;

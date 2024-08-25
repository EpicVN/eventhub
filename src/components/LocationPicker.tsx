import { ArrowRight2 } from 'iconsax-react-native';
import React, { useState } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { appColors } from '../constants/appColors';
import { globalStyles } from '../styles/globalStyles';
import RowComponent from './RowComponent';
import SpaceComponent from './SpaceComponent';
import TextComponent from './TextComponent';
import { LocationModal } from '../modals';

const LocationPicker = () => {
  const [isVisibleModalLocation, setIsVisibleModalLocation] = useState(false);
  return (
    <>
      <RowComponent
        onPress={() => setIsVisibleModalLocation(!isVisibleModalLocation)}
        styles={[globalStyles.inputContainer]}
      >
        <View style={[styles.card]}>
          <View
            style={{
              ...styles.card,
              backgroundColor: '#fff',
              width: 30,
              height: 30,
            }}
          >
            <FontAwesome6
              name="location-dot"
              color={appColors.primary}
              size={20}
            />
          </View>
        </View>

        <SpaceComponent width={12} />

        <TextComponent flex={1} text="Newyork, USA" />
        <ArrowRight2 color={appColors.primary} size={22} />
      </RowComponent>

      <LocationModal
        visible={isVisibleModalLocation}
        onClose={() => setIsVisibleModalLocation(false)}
        onSelect={(val) => console.log(val)}
      />
    </>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  card: {
    width: 45,
    height: 45,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.primary4,
  },
});

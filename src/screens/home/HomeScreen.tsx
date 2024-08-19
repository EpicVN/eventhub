import { HambergerMenu, SearchNormal1, Sort } from 'iconsax-react-native';
import React from 'react';
import { Platform, StatusBar, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import {
  CircleComponent,
  RowComponent,
  SpaceComponent,
  TagComponent,
  TextComponent,
} from '../../components';
import { appColors } from '../../constants/appColors';
import { authSelector } from '../../redux/reducers/authReducer';
import { globalStyles } from '../../styles/globalStyles';
import { fontFamilies } from '../../constants/fontFamilies';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const HomeScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();

  const auth = useSelector(authSelector);

  return (
    <View style={[globalStyles.container]}>
      <StatusBar barStyle={'light-content'} />

      <View
        style={{
          backgroundColor: appColors.primary,
          height: 179,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 42,
          paddingHorizontal: 24,
        }}
      >
        <RowComponent>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <HambergerMenu size={20} color={appColors.white} />
          </TouchableOpacity>

          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}
          >
            <RowComponent>
              <TextComponent
                text="Current Location  "
                color={appColors.white2}
                size={12}
              />
              <AntDesign name="caretdown" size={8} color={appColors.white} />
            </RowComponent>

            <TextComponent
              text="New York, USA"
              flex={0}
              color={appColors.white}
              font={fontFamilies.medium}
              size={13}
            />
          </View>

          <CircleComponent color={appColors.primary2} size={36}>
            <View>
              <FontAwesome5 name="bell" size={18} color={appColors.white} />
              <View
                style={{
                  backgroundColor: '#02E9FE',
                  width: 10,
                  height: 10,
                  borderRadius: 4,
                  borderWidth: 2,
                  borderColor: '#524CE0',
                  position: 'absolute',
                  top: -2,
                  right: -2,
                }}
              ></View>
            </View>
          </CircleComponent>
        </RowComponent>

        <SpaceComponent height={20} />

        <RowComponent justify="space-between">
          <RowComponent
            styles={{ flex: 1 }}
            onPress={() =>
              navigation.navigate('SearchEvents', {
                isFilter: false,
              })
            }
          >
            <SearchNormal1
              variant="TwoTone"
              color={appColors.white}
              size={20}
            />
            <View
              style={{
                width: 1,
                backgroundColor: appColors.white,
                marginLeft: 10,
                marginRight: 7,
                height: 20,
                opacity: 0.5,
              }}
            />
            <TextComponent
              styles={{ opacity: 0.5 }}
              flex={1}
              text="Search..."
              color={appColors.white}
              size={18}
            />
          </RowComponent>

          <TagComponent
            onPress={() =>
              navigation.navigate('SearchEvents', {
                isFilter: true,
              })
            }
            label="Filters"
            textColor={appColors.white}
            bgColor={appColors.primary2}
            icon={
              <CircleComponent color="#A29EF0" size={24}>
                <Sort size={16} color={appColors.primary2} />
              </CircleComponent>
            }
          />
        </RowComponent>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: appColors.white,
        }}
      ></View>
    </View>
  );
};

export default HomeScreen;

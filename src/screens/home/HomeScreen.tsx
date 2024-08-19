import { HambergerMenu, SearchNormal1, Sort } from 'iconsax-react-native';
import React from 'react';
import { Platform, StatusBar, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import {
  CategoriesList,
  CircleComponent,
  RowComponent,
  SpaceComponent,
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
          height: 190 + (Platform.OS === 'ios' ? 16 : 0),
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 52,
        }}
      >
        <SpaceComponent height={12}/>
        <View style={{ paddingHorizontal: 24 }}>
          <RowComponent>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <HambergerMenu size={24} color={appColors.white} />
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
                <AntDesign name="caretdown" size={10} color={appColors.white} />
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

          <RowComponent>
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
                size={22}
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

            <RowComponent
              onPress={() =>
                navigation.navigate('SearchEvents', {
                  isFilter: true,
                })
              }
              styles={{
                backgroundColor: '#5D56F3',
                paddingHorizontal: 12,
                paddingVertical: 8,
                borderRadius: 100,
              }}
            >
              <CircleComponent color="#A29EF0" size={20}>
                <Sort size={16} color={appColors.primary2} />
              </CircleComponent>

              <SpaceComponent width={8} />

              <TextComponent text="Filters" color={appColors.white} />
            </RowComponent>
          </RowComponent>

          <SpaceComponent height={28} />
        </View>

        <View style={{ marginBottom: 0 }}>
          <CategoriesList isFill />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

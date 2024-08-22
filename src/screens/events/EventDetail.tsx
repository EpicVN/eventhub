import { Calendar } from 'iconsax-react-native';
import React from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import {
  AvatarGroup,
  ButtonComponent,
  CardComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import { appColors } from '../../constants/appColors';
import { fontFamilies } from '../../constants/fontFamilies';
import { authSelector } from '../../redux/reducers/authReducer';
import { globalStyles } from '../../styles/globalStyles';

const EventDetail = ({ navigation, route }: any) => {
  const { item } = route.params;
  const user = useSelector(authSelector);
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, backgroundColor: appColors.white }}>
      <StatusBar barStyle={'light-content'} />

      <ImageBackground
        source={require('../../assets/images/event-detail-bg.png')}
        imageStyle={{
          resizeMode: 'cover',
        }}
        style={{
          flex: 1,
          height: 244,
          zIndex: -1,
        }}
      >
        <LinearGradient colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0)']}>
          <RowComponent
            justify="space-between"
            styles={{
              paddingTop:
                Platform.OS === 'android' ? StatusBar.currentHeight : 52,
              paddingHorizontal: 24,
              paddingVertical: 16,
            }}
          >
            <RowComponent>
              <TouchableOpacity
                style={{ padding: 8 }}
                onPress={() => navigation.goBack()}
              >
                <Ionicons name="arrow-back" size={22} color={appColors.white} />
              </TouchableOpacity>

              <SpaceComponent width={13} />

              <TextComponent
                title
                text="Event Details"
                color={appColors.white}
              />
            </RowComponent>

            <CardComponent
              isShadow
              onPress={() => {}}
              color="#FFFFFF4D"
              styles={[
                {
                  width: 36,
                  height: 36,
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              ]}
            >
              <MaterialIcons
                name="bookmark"
                size={20}
                color={appColors.white}
              />
            </CardComponent>
          </RowComponent>
        </LinearGradient>

        <ScrollView
          style={{
            flex: 1,
            paddingTop: 244 - 146,
          }}
          showsVerticalScrollIndicator={false}
        >
          <SectionComponent styles={{ paddingHorizontal: 40 }}>
            <View
              style={[
                globalStyles.tag,
                globalStyles.shadow,
                {
                  backgroundColor: appColors.white,
                },
              ]}
            >
              <RowComponent justify="space-around" styles={{ zIndex: 1 }}>
                <AvatarGroup size={34} />
                <TouchableOpacity
                  style={[
                    globalStyles.button,
                    {
                      backgroundColor: appColors.primary,
                      paddingVertical: 8,
                      minHeight: 32,
                      borderRadius: 5,
                    },
                  ]}
                >
                  <TextComponent
                    text="INVITE"
                    font={fontFamilies.bold}
                    color={appColors.white}
                    size={12}
                  />
                </TouchableOpacity>
              </RowComponent>
            </View>
          </SectionComponent>

          <View
            style={{
              backgroundColor: appColors.white,
            }}
          >
            <SectionComponent>
              <TextComponent title text={item.title} size={34} />
            </SectionComponent>

            <SectionComponent styles={{ paddingHorizontal: 16 }}>
              <RowComponent>
                <CardComponent
                  onPress={() => {}}
                  color="#5669FF1A"
                  styles={[
                    globalStyles.noSpaceCard,
                    {
                      width: 48,
                      height: 48,
                    },
                  ]}
                >
                  <Calendar
                    size={30}
                    color={appColors.primary}
                    variant="TwoTone"
                  />
                </CardComponent>

                <SpaceComponent width={6} />

                <View style={{ flex: 1 }}>
                  <TextComponent title size={16} text="14 December, 2021" />
                  <TextComponent
                    color={appColors.text2}
                    size={14}
                    text="Tuesday, 4:00PM - 9:00PM"
                  />
                </View>
              </RowComponent>
            </SectionComponent>

            <SectionComponent styles={{ paddingHorizontal: 16 }}>
              <RowComponent>
                <CardComponent
                  onPress={() => {}}
                  color="#5669FF1A"
                  styles={[
                    globalStyles.noSpaceCard,
                    {
                      width: 48,
                      height: 48,
                    },
                  ]}
                >
                  <MaterialIcons
                    name="place"
                    size={30}
                    color={appColors.primary}
                  />
                </CardComponent>

                <SpaceComponent width={6} />

                <View style={{ flex: 1 }}>
                  <TextComponent
                    title
                    size={16}
                    text={item.location.locationName}
                  />
                  <TextComponent
                    color={appColors.text2}
                    size={14}
                    text={item.location.address}
                  />
                </View>
              </RowComponent>
            </SectionComponent>

            <SectionComponent>
              <RowComponent>
                <Image
                  source={require('../../assets/images/avatar-icon.jpg')}
                  style={[localStyles.avatar]}
                />

                <SpaceComponent width={14} />

                <View style={{ flex: 1 }}>
                  <TextComponent title size={16} text="Ashfak Sayem" />
                  <TextComponent
                    color={appColors.text2}
                    size={14}
                    text="Organizer"
                  />
                </View>

                <TouchableOpacity
                  style={[
                    globalStyles.button,
                    {
                      backgroundColor: '#5669FF1F',
                      paddingVertical: 8,
                      minHeight: 32,
                      borderRadius: 5,
                    },
                  ]}
                >
                  <TextComponent
                    text="Follow"
                    font={fontFamilies.medium}
                    color={appColors.primary}
                    size={12}
                  />
                </TouchableOpacity>
              </RowComponent>
            </SectionComponent>

            <SpaceComponent height={10} />

            <SectionComponent>
              <TextComponent title text="About Event" size={18} />
              <SpaceComponent height={8} />
              <TextComponent text={item.description} size={16} />
            </SectionComponent>
          </View>
        </ScrollView>

        <LinearGradient
          colors={['rgba(255,255,255,0.1)', 'rgba(255,255,255,1)']}
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: 0,
            padding: 12,
          }}
        >
          <ButtonComponent
            type="primary"
            text="BUY TICKET $120"
            iconFlex="right"
            icon={
              <View
                style={[
                  globalStyles.iconContainer,
                  {
                    backgroundColor: appColors.primary3,
                  },
                ]}
              >
                <Ionicons
                  name="arrow-forward"
                  size={16}
                  color={appColors.white}
                />
              </View>
            }
          />
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const localStyles = StyleSheet.create({
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 12,
    resizeMode: 'cover',
  },
});

export default EventDetail;

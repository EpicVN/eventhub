import React from 'react';
import {
  FlatList,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector, removeAuth } from '../redux/reducers/authReducer';
import ButtonComponent from './ButtonComponent';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';
import { appColors } from '../constants/appColors';
import {
  Bookmark2,
  Logout,
  Message2,
  MessageQuestion,
  Setting2,
  Sms,
  User,
} from 'iconsax-react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DrawerCustom = ({ navigation }: any) => {
  const user = useSelector(authSelector);
  const dispatch = useDispatch();
  const size = 20;
  const color = appColors.gray;
  const profileMenu = [
    {
      key: 'MyProfile',
      title: 'My Profile',
      icon: <User size={size} color={color} />,
    },
    {
      key: 'Message',
      title: 'Message',
      icon: <Message2 size={size} color={color} />,
    },
    {
      key: 'Bookmark',
      title: 'Bookmark',
      icon: <Bookmark2 size={size} color={color} />,
    },
    {
      key: 'ContactUs',
      title: 'Contact us',
      icon: <Sms size={size} color={color} />,
    },
    {
      key: 'Setting',
      title: 'Setting',
      icon: <Setting2 size={size} color={color} />,
    },
    {
      key: 'HelpAndFAQs',
      title: 'Help & FAQs',
      icon: <MessageQuestion size={size} color={color} />,
    },
    {
      key: 'SignOut',
      title: 'Sign Out',
      icon: <Logout size={size} color={color} />,
    },
  ];

  const handleSignOut = async () => {
    await GoogleSignin.signOut();
    dispatch(removeAuth({}));
    await AsyncStorage.clear();
  };

  return (
    <View style={[localStyles.container]}>
      <TouchableOpacity
        onPress={() => {
          navigation.closeDrawer();
          navigation.navigate('Profile', {
            screen: 'ProfileScreen',
          });
        }}
      >
        {user.photo ? (
          <Image
            source={{ uri: `${user.photo}` }}
            style={[localStyles.avatar]}
          />
        ) : (
          <View
            style={[localStyles.avatar, { backgroundColor: appColors.gray4 }]}
          >
            <TextComponent
              text={
                user.name
                  ? user.name
                      .split(' ')
                      [user.name.split(' ').length - 1].substring(0, 1)
                  : ''
              }
              title
              size={22}
              color={appColors.white}
            />
          </View>
        )}
        <TextComponent text={user.name} title size={18} />
      </TouchableOpacity>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={profileMenu}
        style={{ flex: 1, marginVertical: 20 }}
        renderItem={({ item, index }) => (
          <RowComponent
            styles={[localStyles.listItem]}
            onPress={
              item.key === 'SignOut'
                ? () => handleSignOut()
                : () => {
                    console.log(item.key);
                    navigation.closeDrawer();
                  }
            }
          >
            {item.icon}
            <TextComponent
              text={item.title}
              styles={[localStyles.listItemText]}
            />
          </RowComponent>
        )}
      />

      <RowComponent justify="flex-start">
        <ButtonComponent
          textColor="#00F8FF"
          type="primary"
          text="Upgrade Pro"
          color="#00F8FF33"
          iconFlex="left"
          icon={
            <MaterialCommunityIcons name="crown" size={22} color="#00F8FF" />
          }
          styles={{
            paddingRight: 20,
          }}
        />
      </RowComponent>
    </View>
  );
};

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingVertical: Platform.OS === 'android' ? StatusBar.currentHeight : 48,
  },

  avatar: {
    width: 52,
    height: 52,
    borderRadius: 100,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  listItem: {
    paddingVertical: 12,
    justifyContent: 'flex-start',
  },

  listItemText: {
    paddingLeft: 12,
  },
});

export default DrawerCustom;

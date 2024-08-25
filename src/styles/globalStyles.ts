import { Platform, StyleSheet } from 'react-native';
import { appColors } from '../constants/appColors';
import { fontFamilies } from '../constants/fontFamilies';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },

  text: {
    fontFamily: fontFamilies.regular,
    fontSize: 16,
    color: appColors.text,
  },

  button: {
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.white,
    paddingHorizontal: 16,
    paddingVertical: 16,
    minHeight: 56,
    flexDirection: 'row',
  },

  shadow: {
    shadowColor:
      Platform.OS === 'ios' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },

  section: {
    paddingHorizontal: 24,
    paddingBottom: 20,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3D56F0',
    width: 30,
    height: 30,
    borderRadius: 100,
  },

  tag: {
    paddingVertical: 6,
    paddingHorizontal: 7,
    borderRadius: 100,
  },

  card: {
    borderRadius: 12,
    backgroundColor: appColors.white,
    marginHorizontal: 8,
    marginVertical: 6,
    marginBottom: 16,
  },

  noSpaceCard: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 45,
    height: 45,
    padding: 0,
    margin: 0,
  },

  inputContainer: {
    flexDirection: 'row',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: appColors.gray3,
    width: '100%',
    minHeight: 56,

    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: appColors.white,
    marginBottom: 19,
  },

  input: {
    padding: 0,
    margin: 0,
    flex: 1,
    color: appColors.text,
  },
});

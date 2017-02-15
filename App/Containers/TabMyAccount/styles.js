// @flow

import { StyleSheet } from 'react-native';
import { Colors, ApplicationStyles } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  groupContainer: {
    ...ApplicationStyles.groupContainer,
  },
  sectionHeaderContainer: {
    ...ApplicationStyles.darkLabelContainer,
  },
  sectionHeader: {
    ...ApplicationStyles.darkLabel,
  },
  container: {
    backgroundColor: Colors.colorTukangBlack,
  },
  headerLogin: {
    backgroundColor: Colors.colorTukangGrey,
    paddingTop: 0,
    paddingBottom: 10,
  },
  logoFb: {
    paddingRight: 20,
    fontSize: 16,
  },
  btnFb: {
    backgroundColor: Colors.colorFb,
    elevation: 0,
    paddingTop: 10,
    paddingBottom: 10,
    height: 50,
  },
  btnEmail: {
    backgroundColor: Colors.colorTukangYellow,
    elevation: 0,
    paddingTop: 10,
    paddingBottom: 10,
    height: 50,
  },
  btnGoogle: {
    backgroundColor: Colors.colorGoogle,
    elevation: 0,
    paddingTop: 10,
    paddingBottom: 10,
    height: 50,
  },
  noBorder: {
    borderBottomWidth: 0,
  },
  rowUser: {
    fontSize: 18,
    lineHeight: 20,
    color: Colors.colorTukangWhite,
  },
  rowUserLogin: {
    fontSize: 12,
    lineHeight: 14,
    color: Colors.colorTukangWhite,
  },
  btnEditProfile: {
    backgroundColor: Colors.colorTukangWhite,
  },
  loginTextOr: {
    textAlign: 'center',
    fontSize: 12,
  },
  loginListOr: {
    marginTop: 10,
    marginBottom: 20,
  },
  loginInput: {
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 0,
    backgroundColor: Colors.colorTukangWhite,
    borderRadius: 5,
    borderColor: Colors.colorTukangDivider,
    borderWidth: 1,
  },
  loginTextDaftar: {
    textAlign: 'left',
    fontSize: 12,
  },
  loginTextLupaPassword: {
    textAlign: 'right',
    fontSize: 12,
  },
  dataArrow: {
    color: Colors.colorTukangDivider,
  },
  iconMore: {
    alignSelf: 'center',
    color: Colors.colorTukangWhite,
  },
  noLeftMargin: {
    marginLeft: 0,
    paddingLeft: 18,
    paddingRight: 18,
  },
  alignRight: {
    alignSelf: 'flex-end',
  },
  textWhite: {
    color: Colors.colorTukangWhite,
    fontSize: 16,
    lineHeight: 20,
  },
  textBlack: {
    color: Colors.colorTukangBlack,
    fontSize: 16,
  },
  textCenter: {
    textAlign: 'center',
  },
});

// @flow

import { StyleSheet, Platform } from 'react-native';
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
    flex: 1,
  },
  dataGrid: {
    paddingLeft: 10,
  },
  rowRating: {
    flex: 1,
  },
  rowTitle: {
    fontSize: 15,
    paddingTop: 0,
    marginTop: 0,
  },
  rowNotes: {
    fontSize: 12,
    color: Colors.colorTukangGreyLight,
  },
  statusYellow: {
    fontSize: 12,
    lineHeight: 18,
    color: Colors.colorTukangOrange,
  },
  statusRed: {
    fontSize: 12,
    lineHeight: 18,
    color: Colors.colorTukangRed,
  },
  statusGreen: {
    fontSize: 12,
    lineHeight: 18,
    color: Colors.colorTukangGreen,
  },
  statusBlue: {
    fontSize: 12,
    lineHeight: 18,
    color: Colors.colorTukangBlue,
  },
  listYellow: {
    paddingLeft: 0,
    backgroundColor: Colors.colorTukangOrange,
  },
  listRed: {
    paddingLeft: 0,
    backgroundColor: Colors.colorTukangRed,
  },
  listGreen: {
    paddingLeft: 0,
    marginLeft: 0,
    backgroundColor: Colors.colorTukangGreen,
  },
  listBlue: {
    paddingLeft: 0,
    backgroundColor: Colors.colorTukangBlue,
  },
  listText: {
    paddingLeft: 10,
    fontSize: 14,
    lineHeight: 16,
    color: Colors.colorTukangWhite,
  },
  statusCompleted: {
    fontSize: 12,
    color: Colors.colorTukangDivider,
  },
  ratingAlign: {
    borderBottomWidth: 0,
    height: 30,
    padding: 0,
    marginTop: 20,
  },
  sidebarIcon: {
    fontSize: 21,
    alignSelf: 'center',
    color: Colors.colorTukangWhite,
    backgroundColor: Colors.colorTukangOrange,
    width: 37,
    height: 37,
    borderRadius: 18,
    paddingLeft: 10,
    paddingTop: (Platform.OS === 'android') ? 8 : 5,
  },
  thumbAlign: {
    alignSelf: 'center',
  },
  buttonAlign: {
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: Colors.colorTukangYellow,
    backgroundColor: 'transparent',
    width: 70,
    height: 70,
    shadowRadius: 0,
    elevation: 0,
  },
  iconAlign: {
    alignSelf: 'center',
    color: Colors.colorTukangYellow,
    fontSize: 35,
    lineHeight: 35,
  },
  textCenter: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    textAlign: 'center',
    lineHeight: 20,
  },
  rowDetail: {
  },
  textNotes: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 20,
    color: Colors.colorTukangGreyLight,
  },
  skillIcon: {
    alignSelf: 'center',
    fontSize: 21,
    textAlign: 'center',
    color: Colors.colorTukangWhite,
    backgroundColor: Colors.colorTukangYellow,
    width: 37,
    height: 37,
    lineHeight: 30,
    borderRadius: 18,
    marginRight: 10,
  },
  noBorder: {
    borderBottomWidth: 0,
  },
  loginTextOr: {
    textAlign: 'center',
    fontSize: 12,
  },
  loginListOr: {
    marginTop: 10,
    marginBottom: 10,
  },
  loginInput: {
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 0,
    backgroundColor: Colors.colorTukangWhite,
    borderRadius: 5,
    borderColor: 'transparent',
  },
  loginTextDaftar: {
    textAlign: 'left',
    fontSize: 12,
  },
  loginTextLupaPassword: {
    textAlign: 'right',
    fontSize: 12,
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
  headerLogin: {
    backgroundColor: Colors.colorTukangGrey,
    paddingTop: 0,
    paddingBottom: 10,
  },
  btnEditProfile: {
    backgroundColor: Colors.colorTukangWhite,
  },
  tukangInfo: {
    marginTop: 10,
    marginBottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  skillList: {
    flex: 1,
    marginTop: 0,
    paddingTop: 0,
    marginLeft: 0,
  },
  noMarginLeft: {
    marginLeft: 0,
  },
});

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
    color: Colors.colorTukangDivider,
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
    color: Colors.colorTukangWhite,
  },
  statusCompleted: {
    fontSize: 12,
    color: Colors.colorTukangDivider,
  },
  skillList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
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
  skillIcon: {
    fontSize: 21,
    color: Colors.colorTukangWhite,
    backgroundColor: Colors.colorTukangOrange,
    width: 37,
    height: 37,
    borderRadius: 18,
    paddingLeft: 10,
    marginRight: 10,
    paddingTop: (Platform.OS === 'android') ? 8 : 5,
  },
  // dataArrow: {
  //   color: Colors.colorTukangDivider,
  // },
  // btnFb: {
  //   backgroundColor: Colors.colorFb,
  // },
  // btnEmail: {
  //   backgroundColor: Colors.colorTukangOrange,
  // },
  // btnGoogle: {
  //   backgroundColor: Colors.colorGoogle,
  // },
  noBorder: {
    borderBottomWidth: 0,
  },
  loginTextOr: {
    textAlign: 'center',
    fontSize: 12,
  },
  textReview: {
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 0,
    backgroundColor: Colors.colorTukangWhite,
    borderRadius: 5,
    height: 100,
    borderWidth: 1,
    borderColor: Colors.colorTukangDivider,
    textAlignVertical: 'top',
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
    borderColor: Colors.colorTukangDivider,
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
});

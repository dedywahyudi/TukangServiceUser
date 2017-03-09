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
  textInput: {
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 0,
    backgroundColor: Colors.colorTukangWhite,
    borderRadius: 5,
    borderColor: Colors.colorTukangDivider,
    borderWidth: 1,
  },
  singleline: {
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 0,
    backgroundColor: Colors.colorTukangWhite,
    borderRadius: 5,
    borderColor: Colors.colorTukangDivider,
    borderWidth: 1,
    // height: 100,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'left',
    textAlignVertical: 'top',
  },
  multiline: {
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 0,
    backgroundColor: Colors.colorTukangWhite,
    borderRadius: 5,
    borderColor: Colors.colorTukangDivider,
    borderWidth: 1,
    height: 100,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'left',
    textAlignVertical: 'top',
  },
  btnDark: {
    backgroundColor: Colors.colorTukangYellow,
    elevation: 0,
    height: 50,
  },
  noLeftMargin: {
    marginLeft: 0,
    paddingLeft: 10,
    paddingRight: 10,
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
  noBorder: {
    borderBottomWidth: 0,
  },
  textBlack: {
    color: Colors.colorTukangBlack,
  },
  textWhite: {
    color: Colors.colorTukangWhite,
    fontWeight: 'bold',
  },
});

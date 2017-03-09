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
    ...StyleSheet.absoluteFillObject,
    // flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'space-between',
    backgroundColor: Colors.colorTukangBlack,
  },
  buttonContainer: {
    ...StyleSheet.absoluteFillObject,
    // flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 50,
    // marginVertical: 20,
    // backgroundColor: 'transparent',
  },
  buttonPlacement: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
  },
  btnDark: {
    zIndex: 2,
    backgroundColor: Colors.colorTukangYellow,
    elevation: 0,
    height: 50,
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
  },
  textBlack: {
    color: Colors.colorTukangBlack,
  },
  messageSpot: {
    zIndex: 2,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    backgroundColor: Colors.colorTukangWhite,
    padding: 10,
  },
  messageText: {
    flex: 1,
    padding: 10,
    fontSize: 18,
    color: Colors.colorTukangGrey,
  },
  logoSpot: {
    zIndex: 2,
    alignSelf: 'center',
    flexDirection: 'column',
  },
  logoPlacement: {
    // zIndex: 2,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 160,
    height: 160,
    backgroundColor: Colors.colorTukangBlack,
    borderRadius: 80,
    // flexDirection: 'row',
    borderWidth: 4,
    borderColor: Colors.colorTukangYellow,
  },
  logo: {
    width: 84,
    height: 114,
  },
});

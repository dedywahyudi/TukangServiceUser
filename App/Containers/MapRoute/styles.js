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
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  copyListItem: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    marginHorizontal: 20,
    backgroundColor: Colors.colorTukangWhite,
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
  },
  copyListItemTop: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    marginHorizontal: 20,
    backgroundColor: Colors.colorTukangWhite,
    // marginBottom: 1,
    borderBottomWidth: 1,
    borderColor: Colors.colorTukangGrey,
    borderRadius: 4,
  },
  inputContainer: {
    marginTop: 70,
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    padding: 0,
    // alignItems: 'center',
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // flex: 1,
  },
  whiteInput: {
    backgroundColor: Colors.colorTukangWhite,
    elevation: 0,
    height: 40,
    flex: 1,
    borderWidth: 0,
    borderRadius: 4,
  },
  bottomInput: {
    backgroundColor: Colors.colorTukangWhite,
    elevation: 0,
    height: 40,
    flex: 1,
    borderWidth: 0,
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
  },
  noteInput: {
    fontSize: 13,
    color: Colors.colorTukangGrey,
  },
  iconColor: {
    width: 30,
    marginLeft: 10,
    color: Colors.colorTukangBlack,
  },
  addressLabel: {
    color: Colors.colorTukangBlack,
  },
  bubble: {
    backgroundColor: Colors.colorTukangRed,
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    // marginBottom: 20,
    // backgroundColor: 'red',
  },
  btnDark: {
    backgroundColor: Colors.colorTukangYellow,
    elevation: 0,
    height: 50,
    flex: 1,
    marginHorizontal: 20,
  },
  textBlack: {
    color: Colors.colorTukangBlack,
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
  thumbAlign: {
    alignSelf: 'center',
  },
});

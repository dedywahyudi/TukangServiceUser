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
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
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
  buttonContainer: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    // marginBottom: 20,
    padding: 20,
    backgroundColor: Colors.colorTukangDivider,
  },
  listStyle: {
    borderBottomWidth: 0,
    padding: 0,
    margin: 0,
  },
  listItemStyle: {
    borderBottomWidth: 0,
    padding: 0,
    margin: 0,
    height: 50,
    flex: 1,
    marginLeft: 5,
  },
  iconColor: {
    width: 30,
    marginLeft: 10,
    color: Colors.colorTukangBlack,
  },
  addressLabel: {
    color: Colors.colorTukangBlack,
  },
  whiteInput: {
    backgroundColor: Colors.colorTukangWhite,
    elevation: 0,
    height: 40,
    flex: 1,
    borderWidth: 0,
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
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
  btnDark: {
    backgroundColor: Colors.colorTukangYellow,
    elevation: 0,
    height: 50,
    flex: 1,
    // marginHorizontal: 20,
    // marginVertical: 20,
  },
  textBlack: {
    color: Colors.colorTukangBlack,
  },
});

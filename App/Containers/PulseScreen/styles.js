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
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: Colors.colorTukangBlack,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: 'transparent',
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
});

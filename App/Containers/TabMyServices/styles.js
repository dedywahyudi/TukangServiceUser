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
  mainColumn: {
    flex: 1,
    flexDirection: 'column',
  },
  sidebarIcon: {
    flex: 0,
    fontSize: 18,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: Colors.colorTukangYellow,
    color: Colors.colorTukangYellow,
    width: 37,
    height: 37,
    lineHeight: 28,
    borderRadius: 18,
  },
  dataGrid: {
    flex: 0,
    paddingLeft: 10,
  },
  rowTitle: {
    fontSize: 15,
    lineHeight: 20,
  },
  rowNotes: {
    fontSize: 12,
    lineHeight: 18,
    color: Colors.colorTukangDivider,
  },
  statusYellow: {
    fontSize: 12,
    lineHeight: 18,
    color: Colors.colorTukangYellow,
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
  statusCompleted: {
    fontSize: 12,
    lineHeight: 18,
    color: Colors.colorTukangGreyLight,
  },
  dataArrow: {
    flex: 0,
    color: Colors.colorTukangDivider,
    fontSize: 32,
    width: 30,
    height: 30,
  },
  noLeftMargin: {
    marginLeft: 0,
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1,
  },
});

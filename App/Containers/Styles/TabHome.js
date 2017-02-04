// @flow

import { StyleSheet, Platform } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  groupContainer: {
    ...ApplicationStyles.groupContainer
  },
  sectionHeaderContainer: {
    ...ApplicationStyles.darkLabelContainer
  },
  sectionHeader: {
    ...ApplicationStyles.darkLabel
  },
  mainColumn: {
    flex: 1,
    flexDirection: 'column',
  },
  mainRow: {
    // flex: 0.25,
    // paddingTop: 10,
    paddingBottom: Metrics.baseMargin,
  },
  innerColumn: {
    flex: 1,
    flexDirection: 'row',
  },
  innerRow: {
    flexDirection: 'row',
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Metrics.baseMargin,
    marginBottom: Metrics.baseMargin,
  },
  itemColumn: {
    flex: 1,
  },
  itemRow: {
    marginTop: (Platform.OS === 'ios') ? 4 : 0,
  },
  buttonAlign: {
    alignSelf: 'center',
    backgroundColor: Colors.colorTukangYellow,
    width: 60,
    height: 60,
    shadowRadius: 0,
    elevation: 0,
    marginBottom: 5,
    borderRadius: 30,
  },
  textAlign: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 12,
    color: Colors.colorTukangWhite,
  },
  iconAlign: {
    alignSelf: 'center',
    color: Colors.colorTukangBlack,
    fontSize: 30,
    lineHeight: 46,
  },
  alignButtonCenter: {
    alignItems: 'center',
  },
  iconMore: {
    alignSelf: 'center',
    color: Colors.colorTukangBlack,
  },
})

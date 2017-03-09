// @flow

import {StyleSheet} from 'react-native'
import { Metrics, Colors } from '../../Themes/'

const navButton = {
  backgroundColor: Colors.transparent,
  justifyContent: 'flex-start'
}

export default StyleSheet.create({
  navButtonLeft: {
    padding: 0,
    marginLeft: 5,
    height: 25,
    lineHeight: 25,
    fontSize: 28,
  },
  backButton: {
    padding: 0,
    marginLeft: 0,
    height: 25,
    lineHeight: 25,
    fontSize: 28,
  },
  searchButton: {
    // marginTop: Metrics.section,
    marginRight: Metrics.baseMargin,
    alignItems: 'center'
  }
})

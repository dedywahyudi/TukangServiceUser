import { Colors, Metrics, Fonts } from '../../Themes/';

export default {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: Metrics.navBarHeight,
    // paddingTop: Metrics.smallMargin,
    // paddingHorizontal: 5,
    backgroundColor: Colors.background,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: Colors.snow,
    // marginTop: Metrics.doubleBaseMargin,
    backgroundColor: Colors.transparent,
    fontWeight: 'bold',
    fontSize: Fonts.size.input,
  },
  logo: {
    alignSelf: 'center',
    // marginTop: Metrics.baseMargin,
    height: 35,
    width: 103,
  },
  rightButtons: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'column',
    marginTop: 0,
  },
  leftButtons: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 0,
    marginLeft: 10,
    marginTop: 0,
    height: 54,
    // lineHeight: 25,
    // fontSize: 28,
  },
};

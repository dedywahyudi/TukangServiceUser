import React, { PropTypes } from 'react';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';
import NavItems from './NavItems';
import styles from './Styles/NavBarWithLogoStyle';
// import SearchBar from '../Components/SearchBar'
import { Images } from '../Themes';
import SearchActions from '../Redux/SearchRedux';

class NavBarWithLogo extends React.Component {

  renderMiddle() {
    return (
      <Image resizeMode='cover' style={styles.logo} source={Images.logoTukangHeader} />
    );
  }

  renderRightButtons () {
    return (
      <View style={styles.rightButtons}>
      </View>
    );
  }

  renderLeftButtons () {
    return (
      <View style={styles.leftButtons}>
        {NavItems.hamburgerButton()}
      </View>
    );
  }

  render () {
    return (
      <View style={styles.container}>
        {this.renderLeftButtons()}
        {this.renderMiddle()}
        {this.renderRightButtons()}
      </View>
    );
  }
}

NavBarWithLogo.propTypes = {
  navigationState: PropTypes.object,
  navigationBarStyle: View.propTypes.style
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.search.searchTerm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    performSearch: (searchTerm) => dispatch(SearchActions.search(searchTerm)),
    cancelSearch: () => dispatch(SearchActions.cancelSearch())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarWithLogo)

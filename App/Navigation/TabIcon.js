import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './Styles/TabIcon'
import { Metrics, Colors } from '../Themes/'

class TabIcon extends Component {
  render() {
    const containerStyles = {
      backgroundColor: this.props.selected ? Colors.colorTukangBlack  : Colors.colorTukangTabInactive,
    };

    const textStyles = {
      color: this.props.selected ?  Colors.colorTukangYellow : Colors.colorTukangWhite,
    };

    const iconColor = this.props.selected ? Colors.colorTukangYellow : Colors.colorTukangWhite;

    return (
      <View style={[styles.container, containerStyles]}>
        <Icon name={this.props.iconName} style={styles.icon} backgroundColor="transparent" color={iconColor} />
        <Text style={[styles.text, textStyles]}>{this.props.title}</Text>
      </View>
    );
  }
}

TabIcon.propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string,
  iconName: PropTypes.string,
};


export default TabIcon;

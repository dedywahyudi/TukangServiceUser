import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Tabs } from 'native-base';
import HomeSwiper from './HomeSwiper';
import styles from './Styles/TabMyServices'
import Icon from 'react-native-vector-icons/MaterialIcons'

class TabMyServices extends Component { // eslint-disable-line

  render() { // eslint-disable-line
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>

          <p>My Services</p>

        </ScrollView>
      </View>
    );
  }
}

export default TabMyServices;

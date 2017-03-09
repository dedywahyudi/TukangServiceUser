import React, { Component } from 'react';
import { Image } from 'react-native';
import { View, Button, Text } from 'native-base';
import Pulse from 'react-native-pulse';
import { Actions } from 'react-native-router-flux';
// import myTheme from '../themes/base-theme';
import styles from './styles';
import { Colors, Images } from '../../Themes/';

class PulseScreen extends Component {

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.buttonContainer}>
          <View style={styles.messageSpot}>
            <Text style={styles.messageText}>Mencari Tukang Service Terdekat</Text>
          </View>

          <View style={styles.logoSpot}>
            <View style={styles.logoPlacement}>
              <Image source={Images.logoTukang} style={styles.logo} />
            </View>
          </View>

          <View style={styles.buttonPlacement}>
            <Button block style={styles.btnDark} onPress={Actions.mapRoute}>
              <Text style={styles.textBlack}>MAP ROUTE</Text>
            </Button>
          </View>
        </View>
        
        {/* <Pulse
          color={Colors.colorTukangYellow}
          numPulses={3}
          diameter={800}
          top={0}
          speed={3}
          duration={300}
          style={styles.pulsePlacement}
        /> */}
      </View>
    );
  }
}

export default PulseScreen;

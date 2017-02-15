import React, { Component } from 'react';
import { Container, View, Button, Text } from 'native-base';
import Pulse from 'react-native-pulse';
import { Actions } from 'react-native-router-flux';
import myTheme from '../themes/base-theme';
import styles from './styles';
import { Colors } from '../../Themes/';

class PulseScreen extends Component {

  render() {
    return (
      <Container theme={myTheme}>
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            {/* <TouchableOpacity
              onPress={() => this.setState({ markers: [] })}
              style={styles.bubble}
              >
              <Text>CARI TUKANG SERVICE</Text>
            </TouchableOpacity> */}
            <Button block style={styles.btnDark} onPress={Actions.mapRoute}>
              <Text style={styles.textBlack}>MAP ROUTE</Text>
            </Button>
          </View>
          <Pulse color={Colors.colorTukangYellow} numPulses={3} diameter={800} top={0} speed={10} duration={500} />
        </View>
      </Container>
    );
  }
}

export default PulseScreen;

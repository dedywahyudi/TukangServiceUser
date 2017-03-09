import React from 'react';
import {
  View,
  Dimensions,
} from 'react-native';
import { InputGroup, Input, Icon, Text, Button, ListItem } from 'native-base';
// import Icon from 'react-native-vector-icons/MaterialIcons';

import MapView from 'react-native-maps';
import { Actions } from 'react-native-router-flux';
import styles from './styles';
// import myTheme from '../themes/base-theme';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

class DefaultMarkers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: [],
    };
  }

  onMapPress(e) {
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate,
          key: id++,
          color: randomColor(),
        },
      ],
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          // provider={this.props.provider}
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          // onPress={(e) => this.onMapPress(e)}
        >
          {/* {this.state.markers.map(marker => (
            <MapView.Marker
              key={marker.key}
              coordinate={marker.coordinate}
              pinColor={marker.color}
            />
          ))} */}
        </MapView>

        <View style={styles.inputContainer}>
          <View style={styles.copyListItemTop}>
            <InputGroup style={styles.whiteInput}>
              <Icon name="md-pin" style={styles.iconColor} />
              <Input placeholder="Full Address Here:" />
            </InputGroup>
          </View>
          <View style={styles.copyListItem}>
            <InputGroup style={styles.bottomInput}>
              <Icon name="md-create" style={styles.iconColor} />
              <Input placeholder="Catatan:" style={styles.noteInput} />
            </InputGroup>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Button block style={styles.btnDark} onPress={Actions.pulseScreen}>
            <Text style={styles.textBlack}>PILIH LOKASI ANDA</Text>
          </Button>
        </View>
      </View>
    );
  }
}

DefaultMarkers.propTypes = {
  provider: MapView.ProviderPropType,
};

module.exports = DefaultMarkers;

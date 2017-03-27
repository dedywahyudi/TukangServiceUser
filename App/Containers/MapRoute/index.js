import React from 'react';
import {
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { InputGroup, Input, Text, Button, ListItem, Thumbnail } from 'native-base';

import Icon from 'react-native-vector-icons/MaterialIcons';

import MapView from 'react-native-maps';
import { Actions } from 'react-native-router-flux';
import { Col, Row, Grid } from 'react-native-easy-grid';
import myTheme from '../themes/base-theme';
import styles from './styles';

const sankhadeep = require('../../../img/contacts/sankhadeep.png');

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

class MapRoute extends React.Component {
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
      <View style={styles.container} theme={myTheme}>
        <MapView
          provider={this.props.provider}
          style={styles.map}
          initialRegion={this.state.region}
          onPress={(e) => this.onMapPress(e)}
        >
          {this.state.markers.map(marker => (
            <MapView.Marker
              key={marker.key}
              coordinate={marker.coordinate}
              pinColor={marker.color}
            />
          ))}
        </MapView>

        <View style={styles.inputContainer}>
          <View style={styles.copyListItemTop}>
            <InputGroup style={styles.whiteInput}>
              {/* <Icon name="md-pin" style={styles.iconColor} /> */}
              <Input placeholder="Full Address Here:" />
            </InputGroup>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          {/* <Button block style={styles.btnDark} onPress={Actions.onLocation}>
            <Text style={styles.textBlack}>TUKANG ON-LOCATION</Text>
          </Button> */}
          <Grid style={styles.tukangInfo}>
            <Col>
              <Button rounded primary style={styles.buttonAlign}>
                <Icon name="call" style={styles.iconAlign} />
              </Button>
            </Col>
            <Col>
              <TouchableOpacity onPress={Actions.profileDetail}>
                <Thumbnail rounded size={100} source={sankhadeep} style={styles.thumbAlign} onPress={Actions.profiledetail} />
              </TouchableOpacity>
            </Col>
            <Col>
              <Button rounded primary style={styles.buttonAlign}>
                <Icon name="textsms" style={styles.iconAlign} />
              </Button>
            </Col>
          </Grid>
          {/* <Button block style={styles.btnDark} onPress={Actions.onLocation}>
            <Text style={styles.textBlack}>TUKANG ON-LOCATION</Text>
          </Button> */}
        </View>
      </View>
    );
  }
}

MapRoute.propTypes = {
  provider: MapView.ProviderPropType,
};

module.exports = MapRoute;

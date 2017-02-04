import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
// import { Container, Text, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import HomeSwiper from './HomeSwiper';
import styles from './Styles/TabHome'
// import CircleButton from '../Components/CircleButton'
import Icon from 'react-native-vector-icons/FontAwesome'
// import theme from '../themes/base-theme';

class TabHome extends Component { // eslint-disable-line

  render() { // eslint-disable-line
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>

          <View style={styles.mainColumn}>
            <View style={styles.mainRow}>
              <HomeSwiper />
            </View>
            <View style={styles.mainRow}>
              <View style={styles.innerColumn}>
                <View style={styles.innerRow}>

                  <View style={styles.itemColumn}>
                    <View style={styles.itemRow}>
                      <TouchableOpacity rounded style={styles.buttonAlign} onPress={Actions.inputHardware}>
                        <Icon style={styles.iconAlign} name="desktop" />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.itemRow}>
                      <Text style={styles.textAlign}>Desktop</Text>
                    </View>
                  </View>

                </View>
                <View style={styles.innerRow}>

                  <View style={styles.itemColumn}>
                    <View style={styles.itemRow}>
                      <TouchableOpacity rounded style={styles.buttonAlign}>
                        <Icon style={styles.iconAlign} name="laptop" />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.itemRow}>
                      <Text style={styles.textAlign}>Laptop</Text>
                    </View>
                  </View>

                </View>
                <View style={styles.innerRow}>

                  <View style={styles.itemColumn}>
                    <View style={styles.itemRow}>
                      <TouchableOpacity rounded style={styles.buttonAlign}>
                        <Icon style={styles.iconAlign} name="print" />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.itemRow}>
                      <Text style={styles.textAlign}>Printer</Text>
                    </View>
                  </View>

                </View>
              </View>
            </View>
            <View style={styles.mainRow}>
              <View style={styles.innerColumn}>
                <View style={styles.innerRow}>

                  <View style={styles.itemColumn}>
                    <View style={styles.itemRow}>
                      <TouchableOpacity rounded style={styles.buttonAlign}>
                        <Icon style={styles.iconAlign} name="windows" />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.itemRow}>
                      <Text style={styles.textAlign}>Software</Text>
                    </View>
                  </View>

                </View>
                <View style={styles.innerRow}>

                  <View style={styles.itemColumn}>
                    <View style={styles.itemRow}>
                      <TouchableOpacity rounded style={styles.buttonAlign}>
                        <Icon style={styles.iconAlign} name="microchip" />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.itemRow}>
                      <Text style={styles.textAlign}>Hardware</Text>
                    </View>
                  </View>

                </View>
                <View style={styles.innerRow}>

                  <View style={styles.itemColumn}>
                    <View style={styles.itemRow}>
                      <TouchableOpacity rounded style={styles.buttonAlign}>
                        <Icon style={styles.iconAlign} name="wifi" />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.itemRow}>
                      <Text style={styles.textAlign}>Jaringan</Text>
                    </View>
                  </View>

                </View>
              </View>
            </View>
            <View style={styles.mainRow}>
              <View style={styles.innerColumn}>
                <View style={styles.innerRow}>

                  <View style={styles.itemColumn}>
                    <View style={styles.itemRow}>
                      <TouchableOpacity rounded style={styles.buttonAlign}>
                        <Icon style={styles.iconAlign} name="refresh" />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.itemRow}>
                      <Text style={styles.textAlign}>Recovery</Text>
                    </View>
                  </View>

                </View>
                <View style={styles.innerRow}>

                  <View style={styles.itemColumn}>
                    <View style={styles.itemRow}>
                      <TouchableOpacity rounded style={styles.buttonAlign}>
                        <Icon style={styles.iconAlign} name="bug" />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.itemRow}>
                      <Text style={styles.textAlign}>Virus</Text>
                    </View>
                  </View>

                </View>
                <View style={styles.innerRow}>

                  <View style={styles.itemColumn}>
                    <View style={styles.itemRow}>

                      <TouchableOpacity rounded style={styles.buttonAlign}>
                        <Icon style={styles.iconAlign} large name="ellipsis-h" />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.itemRow}>
                      <Text style={styles.textAlign}>Lainnya</Text>
                    </View>
                  </View>

                </View>
              </View>
            </View>
          </View>

        </ScrollView>
      </View>
    );
  }
}

export default TabHome;

import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons'
import HomeSwiper from './HomeSwiper';
import styles from './styles';
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
                        <Icon style={styles.iconAlign} name="desktop-mac" />
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
                        <Icon style={styles.iconAlign} name="archive" />
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
                        <Icon style={styles.iconAlign} name="memory" />
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
                        <Icon style={styles.iconAlign} name="usb" />
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
                        <Icon style={styles.iconAlign} name="sync" />
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
                        <Icon style={styles.iconAlign} name="bug-report" />
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
                        <Icon style={styles.iconAlign} large name="more-horiz" />
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

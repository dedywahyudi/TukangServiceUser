
import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Container, Tabs } from 'native-base';
import TabOne from './TabOne';
import TabTwo from './TabTwo';
import styles from './styles';
import theme from '../themes/base-theme';

class TabMyServices extends Component { // eslint-disable-line

  render() { // eslint-disable-line
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <Container theme={theme} style={styles.container}>
            <View style={styles.mainColumn}>
              <Tabs locked>
                <TabOne tabLabel="Active Services" />
                <TabTwo tabLabel="Service History" />
              </Tabs>
            </View>
          </Container>
        </ScrollView>
      </View>
    );
  }
}

export default TabMyServices;

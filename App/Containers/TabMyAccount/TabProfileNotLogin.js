
import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import { Container, Button, Content, Text, List, ListItem, Badge } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import theme from '../themes/base-theme';

export default class TabProfileNotLogin extends Component { // eslint-disable-line
  render (){
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <Container theme={theme} style={styles.container}>
            <Content>
              <List style={styles.headerLogin}>
                <ListItem style={styles.noBorder}>
                  <Text style={styles.rowUser}>Welcome, Dedy Wahyudi</Text>
                </ListItem>
                <ListItem style={styles.noBorder}>
                  <Text style={styles.rowUserLogin}>Logged in with Facebook</Text>
                </ListItem>
                <ListItem style={styles.noBorder}>
                  <Button block style={styles.btnEditProfile} onPress={Actions.editProfile}>
                    <Text style={{ color: '#474745' }} >EDIT PROFILE</Text>
                  </Button>
                </ListItem>
              </List>

              <List>
                <List>
                  <ListItem style={styles.noLeftMargin} iconLeft iconRight>
                    <Icon name="ios-cash" style={{ color: '#ffffff', width: 30 }} />
                    <Text>Payment</Text>
                    <Icon name="chevron-right" style={styles.dataArrow} />
                  </ListItem>
                  <ListItem style={styles.noLeftMargin} iconLeft iconRight onPress={Actions.newsletter}>
                    <Icon name="ios-megaphone" style={{ color: '#ffffff', width: 30 }} />
                    <Text>Newsletter & Promo Info</Text>
                    <Icon name="chevron-right" style={styles.dataArrow} />
                  </ListItem>
                  <ListItem style={styles.noLeftMargin} iconLeft iconRight onPress={Actions.pushNotification}>
                    <Icon name="ios-switch" style={{ color: '#ffffff', width: 30 }} />
                    <Text>Application Settings</Text>
                    <Icon name="chevron-right" style={styles.dataArrow} />
                  </ListItem>
                  <ListItem style={styles.noLeftMargin} iconLeft iconRight>
                    <Icon name="ios-power" style={{ color: '#ffffff', width: 30 }} />
                    <Text>Logout</Text>
                    <Icon name="chevron-right" style={styles.dataArrow} />
                  </ListItem>
                </List>
              </List>
            </Content>
          </Container>
        </ScrollView>
      </View>
    );
  }
}

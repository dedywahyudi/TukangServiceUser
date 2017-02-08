
import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Container, Button, Content, Text, List, ListItem, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';

import styles from './styles';
import theme from '../themes/base-theme';
import { Colors } from '../../Themes/';

export default class TabProfileNotLogin extends Component { // eslint-disable-line
  render() {
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
                    <Text style={{ color: Colors.colorTukangGrey }} >EDIT PROFILE</Text>
                  </Button>
                </ListItem>
              </List>

              <List>
                <ListItem style={styles.noLeftMargin} iconLeft iconRight>
                  <Icon name="payment" style={{ color: Colors.colorTukangWhite, width: 30 }} />
                  <Text>Payment</Text>
                  <Icon name="chevron-right" style={styles.dataArrow} />
                </ListItem>
                <ListItem style={styles.noLeftMargin} iconLeft iconRight onPress={Actions.newsletter}>
                  <Icon name="style" style={{ color: Colors.colorTukangWhite, width: 30 }} />
                  <Text>Newsletter & Promo Info</Text>
                  <Icon name="chevron-right" style={styles.dataArrow} />
                </ListItem>
                <ListItem style={styles.noLeftMargin} iconLeft iconRight onPress={Actions.pushNotification}>
                  <Icon name="settings" style={{ color: Colors.colorTukangWhite, width: 30 }} />
                  <Text>Application Settings</Text>
                  <Icon name="chevron-right" style={styles.dataArrow} />
                </ListItem>
                <ListItem style={styles.noLeftMargin} iconLeft iconRight>
                  <Icon name="power-settings-new" style={{ color: Colors.colorTukangWhite, width: 30 }} />
                  <Text>Logout</Text>
                  <Icon name="chevron-right" style={styles.dataArrow} />
                </ListItem>
              </List>
            </Content>
          </Container>
        </ScrollView>
      </View>
    );
  }
}

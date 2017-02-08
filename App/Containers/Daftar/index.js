
import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import { Container, Button, Content, Text, List, ListItem, Input, InputGroup } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import theme from '../themes/base-theme';

export default class Daftar extends Component { // eslint-disable-line
  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <Container theme={theme} style={styles.container}>
            <Content>
              <List>
                <ListItem style={[styles.noBorder, styles.noLeftMargin]}>
                  <Button block style={styles.btnFb}>
                    <Icon name="logo-facebook" style={styles.logoFb} />
                    <Text style={styles.textWhite}>  Daftar melalui Facebook</Text>
                  </Button>
                </ListItem>
                <ListItem style={[styles.noBorder, styles.noLeftMargin]}>
                  <Button block style={styles.btnGoogle}>
                    <Icon name="logo-googleplus" style={styles.logoFb}  />
                    <Text>  Daftar melalui Google+</Text>
                  </Button>
                </ListItem>
                <ListItem style={[styles.loginListOr, styles.noLeftMargin]}>
                  <Text style={styles.loginTextOr}>Atau Daftar melalui Email dan Password:</Text>
                </ListItem>
                <ListItem style={[styles.noBorder, styles.noLeftMargin]}>
                  <InputGroup style={styles.loginInput}>
                    <Input placeholder="Email" />
                  </InputGroup>
                </ListItem>
                <ListItem style={[styles.noBorder, styles.noLeftMargin]}>
                  <InputGroup style={styles.loginInput}>
                    <Input placeholder="Password" secureTextEntry />
                  </InputGroup>
                </ListItem>
                <ListItem style={[styles.noBorder, styles.noLeftMargin]}>
                  <Button block style={styles.btnEmail} onPress={Actions.tabProfileNotLogin}>
                    <Text style={styles.textBlack} >Daftar</Text>
                  </Button>
                </ListItem>
              </List>
            </Content>
          </Container>
        </ScrollView>
      </View>
    );
  }
}

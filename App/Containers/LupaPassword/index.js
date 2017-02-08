
import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Container, Button, Content, Text, List, ListItem, Input, InputGroup } from 'native-base';
import { Actions } from 'react-native-router-flux';
// import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import theme from '../themes/base-theme';

export default class LupaPassword extends Component { // eslint-disable-line
  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <Container theme={theme} style={styles.container}>
            <Content>
              <List>
                <ListItem style={[styles.noBorder, styles.noLeftMargin]}>
                  <Text>Masukkan alamat email anda untuk melakukan perubahan password</Text>
                </ListItem>
                <ListItem style={[styles.noBorder, styles.noLeftMargin]}>
                  <InputGroup style={styles.loginInput}>
                    <Input placeholder="Email" />
                  </InputGroup>
                </ListItem>
                <ListItem style={[styles.noBorder, styles.noLeftMargin]}>
                  <Button block style={styles.btnEmail} onPress={Actions.tabProfileNotLogin}>
                    <Text style={styles.textBlack} >Kirim</Text>
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

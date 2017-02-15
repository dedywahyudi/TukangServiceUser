import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Container, Button, Content, Text, List, ListItem, Input, InputGroup } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '../themes/base-theme';
import styles from './styles';

export default class TabProfileLogin extends Component { // eslint-disable-line
  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <Container theme={theme} style={styles.container}>
            <Content>
              <List>
                <ListItem style={[styles.noBorder, styles.noLeftMargin]}>
                  <Button block style={styles.btnFb}>
                    <Icon name="facebook" style={styles.logoFb} />
                    <Text style={styles.textWhite}>  Masuk melalui Facebook</Text>
                  </Button>
                </ListItem>
                <ListItem style={[styles.noBorder, styles.noLeftMargin]}>
                  <Button block style={styles.btnGoogle}>
                    <Icon name="google" style={styles.logoFb} />
                    <Text style={styles.textWhite}>  Masuk melalui Google+</Text>
                  </Button>
                </ListItem>
                <ListItem style={[styles.loginListOr, styles.noLeftMargin]}>
                  <Text style={styles.textCenter}>Atau Masuk melalui Email dan Password:</Text>
                </ListItem>
                <ListItem style={[styles.noBorder, styles.noLeftMargin]}>
                  <InputGroup style={styles.loginInput}>
                    {/* <Icon name="md-person" style={{ color: Colors.colorTukangDivider }} /> */}
                    <Input placeholder="Email" />
                  </InputGroup>
                </ListItem>
                <ListItem style={[styles.noBorder, styles.noLeftMargin]}>
                  <InputGroup style={styles.loginInput}>
                    {/* <Icon name="md-lock" style={{ color: Colors.colorTukangDivider }} /> */}
                    <Input placeholder="Password" secureTextEntry />
                  </InputGroup>
                </ListItem>
                <ListItem style={[styles.noBorder, styles.noLeftMargin]}>
                  <Button block style={styles.btnEmail} onPress={Actions.tabProfileNotLogin}>
                    <Text style={styles.textBlack} >Login</Text>
                  </Button>
                </ListItem>
                <ListItem iconLeft iconRight style={[styles.noBorder, styles.noLeftMargin]}>
                  <Grid>
                    <Col>
                      <Button transparent onPress={Actions.daftar}>
                        <Text style={styles.loginTextDaftar}>Daftar Disini!</Text>
                      </Button>
                    </Col>
                    <Col>
                      <Button transparent style={styles.alignRight} onPress={Actions.lupaPassword}>
                        <Text style={styles.loginTextLupaPassword}>Lupa Password</Text>
                      </Button>
                    </Col>
                  </Grid>
                </ListItem>
              </List>
            </Content>
          </Container>
        </ScrollView>
      </View>
    );
  }
}

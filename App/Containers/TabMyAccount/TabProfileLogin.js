import React, { Component } from 'react';
import { Container, Button, Content, Icon, Text, List, ListItem, Input, InputGroup } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
import theme from '../themes/base-theme';
import styles from './styles';

export default class TabProfileLogin extends Component { // eslint-disable-line
  render (){
    return (
      <Container theme={theme} style={styles.container}>
        <Content>
          <List>
            <ListItem style={[styles.noBorder, styles.noLeftMargin]}>
              <Button block style={styles.btnFb}>
                <Icon name="logo-facebook" style={styles.textWhite} />
                <Text style={styles.textWhite}>Masuk melalui Facebook</Text>
              </Button>
            </ListItem>
            <ListItem style={[styles.noBorder, styles.noLeftMargin]}>
              <Button block style={styles.btnGoogle}>
                <Icon name="logo-googleplus" style={styles.textWhite} />
                <Text style={styles.textWhite}>Masuk melalui Google+</Text>
              </Button>
            </ListItem>
            <ListItem style={[styles.loginListOr, styles.noLeftMargin]}>
              <Text style={styles.textCenter}>Atau Masuk melalui Email dan Password:</Text>
            </ListItem>
            <ListItem style={[styles.noBorder, styles.noLeftMargin]}>
              <InputGroup style={styles.loginInput}>
                <Icon name="ios-person" style={{ color: '#ddd', marginLeft: 5 }} />
                <Input placeholder="Email" />
              </InputGroup>
            </ListItem>
            <ListItem style={[styles.noBorder, styles.noLeftMargin]}>
              <InputGroup style={styles.loginInput}>
                <Icon name="ios-unlock" style={{ color: '#ddd', marginLeft: 5 }} />
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
    );
  }
}

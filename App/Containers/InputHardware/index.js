import React, { Component } from 'react';
import { ScrollView, View, Text, TextInput } from 'react-native';
import { Container, Content, Button, List, ListItem, Input } from 'native-base';
// import { Col, Row, Grid } from 'react-native-easy-grid';
// import StarRating from 'react-native-star-rating';
import { Actions } from 'react-native-router-flux';

import myTheme from '../themes/base-theme';
import styles from './styles';

export default class InputHardware extends Component { // eslint-disable-line

  render() { // eslint-disable-line
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <Container theme={myTheme} style={styles.container}>
            <Content>
              <List>
                <ListItem itemDivider>
                  <Text style={styles.textWhite}>Merk/Type Hardware:</Text>
                </ListItem>
                <ListItem style={[styles.noBorder, styles.noLeftMargin]}>
                  <Input
                    placeholder="Masukkan Merk/Type Desktop Anda: " style={styles.singleline}
                  />
                </ListItem>
                <ListItem itemDivider>
                  <Text style={styles.textWhite}>Deskripsi Permasalahan:</Text>
                </ListItem>
                <ListItem style={[styles.noBorder, styles.noLeftMargin]}>
                  <TextInput
                    placeholder="Jelaskan secara detail apa yang bisa kami bantu…"
                    multiline={true}
                    numberOfLines={6}
                    style={styles.multiline}
                  />
                </ListItem>
                {/* <ListItem style={[styles.noBorder, styles.noLeftMargin]}>
                  <Button block style={styles.btnDark} onPress={Actions.lokasiTukang}>
                    <Text style={styles.textBlack}>PILIH LOKASI ANDA</Text>
                  </Button>
                </ListItem> */}
              </List>
            </Content>
          </Container>
        </ScrollView>
        <View style={styles.bottomPlacement}>
          <Button block style={styles.btnDark} onPress={Actions.lokasiTukang}>
            <Text style={styles.textBlack}>PILIH LOKASI ANDA</Text>
          </Button>
        </View>
      </View>
    );
  }
}

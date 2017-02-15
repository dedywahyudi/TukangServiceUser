
import React, { Component } from 'react';
import { Container, Title, Content, Button, Icon, List, ListItem, Text, Thumbnail } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import StarRating from 'react-native-star-rating';
import { Actions } from 'react-native-router-flux';

import myTheme from '../themes/base-theme';
import styles from './styles';

import { Colors } from '../../Themes/';

const sankhadeep = require('../../../img/contacts/sankhadeep.png');

class ProfileDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      starCount: 2.5,
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating,
    });
  }


  render() {
    return (
      <Container theme={myTheme} style={styles.container}>
        <Content>
          <List>
            <ListItem itemDivider>
              <Text>Data Detail:</Text>
            </ListItem>
            <ListItem style={[styles.noBorder, styles.noMarginLeft]}>
              <Grid style={styles.tukangInfo}>
                <Col>
                  <Button rounded primary style={styles.buttonAlign}>
                    <Icon name="call" style={styles.iconAlign} />
                  </Button>
                </Col>
                <Col>
                  <TouchableOpacity onPress={Actions.profileDetail}>
                    <Thumbnail rounded size={100} source={sankhadeep} style={styles.thumbAlign} onPress={Actions.profiledetail} />
                  </TouchableOpacity>
                </Col>
                <Col>
                  <Button rounded primary style={styles.buttonAlign}>
                    <Icon name="textsms" style={styles.iconAlign} />
                  </Button>
                </Col>
              </Grid>
            </ListItem>
            <ListItem style={[styles.noBorder]}>
              <Grid>
                <Row style={styles.rowDetail}>
                  <Text style={styles.textCenter}>Nama Tukang</Text>
                </Row>
                <Row>
                  <Text style={styles.textNotes}>Aktif Sejak: September 2016</Text>
                </Row>
              </Grid>
            </ListItem>
            <ListItem style={[styles.noBorder, styles.skillList]}>
              <Grid style={styles.tukangInfo}>
                <Row>
                  <Icon name="desktop-mac" style={styles.skillIcon} />
                  <Icon name="laptop" style={styles.skillIcon} />
                  <Icon name="print" style={styles.skillIcon} />
                  <Icon name="bug-report" style={styles.skillIcon} />
                </Row>
              </Grid>
            </ListItem>
            <ListItem style={[styles.noBorder, styles.skillList]}>
              <Grid style={styles.tukangInfo}>
                <Row>
                  <StarRating
                    disabled={true}
                    emptyStar={'md-star-outline'}
                    fullStar={'md-star'}
                    halfStar={'md-star-half'}
                    iconSet={'Ionicons'}
                    maxStars={5}
                    rating={this.state.starCount}
                    selectedStar={(rating) => this.onStarRatingPress(rating)}
                    starColor={Colors.colorTukangYellow}
                    starSize={40}
                  />
                </Row>
              </Grid>
            </ListItem>
            <ListItem itemDivider>
              <Text>Daftar Service Terakhir:</Text>
            </ListItem>
            <ListItem style={styles.noLeftMargin} iconLeft iconRight onPress={Actions.orderDetail}>
              <Icon name="desktop-mac" style={styles.sidebarIcon} />
              <Grid style={styles.dataGrid}>
                <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
                <Row><Text style={styles.statusGreen}>&#11044; In-progress</Text></Row>
              </Grid>
              <Icon name="keyboard-arrow-right" style={styles.dataArrow} />
            </ListItem>
            <ListItem style={styles.noLeftMargin} iconLeft iconRight>
              <Icon name="laptop" style={styles.sidebarIcon} />
              <Grid style={styles.dataGrid}>
                <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
                <Row><Text style={styles.statusRed}>&#11044; Telat dari Estimasi Selesai: 16 july 2016</Text></Row>
              </Grid>
              <Icon name="keyboard-arrow-right" style={styles.dataArrow} />
            </ListItem>
            <ListItem style={styles.noLeftMargin} iconLeft iconRight>
              <Icon name="bug-report" style={styles.sidebarIcon} />
              <Grid style={styles.dataGrid}>
                <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
                <Row><Text style={styles.statusYellow}>&#11044; 1 Hari dari Estimasi Selesai: 16 july 2016</Text></Row>
              </Grid>
              <Icon name="keyboard-arrow-right" style={styles.dataArrow} />
            </ListItem>
            <ListItem style={styles.noLeftMargin} iconLeft iconRight>
              <Icon name="archive" style={styles.sidebarIcon} />
              <Grid style={styles.dataGrid}>
                <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
                <Row><Text style={styles.statusYellow}>&#11044; In-progress</Text></Row>
              </Grid>
              <Icon name="keyboard-arrow-right" style={styles.dataArrow} />
            </ListItem>
            <ListItem style={styles.noLeftMargin} iconLeft iconRight>
              <Icon name="memory" style={styles.sidebarIcon} />
              <Grid style={styles.dataGrid}>
                <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
                <Row><Text style={styles.statusRed}>&#11044; In-progress</Text></Row>
              </Grid>
              <Icon name="keyboard-arrow-right" style={styles.dataArrow} />
            </ListItem>
            <ListItem style={styles.noLeftMargin} iconLeft iconRight>
              <Icon name="usb" style={styles.sidebarIcon} />
              <Grid style={styles.dataGrid}>
                <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
                <Row><Text style={styles.statusBlue}>&#11044; In-progress</Text></Row>
              </Grid>
              <Icon name="keyboard-arrow-right" style={styles.dataArrow} />
            </ListItem>
            <ListItem style={styles.noLeftMargin} iconLeft iconRight>
              <Icon name="history" style={styles.sidebarIcon} />
              <Grid style={styles.dataGrid}>
                <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
                <Row><Text style={styles.statusGreen}>&#11044; In-progress</Text></Row>
              </Grid>
              <Icon name="keyboard-arrow-right" style={styles.dataArrow} />
            </ListItem>
            <ListItem style={styles.noLeftMargin} iconLeft iconRight>
              <Icon name="print" style={styles.sidebarIcon} />
              <Grid style={styles.dataGrid}>
                <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
                <Row><Text style={styles.statusRed}>&#11044; In-progress</Text></Row>
              </Grid>
              <Icon name="keyboard-arrow-right" style={styles.dataArrow} />
            </ListItem>
            <ListItem style={styles.noLeftMargin} iconLeft iconRight>
              <Icon name="usb" style={styles.sidebarIcon} />
              <Grid style={styles.dataGrid}>
                <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
                <Row><Text style={styles.statusBlue}>&#11044; In-progress</Text></Row>
              </Grid>
              <Icon name="keyboard-arrow-right" style={styles.dataArrow} />
            </ListItem>
            <ListItem style={styles.noLeftMargin} iconLeft iconRight>
              <Icon name="history" style={styles.sidebarIcon} />
              <Grid style={styles.dataGrid}>
                <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
                <Row><Text style={styles.statusGreen}>&#11044; In-progress</Text></Row>
              </Grid>
              <Icon name="keyboard-arrow-right" style={styles.dataArrow} />
            </ListItem>
            <ListItem style={styles.noLeftMargin} iconLeft iconRight>
              <Icon name="print" style={styles.sidebarIcon} />
              <Grid style={styles.dataGrid}>
                <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
                <Row><Text style={styles.statusRed}>&#11044; In-progress</Text></Row>
              </Grid>
              <Icon name="keyboard-arrow-right" style={styles.dataArrow} />
            </ListItem>
            <ListItem style={styles.noLeftMargin} iconLeft iconRight>
              <Icon name="usb" style={styles.sidebarIcon} />
              <Grid style={styles.dataGrid}>
                <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
                <Row><Text style={styles.statusBlue}>&#11044; In-progress</Text></Row>
              </Grid>
              <Icon name="keyboard-arrow-right" style={styles.dataArrow} />
            </ListItem>
            <ListItem style={styles.noLeftMargin} iconLeft iconRight>
              <Icon name="history" style={styles.sidebarIcon} />
              <Grid style={styles.dataGrid}>
                <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
                <Row><Text style={styles.statusGreen}>&#11044; In-progress</Text></Row>
              </Grid>
              <Icon name="keyboard-arrow-right" style={styles.dataArrow} />
            </ListItem>
            <ListItem style={styles.noLeftMargin} iconLeft iconRight>
              <Icon name="print" style={styles.sidebarIcon} />
              <Grid style={styles.dataGrid}>
                <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
                <Row><Text style={styles.statusRed}>&#11044; In-progress</Text></Row>
              </Grid>
              <Icon name="keyboard-arrow-right" style={styles.dataArrow} />
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default ProfileDetail;

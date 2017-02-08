import React, { PropTypes } from 'react';
import { Container, Content, List, Icon, ListItem, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
import styles from './styles';
import EmptyService from './EmptyService';

const contextTypes = {
  drawer: React.PropTypes.object,
};

const TabOne = (props, context) => {

  return (
    <Container>
      <Content>
        <List>
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
};

TabOne.contextTypes = contextTypes;
TabOne.PropTypes = PropTypes;

export default TabOne;

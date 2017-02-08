import React, { Component } from 'react';

import { Container, Content, List, Icon, ListItem, Text, Thumbnail, View, Badge } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import styles from './styles';

class TabTwo extends Component { // eslint-disable-line

  render() { // eslint-disable-line
    return (
      <Container>
        <Content>
          <List>
            {/* <ListItem style={styles.noLeftMargin} itemDivider>
              <Text>2016</Text>
            </ListItem> */}
            <ListItem style={styles.noLeftMargin} iconLeft iconRight>
              <Icon name="desktop-mac" style={styles.sidebarIcon} />
              <Grid style={styles.dataGrid}>
                <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
                <Row><Text style={styles.statusCompleted}>&#11044; Completed: 20 November 2016</Text></Row>
              </Grid>
              <Icon name="chevron-right" style={styles.dataArrow} />
            </ListItem>
            <ListItem style={styles.noLeftMargin} iconLeft iconRight>
              <Icon name="laptop" style={styles.sidebarIcon} />
              <Grid style={styles.dataGrid}>
                <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
                <Row><Text style={styles.statusCompleted}>&#11044; Completed: 20 November 2016</Text></Row>
              </Grid>
              <Icon name="chevron-right" style={styles.dataArrow} />
            </ListItem>
            <ListItem style={styles.noLeftMargin} iconLeft iconRight>
              <Icon name="bug-report" style={styles.sidebarIcon} />
              <Grid style={styles.dataGrid}>
                <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
                <Row><Text style={styles.statusCompleted}>&#11044; Completed: 20 November 2016</Text></Row>
              </Grid>
              <Icon name="chevron-right" style={styles.dataArrow} />
            </ListItem>
            <ListItem style={styles.noLeftMargin} iconLeft iconRight>
              <Icon name="archive" style={styles.sidebarIcon} />
              <Grid style={styles.dataGrid}>
                <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
                <Row><Text style={styles.statusCompleted}>&#11044; Completed: 20 November 2016</Text></Row>
              </Grid>
              <Icon name="chevron-right" style={styles.dataArrow} />
            </ListItem>
            <ListItem style={styles.noLeftMargin} iconLeft iconRight>
              <Icon name="memory" style={styles.sidebarIcon} />
              <Grid style={styles.dataGrid}>
                <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
                <Row><Text style={styles.statusCompleted}>&#11044; Completed: 20 November 2016</Text></Row>
              </Grid>
              <Icon name="chevron-right" style={styles.dataArrow} />
            </ListItem>
            <ListItem style={styles.noLeftMargin} iconLeft iconRight>
              <Icon name="usb" style={styles.sidebarIcon} />
              <Grid style={styles.dataGrid}>
                <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
                <Row><Text style={styles.statusCompleted}>&#11044; Completed: 20 November 2016</Text></Row>
              </Grid>
              <Icon name="chevron-right" style={styles.dataArrow} />
            </ListItem>
            <ListItem style={styles.noLeftMargin} iconLeft iconRight>
              <Icon name="history" style={styles.sidebarIcon} />
              <Grid style={styles.dataGrid}>
                <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
                <Row><Text style={styles.statusCompleted}>&#11044; Completed: 20 November 2016</Text></Row>
              </Grid>
              <Icon name="chevron-right" style={styles.dataArrow} />
            </ListItem>
            <ListItem style={styles.noLeftMargin} iconLeft iconRight>
              <Icon name="print" style={styles.sidebarIcon} />
              <Grid style={styles.dataGrid}>
                <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
                <Row><Text style={styles.statusCompleted}>&#11044; Completed: 20 November 2016</Text></Row>
              </Grid>
              <Icon name="chevron-right" style={styles.dataArrow} />
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default TabTwo;

// @flow

import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyle'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'
import CustomNavBar from '../Navigation/CustomNavBar'

// screens identified by the router
import PresentationScreen from '../Containers/PresentationScreen'
import AllComponentsScreen from '../Containers/AllComponentsScreen'
import UsageExamplesScreen from '../Containers/UsageExamplesScreen'
import LoginScreen from '../Containers/LoginScreen'
import ListviewExample from '../Containers/ListviewExample'
import ListviewGridExample from '../Containers/ListviewGridExample'
import ListviewSectionsExample from '../Containers/ListviewSectionsExample'
import ListviewSearchingExample from '../Containers/ListviewSearchingExample'
import MapviewExample from '../Containers/MapviewExample'
import APITestingScreen from '../Containers/APITestingScreen'
import ThemeScreen from '../Containers/ThemeScreen'
import DeviceInfoScreen from '../Containers/DeviceInfoScreen'

import TabHome from '../Containers/TabHome/'
import TabMyServices from '../Containers/TabMyServices/'
import TabProfileLogin from '../Containers/TabMyAccount/TabProfileLogin'

import TabIcon from '../Navigation/TabIcon'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {

  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene key='presentationScreen' component={PresentationScreen} title='Ignite' renderLeftButton={NavItems.hamburgerButton} />
            <Scene key='componentExamples' component={AllComponentsScreen} title='Components' />
            <Scene key='usageExamples' component={UsageExamplesScreen} title='Usage' rightTitle='Example' onRight={() => window.alert('Example Pressed')} />
            <Scene key='login' component={LoginScreen} title='Login' hideNavBar />
            <Scene key='listviewExample' component={ListviewExample} title='Listview Example' />
            <Scene key='listviewGridExample' component={ListviewGridExample} title='Listview Grid' />
            <Scene key='listviewSectionsExample' component={ListviewSectionsExample} title='Listview Sections' />
            <Scene key='listviewSearchingExample' component={ListviewSearchingExample} title='Listview Searching' navBar={CustomNavBar} />
            <Scene key='mapviewExample' component={MapviewExample} title='Mapview Example' />
            <Scene key='apiTesting' component={APITestingScreen} title='API Testing' />
            <Scene key='theme' component={ThemeScreen} title='Theme' />

            {/* Custom navigation bar example */}
            <Scene key='deviceInfo' component={DeviceInfoScreen} title='Device Info' />
            <Scene
              key="tabBar"
              open={false}
              initial
            >
              <Scene
                key="main"
                tabs
                tabBarStyle={Styles.tabBarStyle}
                tabBarSelectedItemStyle={Styles.tabBarSelectedItemStyle}
              >
                <Scene
                  key="tabHome"
                  navigationBarStyle={Styles.navBar}
                  iconName="home"
                  title="Home"
                  icon={TabIcon}
                >
                  <Scene
                    key="tabHomeStart"
                    component={TabHome}
                    title="Home"
                    titleStyle={Styles.title}
                    renderLeftButton={NavItems.hamburgerButton}
                  />
                </Scene>
                <Scene
                  key="tabMyServices"
                  navigationBarStyle={Styles.navBar}
                  title="My Services"
                  iconName="history"
                  icon={TabIcon}
                >
                  <Scene
                    key="tabMyServicesStart"
                    component={TabMyServices}
                    title="My Services"
                    titleStyle={Styles.title}
                    renderLeftButton={NavItems.hamburgerButton}
                    // renderLeftButton={this.renderMenuButton}
                    // renderRightButton={this.renderRightButton}
                  />
                </Scene>
                <Scene
                  key="tabMyProfile"
                  navigationBarStyle={Styles.navBar}
                  title="My Account"
                  iconName="person"
                  icon={TabIcon}
                >
                  <Scene
                    key="tabProfileLogin"
                    component={TabProfileLogin}
                    title="My Account"
                    titleStyle={Styles.title}
                    renderLeftButton={NavItems.hamburgerButton}
                    // renderLeftButton={this.renderMenuButton}
                    // renderRightButton={this.renderRightButton}
                  />
                </Scene>
              </Scene>
            </Scene>
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter

// @flow

import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Styles from './Styles/NavigationContainerStyle';
import NavigationDrawer from './NavigationDrawer';
import NavItems from './NavItems';
import CustomNavBar from '../Navigation/CustomNavBar';

// screens identified by the router
import PresentationScreen from '../Containers/PresentationScreen';
import AllComponentsScreen from '../Containers/AllComponentsScreen';
import UsageExamplesScreen from '../Containers/UsageExamplesScreen';
import LoginScreen from '../Containers/LoginScreen';
import ListviewExample from '../Containers/ListviewExample';
import ListviewGridExample from '../Containers/ListviewGridExample';
import ListviewSectionsExample from '../Containers/ListviewSectionsExample';
import ListviewSearchingExample from '../Containers/ListviewSearchingExample';
import MapviewExample from '../Containers/MapviewExample';
import APITestingScreen from '../Containers/APITestingScreen';
import ThemeScreen from '../Containers/ThemeScreen';
import DeviceInfoScreen from '../Containers/DeviceInfoScreen';

import TabHome from '../Containers/TabHome/';
import InputHardware from '../Containers/InputHardware';
import LokasiTukang from '../Containers/LokasiTukang';
import PulseScreen from '../Containers/PulseScreen';
import MapRoute from '../Containers/MapRoute';
import OnLocation from '../Containers/OnLocation';

import TabMyServices from '../Containers/TabMyServices/';
import OrderDetail from '../Containers/OrderDetail';
import ProfileDetail from '../Containers/ProfileDetail';

import TabProfileLogin from '../Containers/TabMyAccount/TabProfileLogin';
import TabProfileNotLogin from '../Containers/TabMyAccount/TabProfileNotLogin';
import PushNotification from '../Containers/PushNotification';
import Newsletter from '../Containers/Newsletter';
import EditProfile from '../Containers/EditProfile';

import Daftar from '../Containers/Daftar';

import LupaPassword from '../Containers/LupaPassword';

import TabIcon from '../Navigation/TabIcon';
import NavBarWithLogo from '../Navigation/NavBarWithLogo';

import { Images } from '../Themes';

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {

  render() {
    return (
      <Router>
        <Scene key="drawer" component={NavigationDrawer} open={false}>
          <Scene key="drawerChildrenWrapper" navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene key="presentationScreen" component={PresentationScreen} title="Ignite" renderLeftButton={NavItems.hamburgerButton} />
            <Scene key="componentExamples" component={AllComponentsScreen} title="Components" />
            <Scene key="usageExamples" component={UsageExamplesScreen} title="Usage" rightTitle="Example" onRight={() => window.alert("Example Pressed")} />
            <Scene key="login" component={LoginScreen} title="Login" hideNavBar />
            <Scene key="listviewExample" component={ListviewExample} title="Listview Example" />
            <Scene key="listviewGridExample" component={ListviewGridExample} title="Listview Grid" />
            <Scene key="listviewSectionsExample" component={ListviewSectionsExample} title="Listview Sections" />
            <Scene key="listviewSearchingExample" component={ListviewSearchingExample} title="Listview Searching" navBar={CustomNavBar} />
            <Scene key="mapviewExample" component={MapviewExample} title="Mapview Example" />
            <Scene key="apiTesting" component={APITestingScreen} title="API Testing" />
            <Scene key="theme" component={ThemeScreen} title="Theme" />

            {/* Custom navigation bar example */}
            <Scene key="deviceInfo" component={DeviceInfoScreen} title="Device Info" />
            <Scene key="daftar" direction="vertical" >
              <Scene
                key="daftarModal"
                navigationBarStyle={Styles.navBar}
                component={Daftar}
                title="Daftar"
                titleStyle={Styles.title}
                renderBackButton={NavItems.backButton}
                // renderRightButton={this.renderRightButton}
                direction="vertical"
                panHandlers={null}
                duration={1}
              />
            </Scene>
            <Scene key="lupaPassword" direction="vertical" >
              <Scene
                key="lupaPasswordModal"
                navigationBarStyle={Styles.navBar}
                component={LupaPassword}
                title="Lupa Password"
                titleStyle={Styles.title}
                renderBackButton={NavItems.backButton}
                // renderRightButton={this.renderRightButton}
                direction="vertical"
              />
            </Scene>
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
                    // navigationBarTitleImage={Images.logoTukangHeader}
                    navBar={NavBarWithLogo}
                  />
                  <Scene
                    key="inputHardware"
                    component={InputHardware}
                    title="Input Hardware"
                    titleStyle={Styles.title}
                    renderBackButton={NavItems.backButton}
                    hideTabBar
                  />
                  <Scene
                    key="lokasiTukang"
                    component={LokasiTukang}
                    title="Lokasi User"
                    titleStyle={Styles.title}
                    renderBackButton={NavItems.backButton}
                    hideTabBar
                  />
                  <Scene
                    key="pulseScreen"
                    component={PulseScreen}
                    title="Cari Tukang Terdekat"
                    titleStyle={Styles.title}
                    renderBackButton={NavItems.backButton}
                    hideTabBar
                  />
                  <Scene
                    key="mapRoute"
                    component={MapRoute}
                    title="Map Route"
                    titleStyle={Styles.title}
                    renderBackButton={NavItems.backButton}
                    hideTabBar
                  />
                  <Scene
                    key="onLocation"
                    component={OnLocation}
                    title="Tukang On Location"
                    titleStyle={Styles.title}
                    renderBackButton={NavItems.backButton}
                    hideTabBar
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
                    // title="My Services"
                    // titleStyle={Styles.title}
                    // renderLeftButton={NavItems.hamburgerButton}
                    navBar={NavBarWithLogo}
                  />
                  <Scene
                    key="orderDetail"
                    component={OrderDetail}
                    title="Order Detail"
                    titleStyle={Styles.title}
                    renderBackButton={NavItems.backButton}
                    hideTabBar
                  />
                  <Scene
                    key="profileDetail"
                    component={ProfileDetail}
                    title="Profile Detail"
                    titleStyle={Styles.title}
                    renderBackButton={NavItems.backButton}
                    hideTabBar
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
                    // title="My Account"
                    // titleStyle={Styles.title}
                    // renderLeftButton={NavItems.hamburgerButton}
                    navBar={NavBarWithLogo}
                    // renderLeftButton={this.renderMenuButton}
                    // renderRightButton={this.renderRightButton}
                  />
                  <Scene
                    key="tabProfileNotLogin"
                    component={TabProfileNotLogin}
                    title="Logged In"
                    titleStyle={Styles.title}
                    renderBackButton={NavItems.backButton}
                    // renderRightButton={this.renderRightButton}
                  />
                  <Scene
                    key="editProfile"
                    component={EditProfile}
                    title="Edit Profile"
                    titleStyle={Styles.title}
                    renderBackButton={NavItems.backButton}
                    // renderRightButton={this.renderRightButton}
                  />
                  <Scene
                    key="newsletter"
                    component={Newsletter}
                    title="Newsletter"
                    titleStyle={Styles.title}
                    renderBackButton={NavItems.backButton}
                    // renderRightButton={this.renderRightButton}
                  />
                  <Scene
                    key="pushNotification"
                    component={PushNotification}
                    title="Push Notification"
                    titleStyle={Styles.title}
                    renderBackButton={NavItems.backButton}
                    // renderRightButton={this.renderRightButton}
                  />
                </Scene>
              </Scene>
            </Scene>
          </Scene>
        </Scene>
      </Router>
    );
  }
}

export default NavigationRouter;

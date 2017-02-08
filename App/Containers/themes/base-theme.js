import color from 'color';
import { Platform } from 'react-native';
import { Colors } from '../../Themes/';

export default {
    // Badge
  badgeBg: '#ED1727',
  badgeColor: Colors.colorTukangWhite,

    // Button
  btnFontFamily: (Platform.OS === 'ios') ? 'HelveticaNeue' : 'HelveticaNeue',
  btnDisabledBg: '#b5b5b5',
  btnDisabledClr: '#f1f1f1',

  get btnPrimaryBg() {
    return this.brandPrimary;
  },
  get btnPrimaryColor() {
    return this.inverseTextColor;
  },
  get btnInfoBg() {
    return this.brandInfo;
  },
  get btnInfoColor() {
    return this.inverseTextColor;
  },
  get btnSuccessBg() {
    return this.brandSuccess;
  },
  get btnSuccessColor() {
    return this.inverseTextColor;
  },
  get btnDangerBg() {
    return this.brandDanger;
  },
  get btnDangerColor() {
    return this.inverseTextColor;
  },
  get btnWarningBg() {
    return this.brandWarning;
  },
  get btnWarningColor() {
    return this.inverseTextColor;
  },
  get btnTextSize() {
    return (Platform.OS === 'ios') ? this.fontSizeBase * 1.1 :
        this.fontSizeBase - 1;
  },
  get btnTextSizeLarge() {
    return this.fontSizeBase * 1.5;
  },
  get btnTextSizeSmall() {
    return this.fontSizeBase * 0.8;
  },
  get borderRadiusLarge() {
    return this.fontSizeBase * 3.8;
  },

  buttonPadding: 6,

  get iconSizeLarge() {
    return this.iconFontSize * 1.5;
  },
  get iconSizeSmall() {
    return this.iconFontSize * 0.6;
  },


    // Card
  cardDefaultBg: Colors.colorTukangWhite,


  // Check Box
  checkboxBgColor: '#039BE5',
  checkboxSize: 23,
  checkboxTickColor: Colors.colorTukangWhite,


  // Color
  brandPrimary: '#5067FF',
  brandInfo: Colors.colorTukangBlue,
  brandSuccess: Colors.colorTukangGreen,
  brandDanger: Colors.colorTukangRed,
  brandWarning: Colors.colorTukangOrange,
  brandSidebar: '#252932',

  // Color Tukang
  colorTukangYellow: Colors.colorTukangYellow,
  colorTukangOrange: Colors.colorTukangOrange,
  colorTukangBlack: '#000000',
  colorTukangGrey: '#4b4b4b',
  colorTukangWhite: Colors.colorTukangWhite,
  colorTukangRed: Colors.colorTukangRed,
  colorTukangGreen: Colors.colorTukangGreen,
  colorTukangBlue: Colors.colorTukangBlue,


  // Font
  fontFamily: (Platform.OS === 'ios') ? 'HelveticaNeue' : 'HelveticaNeue',
  fontSizeBase: 15,

  get fontSizeH1() {
    return this.fontSizeBase * 1.8;
  },
  get fontSizeH2() {
    return this.fontSizeBase * 1.6;
  },
  get fontSizeH3() {
    return this.fontSizeBase * 1.4;
  },


  // Footer
  footerHeight: 55,
  footerDefaultBg: (Platform.OS === 'ios') ? Colors.colorTukangOrange : Colors.colorTukangOrange,

  // FooterTab
  tabBarTextColor: (Platform.OS === 'ios') ? '#ffc788' : '#ffc788',
  tabBarActiveTextColor: (Platform.OS === 'ios') ? Colors.colorTukangYellow : Colors.colorTukangWhite,
  tabActiveBgColor: (Platform.OS === 'ios') ? undefined : undefined,

  // Header
  iosToolbarBtnColor: Colors.colorTukangWhite,
  toolbarDefaultBg: (Platform.OS === 'ios') ? Colors.colorTukangOrange : Colors.colorTukangOrange,
  toolbarHeight: (Platform.OS === 'ios') ? 64 : 56,
  toolbarIconSize: (Platform.OS === 'ios') ? 20 : 20,
  toolbarInputColor: Colors.colorTukangDivider,
  toolbarInverseBg: '#222',
  toolbarTextColor: (Platform.OS === 'ios') ? Colors.colorTukangWhite : Colors.colorTukangWhite,
  get statusBarColor() {
    return color(this.toolbarDefaultBg).darken(0.1).hexString();
  },


  // Icon
  iconFamily: 'MaterialIcons',
  iconFontSize: (Platform.OS === 'ios') ? 30 : 28,
  iconMargin: 7,


  // InputGroup
  inputFontSize: 15,
  inputBorderColor: '#D9D5DC',
  inputSuccessBorderColor: '#2b8339',
  inputErrorBorderColor: '#ed2f2f',

  get inputColor() {
    return '#575757';
  },
  get inputColorPlaceholder() {
    return '#575757';
  },

  inputGroupMarginBottom: 10,
  inputHeightBase: 40,
  inputPaddingLeft: 5,

  get inputPaddingLeftIcon() {
    return this.inputPaddingLeft * 8;
  },


  // Line Height
  btnLineHeight: 19,
  lineHeightH1: 32,
  lineHeightH2: 27,
  lineHeightH3: (Platform.OS === 'ios') ? 22 : 25,
  iconLineHeight: (Platform.OS === 'ios') ? 37 : 30,
  lineHeight: (Platform.OS === 'ios') ? 20 : 24,


  // List
  listBorderColor: Colors.colorTukangDivider,
  listDividerBg: Colors.colorTukangDivider,
  listItemHeight: 45,
  listItemPadding: 15,
  listNoteColor: Colors.colorTukangDivider,
  listNoteSize: 13,


  // Progress Bar
  defaultProgressColor: '#E4202D',
  inverseProgressColor: '#1A191B',


  // Radio Button
  radioBtnSize: (Platform.OS === 'ios') ? 25 : 23,
  radioColor: '#7e7e7e',

  get radioSelectedColor() {
    return color(this.radioColor).darken(0.2).hexString();
  },


  // Spinner
  defaultSpinnerColor: '#45D56E',
  inverseSpinnerColor: '#1A191B',


  // Tabs
  // tabBgColor: '#F8F8F8',
  // tabFontSize: 15,
  // tabTextColor: Colors.colorTukangWhite,
  tabBgColor: (Platform.OS === 'ios') ? '#4b4b4b' : '#4b4b4b',
  tabFontSize: 16,
  tabTextColor: (Platform.OS === 'ios') ? Colors.colorTukangWhite : Colors.colorTukangWhite,


  // Text
  textColor: Colors.colorTukangWhite,
  inverseTextColor: Colors.colorTukangWhite,


  // Title
  titleFontSize: (Platform.OS === 'ios') ? 17 : 19,
  subTitleFontSize: (Platform.OS === 'ios') ? 12 : 14,
  subtitleColor: '#8e8e93',


  // Other
  borderRadiusBase: (Platform.OS === 'ios') ? 5 : 5,
  borderWidth: 1,
  contentPadding: 10,

  get darkenHeader() {
    return color(this.tabBgColor).darken(0.03).hexString();
  },

  dropdownBg: '#000',
  dropdownLinkColor: '#414142',
  inputLineHeight: 24,
  jumbotronBg: '#C9C9CE',
  jumbotronPadding: 30,
};

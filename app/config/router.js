import React from 'react';
import {View, Text} from 'react-native';
import { createMaterialTopTabNavigator, SafeAreaView, MaterialTopTabBar,
    createSwitchNavigator, createDrawerNavigator, createStackNavigator,
    createAppContainer, NavigationActions } from 'react-navigation';
import { fadeIn } from 'react-navigation-transitions';
import { DrawerActions } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import GlobalConst from './GlobalConst';

//Auth and login screens
import AuthLoadingScreen from '../components/login/AuthLoadingScreen';
import LoginScreen from '../components/login/LoginScreen';
import SignUpScreen from '../components/login/SignUpScreen';
import SignupVerificationScreen from '../components/login/SignupVerificationScreen';
import ForgotPassswordScreen from '../components/login/ForgotPassswordScreen';

//home screens
import HomeScreen from '../components/home/HomeScreen';
import VerifyPickupScreen from '../components/home/VerifyPickupScreen';

//support screens
import SupportScreen from '../components/support/SupportScreen';

//help screens
import HelpScreen from '../components/help/HelpScreen';

//trip history screens
import MyCollectionScreen from '../components/trips/MyCollectionScreen';
import DriverProfileScreen from '../components/trips/DriverProfileScreen';

//bookings screens
import MyBookingsScreen from '../components/bookings/MyBookingsScreen';
import MaterialTypeScreen from '../components/bookings/MaterialTypeScreen';
import BookingConfirmationScreen from '../components/bookings/BookingConfirmationScreen';

//profile screens
import ProfileScreen from '../components/profile/ProfileScreen';
import AddPaymentScreen from '../components/profile/AddPaymentScreen';

//Learn screens
import LearnScreen from '../components/learn/LearnScreen';
import ListingDescription from '../components/learn/ListingDescription';


//components
import NullComponent from '../components/NullComponent';
import UserProfileImage from '../components/others/UserProfileImage';
import SignOutComponent from '../components/others/SignOutComponent';
import PlaceholderScreen from '../components/PlaceholderScreen';



//***************AUTH STACK NAVIGATOR*********************
const AuthStack = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Sign in',
    },
  },
  SignUpScreen: {
    screen: SignUpScreen,
    navigationOptions: {
      title: 'Sign up',
    },
  },
  ForgotPassswordScreen: {
    screen: ForgotPassswordScreen,
    navigationOptions: {
      title: 'Forgot password',
    },
  }
});

//***************APP STACKS*********************
const HomeStack = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'HOME SCREEN',
      header: null,
    },
  },
  MaterialTypeScreen: {
    screen: MaterialTypeScreen,
    navigationOptions: {
      title: 'REQUEST',
      title: 'COLLECTION BOOKING',
    },
  },
  BookingConfirmationScreen:{
    screen: BookingConfirmationScreen,
    navigationOptions: {
      header: null
    },
  },
  VerifyPickupScreen:{
    screen: VerifyPickupScreen,
    navigationOptions: {
      title: 'Verification'
    },
  },
});

const ProfileStack = createStackNavigator({
  ProfileScreen:{
    screen: ProfileScreen,
    navigationOptions: {
      title: 'PROFILE',
    },
  },
  AddPaymentScreen: {
    screen: AddPaymentScreen,
    navigationOptions: {
      title: 'ADD PAYMENT METHOD',
    },
  },
});

const SupportStack = createStackNavigator({
  SupportScreen: {
    screen: SupportScreen,
    navigationOptions: {
      title: 'SUPPORT',
    },
  },
});

const HelpStack = createStackNavigator({
  HelpScreen:{
    screen: HelpScreen,
    navigationOptions: {
      title: 'HELP',
    },
  }
});

const MyCollectionStack = createStackNavigator({
  MyCollectionScreen:{
    screen: MyCollectionScreen,
    navigationOptions: {
      title: 'My COLLECTIONS',
    },
  },
  DriverProfileScreen:{
    screen: DriverProfileScreen,
    navigationOptions: {
      title: ' COLLECTOR PROFILE',
    },
  }
});

const MyBookingsStack = createStackNavigator({
  MyBookingsScreen: {
    screen: MyBookingsScreen,
    navigationOptions: {
      title: 'MY BOOKINGS',
    },
  },
  PlaceholderScreen: {
    screen: PlaceholderScreen,
  }
});

const LearnStack = createStackNavigator({
  LearnScreen:{
    screen: LearnScreen,
    navigationOptions: {
      title: 'Learn'
    },
  },
  ListingDescription:{
    screen: ListingDescription,
    navigationOptions: {
      title: 'Learn Description'
    },
  }
});










//***************DRAWER NAVIGATOR*********************
const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      drawerLabel: <UserProfileImage />,
    },
  },
  Home2: {
    screen: HomeStack,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <Icon name={'home'} color={tintColor} size={20}/>
      )
    },
  },
  Support:{
    screen: SupportStack,
    navigationOptions: {
      drawerLabel: 'Support',
      drawerIcon: ({ tintColor }) => (
        <Icon name={'users'} color={tintColor} size={20}/>
      )
    },
  },
  Help:{
    screen: HelpStack,
    navigationOptions: {
      drawerLabel: 'Help',
      drawerIcon: ({ tintColor }) => (
        <Icon name={'lightbulb-o'} color={tintColor} size={25}/>
      )
    },
  },
  MyCollection:{
    screen: MyCollectionStack,
    navigationOptions: {
      drawerLabel: 'My Collections',
      drawerIcon: ({ tintColor }) => (
        <Icon name={'history'} color={tintColor} size={25}/>
      )
    },
  },
  Learn:{
    screen: LearnStack,
    navigationOptions: {
      drawerLabel: 'Learn',
      drawerIcon: ({ tintColor }) => (
        <Icon name={'book'} color={tintColor} size={25}/>
      )
    },
  },
  Logout:{
    screen: SignOutComponent,
    navigationOptions: {
      drawerLabel: <SignOutComponent />,
    },
  },
  Profile:{
    screen: ProfileStack,
    navigationOptions: {
      drawerLabel: <NullComponent />,
    },
  }
},{
  drawerPosition: 'left',
  contentOptions: {
    activeTintColor : GlobalConst.COLOR.DARKGREEN,
    inactiveTintColor : GlobalConst.COLOR.DARKGREEN,
    activeBackgroundColor : '#fff',
    inactiveBackgroundColor :'#ffffff',
    labelStyle: {
      fontFamily: 'TTSupermolot-Bold',
      fontWeight: 'normal',
      fontSize: 20
    }
  },
});



export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: DrawerNavigator,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

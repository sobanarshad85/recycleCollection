import React from 'react';
import { Alert, View, Text, Platform, StyleSheet, SafeAreaView, Dimensions, Image } from 'react-native';
import { _storeData, _retrieveData } from '../../backend/AsyncFuncs';
import { connectFirebase, getData } from '../../backend/firebase/utility';
import UserMapScreen from '../mapComponents/UserMapScreen';
import DriverMapScreen from '../mapComponents/DriverMapScreen';
import { ButtonComponent, GlobalConst } from '../../config/imports';
import Permissions from 'react-native-permissions'

console.disableYellowBox = true

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      loader: true,
      userType: ''
    });
    this.getUserType = this.getUserType.bind(this);
  }

  componentDidMount() {
    Permissions.request('location','always').then(response => {
      console.log('Response: ' + response);
      
    });
    connectFirebase();
    this.getUserType();
  }

  async getUserType(){
    let userId = await _retrieveData(GlobalConst.STORAGE_KEYS.userId);
    console.log(userId);
    let userType = await getData('orders', userId, 'UserType');
    await this.setState({userType: userType});
    _storeData(GlobalConst.STORAGE_KEYS.userType, userType);
  }


  render() {
    return (
      <View style={styles.container}>

      {this.state.userType == '' ?
        <View style={styles.containerCenter}>
          <Image style={styles.logo} resizeMode="contain" source={require('../../assets/logo.png')} />
          <Text style={styles.loadingText}>Loading maps...</Text>
        </View>
        : null
      }

      {this.state.userType == 'user' ?
        <UserMapScreen navigation={this.props.navigation}/>
        : null
      }

      {this.state.userType == 'collector' ?
        <DriverMapScreen navigation={this.props.navigation}/>
        : null
      }

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 50
  },
  logo: {
    width: Dimensions.get('window').width/1,
    height: Dimensions.get('window').height/5,
  }
});

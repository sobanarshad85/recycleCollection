import React from 'react';
import { Alert, View, Text, Platform, StyleSheet, SafeAreaView, Dimensions, Image } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { _storeData, _retrieveData } from '../../backend/AsyncFuncs';
import { connectFirebase, getData, getAllOfCollection } from '../../backend/firebase/utility';
import LocationSearchInputComponent from './LocationSearchInputComponent';
import PriceMarker from './PriceMarker';
import { ButtonComponent, GlobalConst, Icon, styles2 } from '../../config/imports';
import { getCurrentUserId } from '../../backend/firebase/auth'
import { showLocation } from 'react-native-map-link';
import firebase from 'firebase';
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
let LATITUDE = 37.78825;
let LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.003;
const DEFAULT_PADDING = { top: 100, right: 100, bottom: 100, left: 100 };
let MARKERS = [];

const initialRegion = {
  latitude: LATITUDE,
  longitude: LONGITUDE,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
}

export default class DriverMapScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      lastLat: 37.78825,
      lastLong: -122.4324,
      markers: [{latitude: 37.78825, longitude: -122.4324}]
    });
    this.fitToCoordinates = this.fitToCoordinates.bind(this);
    this.onPress = this.onPress.bind(this);
    this.getOrdersGeoLocations = this.getOrdersGeoLocations.bind(this);
  }

  componentDidMount() {
    connectFirebase();
    this.fitToCoordinates();

  }

  async fitToCoordinates(){
    await this.getOrdersGeoLocations();
    this.refs.map.fitToCoordinates(MARKERS, {
      edgePadding: DEFAULT_PADDING,
      animated: true,
    });
  }

  async getOrdersGeoLocations(){
    let orders = [];
    let userIds = [];
    let count = 0;
    var user = firebase.auth().currentUser.uid;
    Alert.alert(user);
    let data = await getAllOfCollection('orders');
    console.log(data);
     data.map((userData) => {
      if(userData.UserType === 'user' && userData.Orders)
      {
        userIds.push(userData.UserId.toString())
      }
  });

  console.log(userIds);

  for(let k=0; k < userIds.length; k++)
  {
    orders[k] = await getData('orders', userIds[k], 'Orders');
  } 
    if(!orders)
    {
      alert('No orders to display');
    }
    for(let i=0; i<orders.length; i++){
      for(let j = 0; j < orders[i].length; j++)
      {
        MARKERS[count] = ({latitude: Number(orders[i][j].Latitude), longitude: Number(orders[i][j].Longitude)});
        console.log(orders[i][j]);
        count++;
      }
    }
    alert('There are ' + count + ' new orders near you');
    this.setState({markers: MARKERS});
  }

  onPress(){
    _storeData(GlobalConst.STORAGE_KEYS.userLatitude, this.state.lastLat.toString());
    _storeData(GlobalConst.STORAGE_KEYS.userLongitude, this.state.lastLong.toString());
    this.props.navigation.navigate('MaterialTypeScreen')
  }

  

  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>

        <View style={styles.searchBarContianer}>
          <View style={styles.topRowContianer}>
            <Icon name="navicon" color={'#000'} style={{marginHorizontal: 10, marginBottom: 20}} size={40} onPress={() =>  this.props.navigation.toggleDrawer()} />
            <Image style={styles.logo} resizeMode="contain" source={require('../../assets/logo2.png')} />
          </View>
          <Text style={[styles2.fontStyle(16, 'normal', GlobalConst.COLOR.BLACK), styles2.marginLeft('3%'), {alignSelf: 'center'}]}>
            Tap on a marker to arrange the pickup
          </Text>
        </View>

        <View style={styles.buttonContianer}>
          <ButtonComponent title={'VERIFY PICKUP'} width={'80%'} marginTop={20} marginBottom={2}
          backgroundColor={'#fff'} textColor={'#000'} style={{zIndex: 1000}}
          onPress={() => navigate('VerifyPickupScreen')} />
        </View>

        <View style={styles.mapContianer}>
          <MapView
            ref="map"
            showsUserLocation
            zoomEnabled
            zoomTapEnabled
            toolbarEnabled
            initialRegion={initialRegion}
            showsMyLocationButton={true}
            onRegionChangeComplete={this.onRegionChangeComplete}
            style={styles.mapContianer}
            textStyle={{ color: '#bc8b00' }}
            containerStyle={{backgroundColor: 'white', borderColor: '#BC8B00'}}>

            {this.state.markers.map((marker, i) => (
              <Marker onLoad={() => this.forceUpdate()} onPress={ () =>
                showLocation({
                  latitude: marker.latitude,
                  longitude: marker.longitude,
                  dialogTitle: 'This is the dialog Title', // optional (default: 'Open in Maps')
    dialogMessage: 'This is the amazing dialog Message', // optional (default: 'What app would you like to use?')
    cancelText: 'This is the cancel button text'
                })}
                key={i+100}
                identifier={`id${i+1}`}
                coordinate={marker}
              >
                <Callout onPress={() => navigate('PlaceholderScreen')}>
                  <ButtonComponent title={'PICKUP COLLECTION'} width={'100%'} marginTop={20} marginBottom={2}
                  backgroundColor={'#fff'} textColor={'#000'} />
                </Callout>
              </Marker>
            ))}

            </MapView>
        </View>

      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  searchBarContianer: {
    height: 50,
    width: Dimensions.get('window').width - 20,
    position: 'absolute',
    top: Platform.OS === 'ios' ? '5%' : '2%',
    marginHorizontal: 10
  },
  topRowContianer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  mapContianer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    zIndex: -100
  },
  buttonContianer: {
    height: 100,
    width: '100%',
    position: 'absolute',
    bottom: '5%',
    left: 0,
  },
  logo: {
    width: 200,
    height: '100%',
    marginRight: 10
  }
});

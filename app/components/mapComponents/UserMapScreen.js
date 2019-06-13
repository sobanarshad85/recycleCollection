import React from 'react';
import { Alert, View, Text, Platform, StyleSheet, SafeAreaView, Dimensions, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { _storeData, _retrieveData } from '../../backend/AsyncFuncs';
import { connectFirebase } from '../../backend/firebase/utility';
import { getCurrentUserId } from '../../backend/firebase/auth';
import LocationSearchInputComponent from './LocationSearchInputComponent';
import PriceMarker from './PriceMarker';
import { ButtonComponent, GlobalConst, Icon } from '../../config/imports';
import Geolocation from 'react-native-geolocation-service';



const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
let LATITUDE = 37.78825;
let LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.003;
const DEFAULT_PADDING = { top: 100, right: 100, bottom: 100, left: 100 };

export default class UserMapScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      lastLat: 37.78825,
      lastLong: -122.4324,
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      ready: false,
      filteredMarkers: []
    });
    this.getCurrentPosition = this.getCurrentPosition.bind(this);
    this.onRegionChange = this.onRegionChange.bind(this);
    this.onRegionChangeComplete = this.onRegionChangeComplete.bind(this);
    this.getSearchedLocation = this.getSearchedLocation.bind(this);
    this.createMarker = this.createMarker.bind(this);
    this.fitToCoordinates = this.fitToCoordinates.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  onMapReady = (e) => {
    if(!this.state.ready) {
      this.setState({ready: true},()=>{
        this._animate();
      });
    }
  };
  componentDidMount() {
    this.getCurrentPosition();
    connectFirebase();
  }

  async getCurrentPosition() {
    try {
      Geolocation.getCurrentPosition( (position) => {
        const region = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        };
        this.setRegion(region);
      },
        (error) => {
          switch (error.code) {
            case 1:
              if (Platform.OS === "ios") {
                Alert.alert("", "Some location issues - iOS");
              } else {
                Alert.alert("", "Some location issues - Android");
              }
              break;
            default:
              Alert.alert("", "Error in location fetching");
          }
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    } catch(e) {
      alert(e.message || "");
    }
  };


  setRegion(region) {
    this.setState({ region:region });
    this.setState({lastLat:region.latitude, lastLong:region.longitude})
    this._animate();
  }

  _animate = () =>{
    setTimeout(() => {
      if (this.state.region.latitude != 0 &&
      this.refs.map.animateToRegion(
        {
          latitude: this.state.region.latitude,
          longitude: this.state.region.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA
        },
        3000
      ));
    }, 15)
  }

  onRegionChange = (region) => {
    console.log('onRegionChange', region);
  };

  onRegionChangeComplete = (region) => {
    console.log('onRegionChangeComplete', region);
  };

  async getSearchedLocation(location){
    console.log(location);
    await this.setState({
      lastLat: location.lat,
      lastLong: location.lng,
    });
    this.fitToCoordinates();
  }

  fitToCoordinates(){
    let MARKERS = [ this.createMarker(1), this.createMarker(2) ];

    this.map.fitToCoordinates(MARKERS, {
      edgePadding: DEFAULT_PADDING,
      animated: true,
    });
  }

  createMarker(modifier = 1) {
    if(modifier == 1){
      return {
        latitude: this.state.lastLat + (SPACE * modifier),
        longitude: this.state.lastLong + (SPACE * modifier)
      };
    }
    else{
      return {
        latitude: this.state.lastLat - (SPACE * modifier),
        longitude: this.state.lastLong - (SPACE * modifier)
      };
    }
  }

  onPress(){
    _storeData(GlobalConst.STORAGE_KEYS.userLatitude, this.state.lastLat.toString());
    _storeData(GlobalConst.STORAGE_KEYS.userLongitude, this.state.lastLong.toString());
    this.props.navigation.navigate('MaterialTypeScreen')
  }

  render() {
    const { region } = this.state;
    const { children, renderMarker, markers } = this.props;
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>

        <View style={styles.searchBarContianer}>
          <View style={styles.topRowContianer}>
            <Icon name="navicon" color={'#000'} style={{marginHorizontal: 10, marginBottom: 20}} size={40} onPress={() =>  this.props.navigation.toggleDrawer()} />
            <Image style={styles.logo} resizeMode="contain" source={require('../../assets/logo2.png')} />
          </View>
          <LocationSearchInputComponent getSearchedLocation={this.getSearchedLocation}/>
        </View>

        <View style={styles.buttonContianer}>
          <ButtonComponent title={'ORDER COLLECTION'} width={'80%'} marginTop={20} marginBottom={2}
          backgroundColor={'#fff'} textColor={'#000'}
          onPress={() => this.onPress()} />
        </View>

        <View style={styles.mapContianer}>
          <MapView
            ref="map"
            showsUserLocation
            zoomEnabled
            zoomTapEnabled
            initialRegion={region}
            showsMyLocationButton={true}
            onRegionChangeComplete={this.onRegionChangeComplete}
            onMapReady={this.onMapReady}
            onLoad={() => this.forceUpdate()}
            style={styles.mapContianer}
            textStyle={{ color: '#bc8b00' }}
            containerStyle={{backgroundColor: 'white', borderColor: '#BC8B00'}}>

              <Marker
                coordinate={{
                  latitude: this.state.lastLat,
                  longitude: this.state.lastLong,
                }}>
              </Marker>

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

import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { withNavigation } from 'react-navigation';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Icon, GlobalConst } from '../../config/imports';


const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};


class LocationSearchInputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      showPlacesList: false
    });
    this.getLocation = this.getLocation.bind(this);
  }

  getLocation(data, details){
    //console.log(data, details);
    console.log(details.geometry.location);
  }

  render() {
    return (
      <SafeAreaView>
          <GooglePlacesAutocomplete
          placeholder='Search'
          minLength={2} // minimum length of text to search
          textInputProps={{
             onFocus: () => this.setState({showPlacesList: true}),
             onBlur: () => this.setState({showPlacesList: false}),
          }}
          autoFocus={false}
          returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
          listViewDisplayed={this.state.showPlacesList}    // true/false/undefined
          fetchDetails={true}
          renderDescription={row => row.description} // custom description render
          onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
            //this.props.getSearchedLocation(data, details);
            this.props.getSearchedLocation(details.geometry.location);
          }}

          getDefaultValue={() => ''}

          query={{
            // available options: https://developers.google.com/places/web-service/autocomplete
            key: 'AIzaSyAj52FCOPKggOM54nElLEvduJIEeeWsTC0',
            language: 'en', // language of the results
          }}

          styles={{
            textInputContainer: {
              width: '100%',
              backgroundColor: 'rgba(0,0,0,0)',
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderWidth: 1,
              borderColor: GlobalConst.COLOR.LIGHTGREY,
              borderTopColor: GlobalConst.COLOR.LIGHTGREY,
              borderBottomColor: GlobalConst.COLOR.LIGHTGREY,
              shadowColor: '#000000',
              shadowOffset: {
                width: 0,
                height: 3
              },
              shadowRadius: 5,
              shadowOpacity: 1.0,
              elevation: 5,
              backgroundColor: '#fff'
            },
            description: {
              fontWeight: 'bold'
            },
            predefinedPlacesDescription: {
              color: '#1faadb'
            },
            listView: {
              top:40,
              position: 'absolute',
              height: require('Dimensions').get('window').width,
              width: require('Dimensions').get('window').width,
              backgroundColor: '#fff',
            }
          }}

          currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
          currentLocationLabel="Current location"
          nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
          GoogleReverseGeocodingQuery={{
            // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
          }}
          GooglePlacesSearchQuery={{
            // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
            rankby: 'distance',
            types: 'food'
          }}

          filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
          predefinedPlaces={[homePlace, workPlace]}

          debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
          renderLeftButton={()  => {}}
          renderRightButton={() => <Text></Text>}
        />

      </SafeAreaView>
    );
  }
}

export default withNavigation(LocationSearchInputComponent);

const styles = StyleSheet.create({
  inputStyle: {
    height: '100%',
    width: '90%',
    backgroundColor: 'transparent',
    fontSize: 20,
    padding: 10,
    paddingLeft: 50,
    marginTop: 100,
  },
});

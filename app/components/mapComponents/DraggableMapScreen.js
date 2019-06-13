import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';

import MapView, { Marker, ProviderPropType } from 'react-native-maps';
import PriceMarker from './PriceMarker';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 32.51856;
const LONGITUDE = 74.53034;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

function log(eventName, e) {
  console.log(eventName, e.nativeEvent);
}

class DraggableMapScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      a: {
        latitude: LATITUDE + SPACE,
        longitude: LONGITUDE + SPACE,
      },
      b: {
        latitude: LATITUDE - SPACE,
        longitude: LONGITUDE - SPACE,
      },
    };
  }

  componentDidMount() {
    console.log('Component did mount');
    this.getCurrentPosition();
  }

  getCurrentPosition() {
    try {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState({
            a: {
              latitude: position.coords.latitude + SPACE,
              longitude: position.coords.longitude + SPACE,
            },
            b: {
              latitude: position.coords.latitude - SPACE,
              longitude: position.coords.longitude - SPACE,
            },
          });
          alert(position.coords.longitude + SPACE);
        },
        (error) => {
          //TODO: better design
          switch (error.code) {
            case 1:
              if (Platform.OS === "ios") {
                Alert.alert("", "Para ubicar tu locación habilita permiso para la aplicación en Ajustes - Privacidad - Localización");
              } else {
                Alert.alert("", "Para ubicar tu locación habilita permiso para la aplicación en Ajustes - Apps - ExampleApp - Localización");
              }
              break;
            default:
              Alert.alert("", "Error al detectar tu locación");
          }
        }
      );
    } catch(e) {
      alert(e.message || "");
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          style={styles.map}
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
        >
          <Marker
            coordinate={this.state.a}
            onSelect={(e) => log('onSelect', e)}
            onDrag={(e) => log('onDrag', e)}
            onDragStart={(e) => log('onDragStart', e)}
            onDragEnd={(e) => log('onDragEnd', e)}
            onPress={(e) => log('onPress', e)}
            draggable
          >
            <PriceMarker amount={99} />
          </Marker>
          <Marker
            coordinate={this.state.b}
            onSelect={(e) => log('onSelect', e)}
            onDrag={(e) => log('onDrag', e)}
            onDragStart={(e) => log('onDragStart', e)}
            onDragEnd={(e) => log('onDragEnd', e)}
            onPress={(e) => log('onPress', e)}
            draggable
          />
        </MapView>
      </View>
    );
  }
}

DraggableMapScreen.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default DraggableMapScreen;

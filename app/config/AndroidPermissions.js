import {PermissionsAndroid} from 'react-native';

export async function requestLocationPermission() {
  try {
    const granted = await PermissionsAndroid.requestMultiple(
      [ PermissionsAndroid.ACCESS_FINE_LOCATION,
        PermissionsAndroid.ACCESS_COARSE_LOCATION
      ]);
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
}

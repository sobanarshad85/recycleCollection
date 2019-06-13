import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default class PlaceholderScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>Navigation isn't possible without real data so this screen will come later</Text>
        <Text style={styles.welcome}>It'll be a page with delivery details with a cancellation option and a map</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

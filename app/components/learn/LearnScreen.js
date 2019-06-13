import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Button, Platform, ActivityIndicator } from 'react-native';
import CardImageComponent from '../others/CardImageComponent';
import ArrowBackComponent from '../others/ArrowBackComponent';

export default class LearnScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = ({
      loader: false,
      data: [],
    });
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <View style={{marginLeft:10}}>
          <ArrowBackComponent onPress={() => navigation.toggleDrawer()} />
        </View>
      ),
    }
  };


  render() {
    const data = [
      {title: 'Video Title 1', imageUrl: require('../../assets/climbing.jpg'), userName: 'Alex', price: 'Free', socialMediaPlatform: 'Youtube', description: 'Some Description about me. I am climbing the hill'},
      {title: 'Video Title 2', imageUrl: require('../../assets/adventure.jpg'), userName: 'Emma', price: '$2', socialMediaPlatform: 'faceBook', description: 'Placeholder Description. Lorez launa lovelace fauda gurgasy'},
      {title: 'Video Title 3', imageUrl: require('../../assets/ferry.jpg'), userName: 'Kevin', price: 'Free', socialMediaPlatform: 'Youtube', description: 'Placeholder Description. Lorez launa lovelace fauda gurgasy'},
      {title: 'Video Title 4', imageUrl: require('../../assets/fishing.jpg'), userName: 'Alex', price: 'Free', socialMediaPlatform: 'Dailymotion', description: 'Some Description about me. I am climbing the hill'},
      {title: 'Video Title 5', imageUrl: require('../../assets/adventure.jpg'), userName: 'Emma', price: '$3', socialMediaPlatform: 'Dailymotion', description: 'Some Description about me. I am climbing the hill'},
      {title: 'Video Title 6', imageUrl: require('../../assets/climbing.jpg'), userName: 'Kevin', price: 'Free', socialMediaPlatform: 'faceBook', description: 'Placeholder Description. Lorez launa lovelace fauda gurgasy'},
      {title: 'Video Title 7', imageUrl: require('../../assets/ferry.jpg'), userName: 'Alex', price: 'Free', socialMediaPlatform: 'Youtube', description: 'Placeholder Description. Lorez launa lovelace fauda gurgasy'}
    ];
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.foodListContainer}>
          <CardImageComponent data={data} navigation={this.props.navigation} loader={this.state.loader}/>
        </View>
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.05,
    padding: 5,
  },
  foodListContainer: {
    flex: 1,
    marginTop: 10,
  },
});

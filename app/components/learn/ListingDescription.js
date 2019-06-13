import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Button, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ArrowBackComponent from '../others/ArrowBackComponent';


export default class ListingDescription extends Component<Props> {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title'),
      headerLeft: (
        <View style={{marginLeft:10}}>
          <ArrowBackComponent onPress={() => navigation.goBack()} />
        </View>
      ),
    };
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <Image
          style={{width: '100%', height: 300}}
          source={this.props.navigation.state.params.image}
        />
        <View style={styles.titleContainer}>
          <View style={styles.userAvatar}>
            <Icon name="user-circle-o" color={'#71a1ed'} size={35}/>
          </View>
          <View style={styles.title}>
            <Text style={styles.titleText}>{this.props.navigation.state.params.title}</Text>
          </View>
        </View>
        <Text style={styles.dateText}>{this.props.navigation.state.params.dateTime}</Text>
        <View style={styles.descriptionContainer}>
          <Text> {this.props.navigation.state.params.description} </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.2,
    flexDirection: 'row',
    margin: 10,
  },
  userAvatar: {
    flex: 0.15,
    justifyContent: 'center',
  },
  title: {
    flex: 0.85,
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  descriptionContainer: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  pickupTimeContainer: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    margin: 10,
  },
  pickupText: {
    color: '#4f4f4f',
    fontSize: 20,
    fontWeight: "bold",
  },
  dateText: {
    color: '#333333',
    marginBottom: 5,
    marginLeft: 10,
  },
  pickupButtonContainer: {
    flex: 0.5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 10,
  },
});

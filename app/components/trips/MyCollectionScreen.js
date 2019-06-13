import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, FlatList, ScrollView} from 'react-native';
import { styles, styles2, GlobalConst, Icon, ArrowBackComponent, TextCardComponent } from '../../config/imports';
import { _storeData, _retrieveData } from '../../backend/AsyncFuncs';



export default class MyCollectionScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = ({
      userType: '',
    });
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <View style={styles.marginLeft10}>
          <ArrowBackComponent onPress={() => navigation.toggleDrawer()} />
        </View>
      ),
    }
  };

  componentDidMount(){
    _retrieveData(GlobalConst.STORAGE_KEYS.userType).then((userType) => {
      this.setState({userType: userType})
    });
  }

  render() {
    const data = [
      {title1: 'Material Title1', title2: 'quantity', pts: '10 pts', distance: 'Picked up John', date: '5th OF JUNE', time: '2.35 PM', description: 'In November 1966, NASA astronaut Buzz Aldrin made history with the frist selfie in space.',
       pickupLocation: 'East London'
      },
      {title1: 'Material Title2', title2: 'quantity', pts: '15 pts', distance: 'Picked up David', date: '18th OF DEC', time: '10.08 AM', description: 'In November 1966, NASA astronaut Buzz Aldrin made history with the frist selfie in space.',
       pickupLocation: 'Newport'
      }
    ];

    return (
      <ScrollView style={styles.scrollviewContainer} contentContainerStyle={styles.scrollviewContainer}>
        <View style={styles.container}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) =>

              <TextCardComponent
                title1={item.title1}
                title2={' - ' + item.title2}
                title2Component={
                  <Text style={styles2.fontStyle(20, 'bold', GlobalConst.COLOR.DARKGREEN)}>
                    {item.pts}
                  </Text>
                }
                distanceTitleRequired={true}
                distanceTitle={item.distance}
                dateDirection={'column'}
                date={item.date + ' | ' + item.time}
                pickupLocation={item.pickupLocation}
                navigation={this.props.navigation}
                descriptionRequired={false}
                statusRequired={false}
                onPress={this.state.userType == 'driver' ? null : () => this.props.navigation.navigate('DriverProfileScreen', {description: item.description})}
              />

            }
          />
        </View>
      </ScrollView>
    );
  }
}

const styles3 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

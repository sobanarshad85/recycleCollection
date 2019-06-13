import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, FlatList, ScrollView} from 'react-native';
import { styles, styles2, GlobalConst, Icon, ArrowBackComponent, TextCardComponent } from '../../config/imports';


export default class MyBookingsScreen extends Component<Props> {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <View style={styles.marginLeft10}>
          <ArrowBackComponent onPress={() => navigation.navigate('HomeScreen')} />
        </View>
      ),
    }
  };

  render() {
    const data = [
      {title1: 'Material Title1', title2: 'quantity', fare: '0', distance: 'Picked up Ali', date: '5th OF MAY', time: '2.35 PM', description: 'In November 1966, NASA astronaut Buzz Aldrin made history with the frist selfie in space.',
       pickupLocation: 'Uxbridge', destination: 'Disposal Area'
      },
      {title1: 'Material Title2', title2: 'quantity', fare: '0', distance: 'Picked up Raghav', date: '17th OF APRIL', time: '10.08 AM', description: 'In November 1966, NASA astronaut Buzz Aldrin made history with the frist selfie in space.',
       pickupLocation: 'Cardiff', destination: 'Disposal Area'
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
                  <Icon
                    onPress={() => this.props.navigation.navigate('PlaceholderScreen')}
                    name={"location-arrow"}
                    color={GlobalConst.COLOR.BLACK}
                    size={GlobalConst.ICONSIZE}
                  />
                }
                icon={'truck'}
                seaterTitle={item.seater}
                dateDirection={'row'}
                date={item.date + ' | ' + item.time}
                descriptionRequired={true}
                description={item.description}
                pickupLocation={item.pickupLocation}
                destination={item.destination}
                navigation={this.props.navigation}
                statusRequired={false}
                onPress={() => this.props.navigation.navigate('PlaceholderScreen')}
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

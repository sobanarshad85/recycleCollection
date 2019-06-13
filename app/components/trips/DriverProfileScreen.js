import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, FlatList, ScrollView, Image, SafeAreaView} from 'react-native';
import { styles, styles2, GlobalConst, Icon, ArrowBackComponent, TextCardComponent,
    ButtonComponent, TextInputComponent } from '../../config/imports';


export default class DriverProfileScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = ({
      name: 'John',
      seater: '4 SEATER',
      carName: 'MERCEDES BENZ E',
      date: '20TH of May',
      time: '10.01 PM',
      cardNum: '5532',
      pickupLocation: 'East London',
      destination: 'Disposal Area',
    });
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <View style={styles.marginLeft10}>
          <ArrowBackComponent onPress={() => navigation.goBack()} />
        </View>
      ),
    }
  };

  render() {
    const reasons = [
      { reason: 'Lost an item' },
      { reason: "My driver didn't end the trip on time" },
      { reason: 'My driver took the wrong turn' },
      { reason: 'My driver was unprofessional' },
      { reason: 'My driver came with a different vehicle' },
      { reason: 'I got charged a cancellation fee' },
    ];

    return (
      <SafeAreaView>
      <ScrollView style={styles.scrollviewContainer} contentContainerStyle={styles.scrollviewContainer}>

        <View style={styles3.imageContainer}>
          <Image
            style={styles3.image}
            source={require('../../assets/trump.jpg')}
          />
        </View>

        <View style={[styles2.container(0.1), styles.center]}>
          <Text style={[styles2.fontStyle(35, 'normal', 'black'), styles2.marginTop(20)]}>{this.state.name}</Text>
        </View>

        <View style={[styles2.container(0.1), styles.center, styles2.marginBottom(30)]}>
          <View style={[styles.row, styles2.marginTop(10)]}>
            <Text style={styles2.fontStyle(13, 'normal', GlobalConst.COLOR.DARKGREY2)}>{this.state.date}</Text>
            <Text style={[styles2.fontStyle(13, 'normal', GlobalConst.COLOR.DARKGREY2), styles2.marginLeft(5)]}> |    {this.state.time}</Text>
          </View>
        </View>

        <View style={[styles2.container(0.2), styles.row, styles.borderVertical]}>
          <View style={[styles2.container(1), styles.center, styles.padding10, styles.borderLeft]}>
            <Text style={[styles2.fontStyle(15, 'bold', GlobalConst.COLOR.DARKGREEN), styles.marginBottom10]}>Pickup Location</Text>
            <Text style={styles2.fontStyle(15, 'normal', GlobalConst.COLOR.DARKGREY)}>{this.state.pickupLocation}</Text>
          </View>
        </View>

        <View style={[styles2.container(0.1), styles2.marginTop(40), styles.marginLeft10]}>
          <Text style={[styles2.fontStyle(23, 'bold', 'black'), styles.marginBottom10]}>History</Text>
          <Text style={[styles2.fontStyle(15, 'normal', GlobalConst.COLOR.DARKGREY), styles.marginBottom20]}>Previous Transactions...</Text>
        </View>

        <View style={[styles2.container(0.1), styles.marginLeft10]}>
          <Text style={[styles2.fontStyle(23, 'bold', 'black'), styles.marginBottom10]}>Collected so far</Text>
          <Text style={[styles2.fontStyle(15, 'normal', GlobalConst.COLOR.DARKGREY), styles.marginBottom20]}>Total...</Text>
        </View>

        <View style={[styles2.container(0.1), styles2.marginTop(10), styles2.marginHorizontal(50)]}>
          <TextInputComponent styles={styles2.marginHorizontal(10)} placeholder={'Leave a note'} />
        </View>

        <ButtonComponent title={'SEND FEEDBACK'} width={'80%'} marginTop={30} marginBottom={30}
        backgroundColor={GlobalConst.COLOR.DARKGREEN} textColor={GlobalConst.COLOR.WHITE}
        />

      </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles3 = StyleSheet.create({
  imageContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 50,
    marginTop: 30
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
});

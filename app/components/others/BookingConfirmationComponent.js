import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Image} from 'react-native';
import { styles, styles2, GlobalConst, Icon, TextInputComponent,
        ButtonComponent, ListComponent, ArrowBackComponent } from '../../config/imports';
import { Dropdown } from 'react-native-material-dropdown';


export default class BookingConfirmationComponent extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = ({
      text: '',
    });
  }

  render() {
    const data = [
      {id: 1, label:'1 kg'},
      {id: 2, label:'2 kg'},
      {id: 3, label:'3 kg'},
      {id: 4, label:'4 kg'},
      {id: 5, label:'5 kg'},
   ]
   const data2 = [
     {id: 1, label:'Customer did not respond'},
     {id: 2, label:'Location not found'},
     {id: 3, label:'Customer not home'},
     {id: 4, label:'Material not as described'},
     {id: 5, label:'Some other reason...'},
  ]
    const { navigate } = this.props.navigation;
    return (
        <ScrollView contentContainerStyle={styles.container} style={this.props.containerStyle}>
          <View style={[styles2.container(0.8), styles.selfCenter]}>
            <View style={styles2.container(0.3)}>
              <Text style={[styles2.fontStyle(27, 'normal', 'black'), styles.selfCenter, styles2.marginVertical(5)]}>{this.props.title}</Text>
              {this.props.isCollector ?
                <View style={styles2.container(0.3)}>
                  <Dropdown
                    containerStyle={styles.dropdownStyle}
                    animationDuration={0}
                    label={'If cancelled, please list the reason'}
                    data={data2}
                    onChangeText={(value, index, data) => {this.setState({qty: data[index].label })}}
                    value={this.state.qty}
                  />
                  <Dropdown
                    containerStyle={styles.dropdownStyle}
                    animationDuration={0}
                    label={'Quantity'}
                    data={data}
                    onChangeText={(value, index, data) => {this.setState({qty: data[index].label })}}
                    value={this.state.qty}
                  />
                </View>
              :
                <View style={styles.row}>
                  <Text style={[styles2.fontStyle(17, 'normal', GlobalConst.COLOR.DARKGREY), styles.selfCenter, styles2.marginVertical(5)]}>Confirmation: </Text>
                  <Text style={[styles2.fontStyle(17, 'bold', GlobalConst.COLOR.DARKGREY), styles.selfCenter, styles.selfCenter]}>{this.props.confirmationNum}</Text>
                </View>
              }
            </View>
            <View style={styles2.container(0.7)}>
              <Text style={[styles2.fontStyle(16, 'normal', GlobalConst.COLOR.GREY), styles.selfCenter, styles2.marginVertical(5), styles2.marginTop(50)]}>Date</Text>
              <Text style={[styles2.fontStyle(20, 'normal', GlobalConst.COLOR.BLACK), styles.selfCenter, styles2.marginVertical(5)]}>{this.props.date}</Text>
              <Text style={[styles2.fontStyle(16, 'normal', GlobalConst.COLOR.GREY), styles.selfCenter, styles2.marginVertical(5)]}>Time</Text>
              <Text style={[styles2.fontStyle(20, 'normal', GlobalConst.COLOR.BLACK), styles.selfCenter, styles2.marginVertical(5)]}>{this.props.time}</Text>
              <Text style={[styles2.fontStyle(16, 'normal', GlobalConst.COLOR.GREY), styles.selfCenter, styles2.marginVertical(5)]}>Place</Text>
              <Text style={[styles2.fontStyle(20, 'normal', GlobalConst.COLOR.BLACK), styles.selfCenter, styles2.marginVertical(5)]}>{this.props.place}</Text>
            </View>
          </View>

          <View style={styles2.container(0.1)}>
            <Text style={[styles2.fontStyle(14, 'normal', GlobalConst.COLOR.BLACK), styles.selfCenter]}>{this.props.note}</Text>
          </View>

          <ButtonComponent title={'VERIFY'} width={'90%'} marginTop={10} marginBottom={10}
            backgroundColor={GlobalConst.COLOR.DARKGREEN} textColor={GlobalConst.COLOR.WHITE}
            onPress={() => navigate('HomeScreen')}/>

        </ScrollView>
    );
  }
}

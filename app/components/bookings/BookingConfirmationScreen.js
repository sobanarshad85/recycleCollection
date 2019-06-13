import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
import { styles, styles2, GlobalConst, Icon, TextInputComponent, ArrowBackComponent,
        ButtonComponent, ListComponent, SearchComponent, CarTypeComponent,
        BookingConfirmationComponent } from '../../config/imports';



export default class BookingConfirmationScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = ({
      data: {}
    });
    this.onPress = this.onPress.bind(this);
  }

  componentDidMount(){
    const note =  'To edit, go to My Bookings';
    this.setState({
      data: {
        title: 'Booking Confirmed!', confirmationNum: 'hup99702xl', date: 'March 11, 2019',
        time: '5.30 PM', place: 'John Fork 24th', qrTitle: 'The Chessington Adventure',
        section: 'C', row: '4', seat: '23C', note: note
      }
    })
  }

  onPress(){
    this.props.navigation.navigate('MaterialTypeScreen')
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <SafeAreaView style={[styles.container, styles.justifyCenter]}>
        <BookingConfirmationComponent title={this.state.data.title} confirmationNum={this.state.data.confirmationNum}
          date={this.state.data.date} time={this.state.data.time} time={this.state.data.time}
          place={this.state.data.place} containerStyle={[styles.container, styles2.marginTop(50)]}
          qrTitle={this.state.data.qrTitle} section={this.state.data.section} row={this.state.data.row} seat={this.state.data.seat}
          navigation={this.props.navigation} note={this.state.data.note}
        />
      </SafeAreaView>
    );
  }
}

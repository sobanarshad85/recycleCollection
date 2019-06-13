import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
import { styles, styles2, GlobalConst, Icon, TextInputComponent, ArrowBackComponent,
        ButtonComponent, ListComponent, SearchComponent, CarTypeComponent,
        BookingConfirmationComponent } from '../../config/imports';



export default class VerifyPickupScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = ({
      data: {}
    });
    this.onPress = this.onPress.bind(this);
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

  componentDidMount(){
    const note =  'This screen will be accessible from the navigation screen';
    this.setState({
      data: {
        title: 'Verify Your Collection!', confirmationNum: 'cola1293ns1', date: 'May 05, 2019',
        time: '5.30 PM', place: 'New Delhi 24th Street', note: note
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
          date={this.state.data.date} time={this.state.data.time} place={this.state.data.place}
          containerStyle={[styles.container, styles2.marginTop(50)]}
          navigation={this.props.navigation} note={this.state.data.note} isCollector={true}
        />
      </SafeAreaView>
    );
  }
}

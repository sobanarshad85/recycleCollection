import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView, ActivityIndicator} from 'react-native';
import { styles, styles2, GlobalConst, Icon, TextInputComponent, ArrowBackComponent,
        ButtonComponent, ListComponent, SearchComponent, CarTypeComponent } from '../../config/imports';
import { connectFirebase, saveData, addToArray } from '../../backend/firebase/utility';
import { _retrieveMultipleData, _retrieveData } from '../../backend/AsyncFuncs';
import { Dropdown } from 'react-native-material-dropdown';



export default class MaterialTypeScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = ({
      loader: false,
      buttonTitle: 'REQUEST PLASTIC',
      materialType: 'PLASTIC',
      iconName: 'cab',
      time: 'NOW',
      date: 'TODAY',
      mpvCar: require('../../assets/inactiveMpvCar.png'),
      executiveCar: require('../../assets/inactiveExecutiveCar.png'),
      iconColor2: GlobalConst.COLOR.BLACK,
      iconColor3: GlobalConst.COLOR.BLACK,
      textColor2: GlobalConst.COLOR.DARKGREY,
      textColor3: GlobalConst.COLOR.DARKGREY,
    });
    this.changeColors = this.changeColors.bind(this);
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
    connectFirebase();
  }

  changeColors(number){
    if(number == 2){
      this.setState({
        buttonTitle: 'REQUEST PLASTIC',
        materialType: 'PLASTIC',
        iconName: 'bus',
        mpvCar: require('../../assets/activeMpvCar.png'),
        executiveCar: require('../../assets/inactiveExecutiveCar.png'),
        iconColor2: GlobalConst.COLOR.DARKGREEN,
        textColor2: GlobalConst.COLOR.DARKGREEN,
        iconColor3: GlobalConst.COLOR.BLACK,
        textColor3: GlobalConst.COLOR.DARKGREY,
      })
    }
    if(number == 3){
      this.setState({
        buttonTitle: 'REQUEST E-WASTE',
        materialType: 'E-WASTE',
        iconName: 'car',
        mpvCar: require('../../assets/inactiveMpvCar.png'),
        executiveCar: require('../../assets/activeExecutiveCar.png'),
        iconColor2: GlobalConst.COLOR.BLACK,
        textColor2: GlobalConst.COLOR.DARKGREY,
        iconColor3: GlobalConst.COLOR.DARKGREEN,
        textColor3: GlobalConst.COLOR.DARKGREEN,
      })
    }
  }

  async onPress(){
    this.setState({loader: true});

    let geoLocation = await _retrieveMultipleData(
      GlobalConst.STORAGE_KEYS.userLatitude,
      GlobalConst.STORAGE_KEYS.userLongitude
    );
    let userId = await _retrieveData(GlobalConst.STORAGE_KEYS.userId);
    let storeObject = { Latitude: geoLocation[0], Longitude: geoLocation[1], Type: this.state.materialType }

    await addToArray('orders', userId, 'Orders', storeObject );
    this.setState({loader: false});

    this.props.navigation.navigate('HomeScreen');
  }

  render() {
    const data = [
      {id: 1, label:'1 kg'},
      {id: 2, label:'2 kg'},
      {id: 3, label:'3 kg'},
      {id: 4, label:'4 kg'},
      {id: 5, label:'5 kg'},
   ]
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={[styles.container, styles.justifyCenter]}>

        <View style={[styles2.container(0.5), styles.row, styles.center, styles.marginTop10]}>

          <TouchableOpacity onPress={() => this.changeColors(2)} style={styles3.buttonContainer}>
            <CarTypeComponent iconName={this.state.mpvCar} iconColor={this.state.iconColor2} textColor={this.state.textColor2}
              title1={'PLASTIC'} title2={'Reuse, Reduce, Recycle'} title3={'e.g. plastic bottles'}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.changeColors(3)} style={styles3.buttonContainer}>
            <CarTypeComponent iconName={this.state.executiveCar} iconColor={this.state.iconColor3} textColor={this.state.textColor3}
              title1={'E-WASTE'} title2={'Do not chuck it'} title3={'e.g. old computers'}/>
          </TouchableOpacity>

        </View>


        <View style={[styles2.container(0.5), styles2.marginTop(30), styles2.marginLeft(20), {width: '90%'}]}>

          <View style={[styles2.container(1), styles2.marginHorizontal('5%')]}>
            <Dropdown
              containerStyle={styles.dropdownStyle}
              animationDuration={0}
              label={'Quantity'}
              data={data}
              onChangeText={(value, index, data) => {this.setState({qty: data[index].label })}}
              value={this.state.qty}
            />
          </View>

          <View style={[styles2.container(1), styles.row, styles.justifySpaceBetween, styles.borderBottom, styles2.marginHorizontal('5%')]}>
            <Text style={[styles2.fontStyle(15, 'normal', GlobalConst.COLOR.BLACK), styles2.marginVertical(5), styles.selfCenter]}>
              {this.state.time}
            </Text>
            <View style={[styles.row, styles.center]}>
              <Text style={[styles2.fontStyle(13, 'bold', GlobalConst.COLOR.BLACK), styles2.marginVertical(5), styles2.marginRight(10)]}>TIME</Text>
              <Icon
                onPress={() => alert('Time picker will appear')}
                name={"clock-o"}
                color={GlobalConst.COLOR.BLACK}
                size={GlobalConst.ICONSIZE}
              />
            </View>
          </View>

          <View style={[styles2.container(1), styles.row, styles.justifySpaceBetween, styles.borderBottom, styles2.marginHorizontal('5%')]}>
            <Text style={[styles2.fontStyle(15, 'normal', GlobalConst.COLOR.BLACK), styles2.marginVertical(5), styles.selfCenter]}>
              {this.state.date}
            </Text>
            <View style={[styles.row, styles.center]}>
              <Text style={[styles2.fontStyle(13, 'bold', GlobalConst.COLOR.BLACK), styles2.marginVertical(5), styles2.marginRight(10)]}>DATE</Text>
              <Icon
                onPress={() => alert('Time picker will appear')}
                name={"calendar-o"}
                color={GlobalConst.COLOR.BLACK}
                size={GlobalConst.ICONSIZE}
              />
            </View>
          </View>

        </View>

        <View style={styles3.bottomContainer}>
          <View style={styles3.loadingContainer}>
            {this.state.loader ? <ActivityIndicator size="large" color="#0000ff" /> : null}
          </View>
          <View style={styles3.buttonContainer2}>
            <ButtonComponent title={this.state.buttonTitle} width={'100%'} marginTop={0} marginBottom={10}
              backgroundColor={GlobalConst.COLOR.DARKGREEN} textColor={GlobalConst.COLOR.WHITE}
              onPress={() => this.onPress()} />
            </View>
        </View>

      </SafeAreaView>
    );
  }
}

const styles3 = StyleSheet.create({
  buttonContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 5,
    backgroundColor: GlobalConst.COLOR.WHITE,
    marginHorizontal: 3,
    padding: 10,
  },
  bottomContainer:{
    flex: 0.5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer2:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  dropdownStyle: {
    borderWidth: 1,
    borderColor: '#8997AA',
    paddingHorizontal: 5
  }
});

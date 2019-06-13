import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import GlobalConst from '../../config/GlobalConst';
import styles from '../../styles/GlobalStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Label_Field from '../others/Label_Field';
import ButtonComponent from '../others/ButtonComponent';
import ArrowBackComponent from '../others/ArrowBackComponent';



export default class AddPaymentScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = ({
      cardNumber: '',
    });
    this.onChange = this.onChange.bind(this);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <View style={styles.marginLeft10}>
          <ArrowBackComponent onPress={() => navigation.navigate('ProfileScreen')} />
        </View>
      ),
    }
  };

  onChange(text){
    text.then((text) => {
      this.setState({cardNumber: text});
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.scrollviewContainer} contentContainerStyle={styles.scrollviewContainer}>

        <View style={[styles.borderRounded, styles.margin10, styles.padding10]}>
          <View style={styles.borderBottom}>
            <Label_Field label={'CARD NUMBER'} onChange={this.onChange}
               placeholder={'0000 0000 0000 0000'}
               containerStyle={styles2.labelContainer}
               labelTextStyle={styles2.labelText}
               fieldTextStyle={styles2.fieldText}
            />
          </View>
          <View style={[styles.borderBottom, styles.marginTop10, {flexDirection: 'row', justifyContent: 'space-between'}]}>
            <Label_Field label={'EXPIRATION DATE'} onChange={this.onChange}
               placeholder={'00/00'}
               containerStyle={styles2.labelContainer}
               labelTextStyle={styles2.labelText}
               fieldTextStyle={styles2.fieldText}
            />
            <Label_Field label={'CVV'} onChange={this.onChange}
               placeholder={'123'}
               containerStyle={styles2.labelContainer}
               labelTextStyle={styles2.labelText}
               fieldTextStyle={styles2.fieldText}
            />
          </View>
          <View style={[styles.marginTop10]}>
            <Label_Field label={'CARDHOLDER NAME'} onChange={this.onChange}
               placeholder={'NAME'}
               containerStyle={styles2.labelContainer2}
               labelTextStyle={styles2.labelText}
               fieldTextStyle={styles2.fieldText}
            />
          </View>
        </View>

        <View style={styles.container2}>
        </View>

        <View style={{justifyContent: 'flex-end'}}>
          <ButtonComponent title={'Add PayPal'} width={'90%'}
          backgroundColor={GlobalConst.COLOR.LIGHTGREY} textColor={GlobalConst.COLOR.WHITE}
          onPress={() => navigate('AddPaymentScreen')}
          icon={
            <Image
              style={{width: GlobalConst.ICONSIZE, height: GlobalConst.ICONSIZE}}
              source={require('../../assets/paypal.png')}
            />
          }
          iconStyle={styles2.iconStyle}
          />
          <ButtonComponent title={'ADD CARD'} width={'90%'} marginTop={20} marginBottom={20}
          backgroundColor={GlobalConst.COLOR.DARKGREEN} textColor={GlobalConst.COLOR.WHITE}
          />
        </View>

      </ScrollView>
    );
  }
}

const styles2 = StyleSheet.create({
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  },
  labelContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelText:{
    color: GlobalConst.COLOR.DARKGREY,
    fontWeight:'bold'
  },
  fieldText:{
    color: GlobalConst.COLOR.LIGHTGREY,
    fontSize: 18,
    marginLeft: 20
  },
  iconStyle:{
    position: 'absolute',
    left: 10
  }
});

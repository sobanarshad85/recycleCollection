import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import GlobalConst from '../../config/GlobalConst';
import styles from '../../styles/GlobalStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import ArrowBackComponent from '../others/ArrowBackComponent';


export default class SupportScreen extends Component<Props> {
  constructor(props) {
    super(props);
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

  render() {
    return (
      <View style={styles.container}>

        <View style={[styles.container1_5, styles.justifyFlexEnd]}>
          <Text style={[styles.bigText, styles.margin10, styles.textCenter, styles.black]}>
            24/7 Customer Care
          </Text>
          <Text style={[styles.smallText, styles.margin10, styles.textCenter, styles.grey]}>
            Never wait in line. Email us instead.
          </Text>
        </View>

        <View style={[styles.container, styles.marginTop20]}>
          <TouchableOpacity style={[styles.container0, styles.row, styles.alingCenter, styles.borderVertical, styles.padding20]}>
            <Icon name="folder-open" color={GlobalConst.COLOR.BLACK} size={GlobalConst.ICONSIZE} />
            <Text style={[styles.smallText, styles.black, styles.marginLeft10]}>
              ALL ENQUIRIES
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.container0, styles.row, styles.alingCenter, styles.borderBottom, styles.padding20]}>
            <Icon name="bookmark" color={GlobalConst.COLOR.BLACK} size={GlobalConst.ICONSIZE} />
            <Text style={[styles.smallText, styles.black, styles.marginLeft10]}>
              ACTIVE ORDERS ONLY
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container3}>
        </View>

      </View>
    );
  }
}

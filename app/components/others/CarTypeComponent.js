import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import { styles, styles2, GlobalConst, Icon, TextInputComponent,
        ButtonComponent, ListComponent } from '../../config/imports';



export default class CarTypeComponent extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = ({
      text: '',
      icon: ''
    });
  }

  // componenDidMount(){
  //   this.setState({icon: this.props.icon})
  // }

  render() {
    return (
        <View>
          <Text style={[styles2.fontStyle(14, 'bold', this.props.textColor), styles.selfCenter, styles2.marginVertical(5)]}>{this.props.title1}</Text>
          <View style={styles.center}>
            <Image
              style={styles3.iconContainer}
              source={this.props.iconName}
            />
          </View>
          <Text style={[styles2.fontStyle(13, 'bold', 'black'), styles.selfCenter, styles2.marginVertical(5)]}>{this.props.title2}</Text>
          <Text style={[styles2.fontStyle(13, 'bold', GlobalConst.COLOR.DARKGREY), styles.selfCenter, styles2.marginVertical(5)]}>{this.props.title3}</Text>
        </View>
    );
  }
}


const styles3 = StyleSheet.create({
  iconContainer: {
    width: 40,
    height: 40,
    resizeMode: 'contain'
  }
});

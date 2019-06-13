import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import { styles, styles2, GlobalConst, Icon, TextInputComponent,
        ButtonComponent, ListComponent } from '../../config/imports';



export default class SearchComponent extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = ({
      text: '',
    });
  }

  render() {
    return (
        <View style={styles.row}>
          <Icon name={this.props.icon} style={[styles3.iconContainer, this.props.iconStyle]} color={'#000'} size={this.props.iconSize}/>
          <TextInput
            placeholder={this.props.placeholder}
            style={[styles3.textInput, this.props.inputStyle]}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
        </View>
    );
  }
}

const styles3 = StyleSheet.create({
  textInput: {
    height: 50,
    width: '90%',
    backgroundColor: GlobalConst.COLOR.LIGHTGREY2,
    fontSize: 20,
    padding: 10,
    paddingLeft: 50
  },
  iconContainer:{
    position: 'absolute',
    top: '20%',
    left: '5%',
    zIndex: 100
  }
});

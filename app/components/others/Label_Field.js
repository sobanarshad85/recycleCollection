import React, {Component} from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';
import GlobalConst from '../../config/GlobalConst';
import styles from '../../styles/GlobalStyles';


export default class Label_Field extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = ({
      fieldValue: '',
    });
    this.changeCallback = this.changeCallback.bind(this);
  }

  async changeCallback(text){
    await this.setState({fieldValue: text});
    return this.state.fieldValue;
  }

  render() {
    return (
      <View style={this.props.containerStyle}>
          <Text style={this.props.labelTextStyle}>
            {this.props.label}
          </Text>
          <TextInput
            placeholder={this.props.placeholder}
            style={this.props.fieldTextStyle}
            multiline = {true}
            numberOfLines = {this.props.noOfLines}
            onChangeText={(fieldValue) =>  this.props.onChange( this.changeCallback(fieldValue) )}
            value={this.state.fieldValue}
          />
      </View>
    );
  }
}

import React, {Component} from 'react';
import {TextInput, View} from 'react-native';
import GlobalConst from '../../config/GlobalConst';
import styles from '../../styles/GlobalStyles';


export default class TextInputComponent extends Component<Props> {
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
        <TextInput
          placeholder={this.props.placeholder}
          style={[styles.textInput, styles.borderBottom, styles.selfCenter, this.props.styles]}
          onChangeText={(fieldValue) =>  this.setState({fieldValue})}
          value={this.state.fieldValue}
        />
    );
  }
}

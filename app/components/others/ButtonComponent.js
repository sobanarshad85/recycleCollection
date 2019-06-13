import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import GlobalConst from '../../config/GlobalConst';
import styles from '../../styles/GlobalStyles';


export default class ButtonComponent extends Component<Props> {
  render() {
    return (
      <View>
      {this.props.isModal ?
        <View
        style={[this.props.style, styles.border, styles.center, styles.padding10, styles.row,
          styles.selfCenter, {width: this.props.width, marginTop: this.props.marginTop,
          marginBottom: this.props.marginBottom, backgroundColor: this.props.backgroundColor}]}
        >
          <View style={this.props.iconStyle}>{this.props.icon}</View>
          <Text style={[this.props.textStyle, styles.normalTextBold, {color: this.props.textColor}]}>
            {this.props.title}
          </Text>
        </View>
        :
        <TouchableOpacity
        style={[this.props.style, styles.border, styles.center, styles.padding10, styles.row,
          styles.selfCenter, {width: this.props.width, marginTop: this.props.marginTop,
          marginBottom: this.props.marginBottom, backgroundColor: this.props.backgroundColor}]}
        onPress={this.props.onPress}>
          <View style={this.props.iconStyle}>{this.props.icon}</View>
          <Text style={[this.props.textStyle, styles.normalTextBold, {color: this.props.textColor}]}>
            {this.props.title}
          </Text>
        </TouchableOpacity>
      }
      </View>
    );
  }
}

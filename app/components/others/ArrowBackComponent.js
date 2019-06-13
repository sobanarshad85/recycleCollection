import React, {Component} from 'react';
import {} from 'react-native';
import GlobalConst from '../../config/GlobalConst';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class ArrowBackComponent extends Component<Props> {
  render() {
    return (
        <Icon
          onPress={this.props.onPress}
          name={"arrow-left"}
          style={this.props.style}
          color={GlobalConst.COLOR.BLACK}
          size={GlobalConst.ICONSIZE}
        />
    );
  }
}

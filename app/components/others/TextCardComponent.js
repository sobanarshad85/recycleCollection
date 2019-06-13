import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
import { styles, styles2, GlobalConst, Icon, ArrowBackComponent } from '../../config/imports';


export default class TextCardComponent extends Component<Props> {
  render() {
    return (
      <TouchableOpacity style={styles3.container} onPress={this.props.onPress}>

        <View style={[styles2.container(0.2), styles.row, styles.alingCenter, styles.justifySpaceBetween, styles.marginBottom10]}>
          <View style={[styles.row, styles.alingCenter]}>
            <Text style={styles.bigTextBold}>{this.props.title1}</Text>
            <Text style={styles2.fontStyle(15, 'normal', GlobalConst.COLOR.DARKGREY)}>{this.props.title2}</Text>
          </View>
          {this.props.title2Component}
        </View>

        <View style={[styles2.container(0.2), styles2.marginBottom(15), {flexDirection: this.props.dateDirection}]}>
          <View style={[styles.row, styles.alingCenter]}>
            <Icon
              onPress={() => this.props.navigation.navigate('PlaceholderScreen')}
              name={this.props.icon}
              color={GlobalConst.COLOR.BLACK}
              size={GlobalConst.ICONSIZE}
            />
            {this.props.distanceTitleRequired ?
              <Text style={styles2.fontStyle(16, 'normal', 'black')}>{this.props.distanceTitle}</Text>
              : null}
            <Text style={[styles.normalText, styles2.marginHorizontal(10)]}>{this.props.seaterTitle}</Text>
          </View>
          <View style={styles.justifyCenter}>
            <Text style={styles2.fontStyle(15, 'normal', GlobalConst.COLOR.DARKGREY)}>{this.props.date}</Text>
          </View>
        </View>

        {this.props.descriptionRequired ?
          <View style={[styles2.container(0.3), styles2.marginBottom(20)]}>
            <Text>{this.props.description}</Text>
          </View>
        :
          null
        }

        {this.props.statusRequired ?
          <View style={[styles2.container(0.3), styles2.marginBottom(20), styles.row, styles.justifyEvenly]}>
            <View style={[styles2.container(1), styles.center, styles.padding10]}>
              <Text style={[styles2.fontStyle(15, 'normal', GlobalConst.COLOR.DARKGREY), styles.marginBottom10]}>Status</Text>
              <Text style={styles2.fontStyle(15, 'bold', GlobalConst.COLOR.DARKGREEN)}>{this.props.status}</Text>
            </View>
            <View style={[styles2.container(1), styles.center, styles.padding10]}>
              <Text style={[styles2.fontStyle(15, 'normal', GlobalConst.COLOR.DARKGREY), styles.marginBottom10]}>Fare</Text>
              <Text style={styles2.fontStyle(15, 'bold', GlobalConst.COLOR.ORANGE)}>{this.props.fare}</Text>
            </View>
            <View style={[styles2.container(1), styles.center, styles.padding10]}>
              <Text style={[styles2.fontStyle(15, 'normal', GlobalConst.COLOR.DARKGREY), styles.marginBottom10]}>Card</Text>
              <Text style={styles2.fontStyle(15, 'bold', GlobalConst.COLOR.BLACK)}>{this.props.cardNum}</Text>
            </View>
          </View>
          :
          null
        }

        <View style={[styles2.container(0.3), styles.row, styles.borderVertical]}>
          <View style={[styles2.container(1), styles.center, styles.padding10, styles.borderLeft]}>
            <Text style={[styles2.fontStyle(15, 'bold', GlobalConst.COLOR.DARKGREEN), styles.marginBottom10]}>Pickup Location</Text>
            <Text style={styles2.fontStyle(15, 'normal', GlobalConst.COLOR.DARKGREY)}>{this.props.pickupLocation}</Text>
          </View>
        </View>

      </TouchableOpacity>
    );
  }
}

const styles3 = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    marginHorizontal: 15
  },
});

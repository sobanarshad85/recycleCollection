import React, {Component} from 'react';
import {StyleSheet, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import firebase from 'firebase';
import firestore from 'firebase/firestore';
import { withNavigation } from 'react-navigation';
import { styles, styles2, GlobalConst, Icon  } from '../../config/imports';
import AsyncStorage from '@react-native-community/async-storage';


class SignOutComponent extends Component<Props> {
  constructor(props) {
    super(props);
    this.signout = this.signout.bind(this);
  }

  signout(){
    let that = this;
    firebase.auth().signOut().then(function() {
      AsyncStorage.removeItem(GlobalConst.STORAGE_KEYS.userId).then((data) => {
        that.props.navigation.navigate('AuthLoading');
     });

    }).catch(function(error) {
      console.log(error);
    });
  }

  render() {
    return (
      <TouchableOpacity style={[styles.container2, styles.center, styles2.marginTop(20)]}
        onPress={() => this.signout() }>
         <Text style={[styles2.fontStyle(20, 'normal', GlobalConst.COLOR.DARKGREEN), styles.selfCenter, styles2.marginTop(5), styles2.marginBottom(20)]}>
          LOG OUT
         </Text>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(SignOutComponent);

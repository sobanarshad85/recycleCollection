import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import { styles, styles2, GlobalConst, Icon, TextInputComponent, ArrowBackComponent,
        ButtonComponent, ListComponent } from '../../config/imports';
import { withNavigation } from 'react-navigation';
import { _storeData, _retrieveData } from '../../backend/AsyncFuncs';



class UserProfileImage extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = ({
      userType: '',
    });
  }

  componentDidMount(){
    _retrieveData(GlobalConst.STORAGE_KEYS.userType).then((userType) => {
      this.setState({userType: userType})
    });
  }


  render() {
    return (
        <TouchableOpacity style={[styles.container2, styles.center, styles2.marginTop(20)]}
          onPress={() => this.props.navigation.navigate('ProfileScreen',{name: 'Balawal Virk', location: 'London, United Kingdom'}) }>
          <Icon
            name={"user-circle"}
            color={GlobalConst.COLOR.GREY}
            size={GlobalConst.ICONSIZEBIG}
          />
          {this.state.userType == 'collector' ?
            <Text style={[styles2.fontStyle(20, 'normal', GlobalConst.COLOR.DARKGREEN), styles.selfCenter, styles2.marginTop(5), styles2.marginBottom(20)]}>
              BALAWAL VIRK
            </Text>
          :
           <Text style={[styles2.fontStyle(20, 'normal', GlobalConst.COLOR.DARKGREEN), styles.selfCenter, styles2.marginTop(5), styles2.marginBottom(20)]}>
            BALAWAL VIRK - Pts
           </Text>
         }
        </TouchableOpacity>

    );
  }
}

export default withNavigation(UserProfileImage);

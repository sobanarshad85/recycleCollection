import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground, KeyboardAvoidingView, TextInput} from 'react-native';
import GlobalConst from '../../config/GlobalConst';
import styles from '../../styles/GlobalStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import ArrowBackComponent from '../others/ArrowBackComponent';
import TextInputComponent from '../others/TextInputComponent';
import ButtonComponent from '../others/ButtonComponent';
import ImagePickerComponent from '../others/ImagePickerComponent';
import ShareComponent from '../others/ShareComponent';




export default class ProfileScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = ({
      fieldValue: '',
    });
    this.onChange = this.onChange.bind(this);
    this.focusEmailInput = React.createRef();
    this.focusPhoneInput = React.createRef();
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

  onChange(text){
    //console.log(text);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.scrollviewContainer} contentContainerStyle={styles.scrollviewContainer}>

        <ImageBackground style={styles.container3} resizeMode={'contain'} source={require('../../assets/upload_image.png')}>
          <ImagePickerComponent onChange={(imageData) => this.onChange(imageData)}/>
        </ImageBackground>

        <View style={[styles.container]}>
          <TextInput
            placeholder={'Username'}
            style={[styles.textInput, styles.borderBottom, styles.selfCenter]}
            onChangeText={(fieldValue) =>  this.setState({fieldValue})}
            value={this.state.fieldValue}
            onSubmitEditing={() => this.focusEmailInput.focus() }
          />
          <TextInput
            placeholder={'Email address'}
            style={[styles.textInput, styles.borderBottom, styles.selfCenter]}
            onChangeText={(fieldValue) =>  this.setState({fieldValue})}
            value={this.state.fieldValue}
            ref={data => {this.focusEmailInput = data}}
            onSubmitEditing={() => this.focusPhoneInput.focus() }
          />
          <TextInput
            placeholder={'Phone'}
            style={[styles.textInput, styles.borderBottom, styles.selfCenter]}
            onChangeText={(fieldValue) =>  this.setState({fieldValue})}
            value={this.state.fieldValue}
            ref={data => {this.focusPhoneInput = data}}
          />
          <TextInput
            placeholder={'Qty Collected'}
            editable={false}
            style={[styles.textInput, styles.borderBottom, styles.selfCenter]}
            onChangeText={(fieldValue) =>  this.setState({fieldValue})}
            value={'Qty Collected'}
          />
          <TextInput
            placeholder={'Pts'}
            editable={false}
            style={[styles.textInput, styles.borderBottom, styles.selfCenter]}
            onChangeText={(fieldValue) =>  this.setState({fieldValue})}
            value={'Pts'}
          />
        </View>

        <View style={styles.container}>
          <ShareComponent _flex={0.85} shareComponent={
            <ButtonComponent title={'SHARE'} width={'80%'} marginTop={30} isModal={true}
            backgroundColor={GlobalConst.COLOR.WHITE} textColor={GlobalConst.COLOR.BLACK}
            /> }
          />
          <View style={styles.container}>
            <ButtonComponent title={'SAVE'} width={'80%'} marginTop={0}
            backgroundColor={GlobalConst.COLOR.DARKGREEN} textColor={GlobalConst.COLOR.WHITE}
            />
          </View>
        </View>

      </ScrollView>
    );
  }
}

const styles2 = StyleSheet.create({
  cameraIconContainer: {
    position: 'absolute',
    top: '63%',
    left: '56%',
  },
});

import React, { Component } from "react";
import {
    Keyboard, Text, ScrollView, StyleSheet, View, Dimensions, Platform, TextInput,
    TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Button, TouchableOpacity,
    ActivityIndicator, Switch
  } from 'react-native';
import { connectFirebase } from '../../backend/firebase/utility';
import { signUp } from '../../backend/firebase/auth';
import { ButtonComponent, GlobalConst } from '../../config/imports';


export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      loader: false,
      firstName: '',
      lastName: '',
      country: '',
      email: '',
      password: '',
      userType: 'user',
      switch: true
    });
    this.onPress = this.onPress.bind(this);
  }

  componentDidMount(){
     connectFirebase();
  }

  async onPress(){
    await this.setState({ loader: true });
    if(!this.state.switch)
      await this.setState({ userType: 'collector' });
    else
      await this.setState({ userType: 'user' });
    alert(this.state.userType);
    await signUp(this.state.email, this.state.password, this.state.userType);
    await this.setState({ loader: false });
    Alert.alert(
      '',
      'Your account is setup :-)',
      [
        {text: 'OK', onPress: () => this.props.navigation.goBack()},
      ],
    )
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.containerView}>
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

          <View style={styles.loginScreenContainer}>
            <View style={styles.loginFormView}>

              <Text style={styles.logoText}>Recycling App</Text>

              <TextInput placeholder="First Name" placeholderColor="#c4c3cb" style={styles.loginFormTextInput}
                onChangeText={(firstName) => this.setState({firstName})} value={this.state.firstName} />

              <TextInput placeholder="Last Name" placeholderColor="#c4c3cb" style={styles.loginFormTextInput}
                onChangeText={(lastName) => this.setState({lastName})} value={this.state.lastName} />

              <TextInput placeholder="Email address" placeholderColor="#c4c3cb" style={styles.loginFormTextInput}
                onChangeText={(email) => this.setState({email})} value={this.state.email} />

              <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput}
                onChangeText={(password) => this.setState({password})} secureTextEntry={true}/>

            </View>

            <ButtonComponent title={'SIGN UP'} width={'85%'} marginTop={10} marginBottom={2}
            backgroundColor={GlobalConst.COLOR.DARKGREEN} textColor={'#fff'}
            onPress={() => this.onPress()} />
            {this.state.loader ? <ActivityIndicator size="large" color="#0000ff" /> : null}

            <View style={styles.switchContainer}>
              <Text style={styles.switchText}>Collectector</Text>
              <Switch
                 onValueChange = {() => this.setState({switch: !this.state.switch})}
                 value={this.state.switch}
                 />
              <Text style={styles.switchText}>User</Text>
            </View>

          </View>

        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}



const styles = StyleSheet.create({
  containerView: {
    flex: 1,
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    color: 'black',
    marginTop: 20,
    marginBottom: Dimensions.get('window').height/20,
    textAlign: 'center',
  },
  loginFormView: {
    flex: 1,
    alignItems: 'center'
  },
  loginFormTextInput: {
    fontSize: 18,
    textAlign: 'left',
    width: 320,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderColor: '#c0c3c3',
    borderWidth: 1,
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 10,
    color: "#000000",
  },
  loginButton: {
    backgroundColor: Platform.OS === 'ios' ? '#257BC4' : 'rgba(0,0,0,0)',
    borderRadius: 5,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: Dimensions.get('window').width/10,
    marginTop: 20,
    marginHorizontal: 60
  },
  termsConditionsContainers:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  switchContainer:{
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  switchText:{
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginVertical: 40
  }
});

import React, { Component } from "react";
import {Keyboard, Text, ScrollView, StyleSheet, View, Dimensions, Platform, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Button, TouchableOpacity} from 'react-native';


export default class ForgotPassswordScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholderState: '',
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.containerView}>
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginScreenContainer}>
            <View style={styles.loginFormView}>
              <TextInput placeholder="Your name" placeholderColor="#c4c3cb" style={styles.loginFormTextInput}
                onChangeText={(lastName) => this.setState({lastName})} value={this.state.lastName} />
              <TextInput placeholder="Registered phone number" placeholderColor="#c4c3cb" style={styles.loginFormTextInput}
                onChangeText={(firstName) => this.setState({firstName})} value={this.state.firstName} />
              <TextInput placeholder="Registered email address" placeholderColor="#c4c3cb" style={styles.loginFormTextInput}
                onChangeText={(email) => this.setState({email})} value={this.state.email} />
              <View style={styles.loginButton}>
                <Button
                  onPress={() => alert('A link has been sent to your email and phone number')}
                  title="Request a new password"
                  color={Platform.OS === 'ios' ? '#ffffff' : '#257BC4'}
                />
              </View>
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
    backgroundColor: '#F5FCFF',
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
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginHorizontal: Dimensions.get('window').width/10,
    marginVertical: 10,
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
});

import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, KeyboardAvoidingView,
  ActivityIndicator, Image, TextInput, BackHandler, TouchableOpacity,
  Dimensions, SafeAreaView, Text
} from 'react-native';
import {_storeData, _retrieveData} from '../../backend/AsyncFuncs';
import { connectFirebase } from '../../backend/firebase/utility';
import { signIn, getCurrentUserId } from '../../backend/firebase/auth';
import { ButtonComponent, GlobalConst } from '../../config/imports';


export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      email: '',
      password: '',
      loader: false,
      focusPasswordInput: false
    });
    this.onLoginFunc = this.onLoginFunc.bind(this);
    this.focusPasswordInput = React.createRef();
  }

  componentDidMount(){
    connectFirebase();
  }

  async onLoginFunc() {
    if(this.state.email == '' || this.state.password == ''){
      alert('Email and password fields cannot be empty')
    }
    else{
      this.setState({loader: true});
      let callback = await signIn(this.state.email, this.state.password);
      this.setState({loader: false});
      if(callback){
        let userId = await getCurrentUserId();
        await _storeData(GlobalConst.STORAGE_KEYS.userId, userId);
        const userId2 = await _retrieveData(GlobalConst.STORAGE_KEYS.userId);
        this.props.navigation.navigate('HomeScreen');
      }

    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView contentContainerStyle={styles.container} style={styles.container} keyboardVerticalOffset={-64}>
        <ScrollView>

            <View style={styles.center}>
              <View style={{ paddingTop: '2%'}}>
                <Image style={styles.logo} resizeMode="contain" source={require('../../assets/logo.png')} />
              </View>
              <View style={{ paddingVertical: 5 }}>
                <Text style={{ fontSize: 30, color: '#6b6b6b' }}>Sign in</Text>
              </View>
            </View>

            <View style={styles.center}>
              <TextInput placeholder='Email' keyboardAppearance='default' autoCapitalize='none'
                returnKeyType='next' style={styles.textbox} autoCorrect={false}
                onChangeText={email => this.setState({ email })}
                onSubmitEditing={() => this.focusPasswordInput.focus() }
              />
              <TextInput placeholder='Password' secureTextEntry returnKeyType='go'
                keyboardAppearance='default' style={styles.textbox}
                onChangeText={password => this.setState({ password })}
                ref={data => {this.focusPasswordInput = data}}
              />
            </View>

            <View style={styles.buttonContianer}>

              <ButtonComponent title={'SIGN IN'} width={'80%'} marginTop={20}
              backgroundColor={GlobalConst.COLOR.DARKGREEN} textColor={'#fff'}
              onPress={() => this.onLoginFunc()} />

              <ButtonComponent title={'SIGN UP'} width={'80%'} marginTop={10} marginBottom={0}
              backgroundColor={GlobalConst.COLOR.DARKGREEN} textColor={'#fff'}
              onPress={() => navigate('SignUpScreen')} />

              {this.state.loader ? <ActivityIndicator size="large" color="#0000ff" /> : null}

              <View style={styles.center}>
                <TouchableOpacity onPress={() => navigate('ForgotPasswordScreen')}>
                  <Text style={{ fontSize: 15, color: '#6b6b6b' }}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>

            </View>

          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  center: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContianer: {
    flex: 0.3,
    justifyContent: 'center',
  },
  textbox: {
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
  logo: {
    width: Dimensions.get('window').width/1,
    height: Dimensions.get('window').height/5,
  },
  button: {
    backgroundColor: '#4A525E',
    width: 320,
    height: 50,
    marginBottom: 10
  }
});

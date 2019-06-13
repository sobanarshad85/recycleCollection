import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Platform, Button} from 'react-native';


export default class SignupVerificationScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.label}>Name:     </Text>
          <Text style={styles.text}>{this.props.navigation.state.params.firstName} </Text>
          <Text style={styles.text}>{this.props.navigation.state.params.lastName} </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Email:      </Text>
          <Text style={styles.text}>{this.props.navigation.state.params.email} </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Country:</Text>
          <Text style={styles.text}>{this.props.navigation.state.params.country} </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Phone:    </Text>
          <Text style={styles.text}>{this.props.navigation.state.params.phone} </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Verify code: </Text>
          <TextInput placeholder="Enter the code here" placeholderColor="#c4c3cb" style={styles.loginFormTextInput}
            onChangeText={(code) => this.setState({code})} value={this.state.code} />
        </View>
        <View style={styles.buttonContainer}>
        <Button
          onPress={() => alert('confirmed!')}
          title="Confirm"
          color={Platform.OS === 'ios' ? '#ffffff' : '#257BC4'}
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
  row: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 5,
  },
  label: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 17,
    color: 'grey',
    marginLeft: 10,
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    padding: 10,
  },
  buttonContainer: {
    flex: 0,
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 30,
    backgroundColor: Platform.OS === 'ios' ? '#257BC4' : 'rgba(0,0,0,0)',
  },
});

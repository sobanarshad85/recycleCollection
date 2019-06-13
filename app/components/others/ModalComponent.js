import React, {Component} from 'react';
import {StyleSheet, Modal, Text, SafeAreaView, TouchableHighlight, View, Alert, TouchableOpacity, Dimensions} from 'react-native';
import GlobalConst from '../../config/GlobalConst';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ModalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      visible: false,
    });
  }

  setModalVisible(visible) {
    this.setState({visible: visible});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <TouchableOpacity onPress={() => this.setState({ visible: true })}>{this.props.button}</TouchableOpacity>
        </View>
        <View style={styles.container2}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.visible}>
            <SafeAreaView style={styles.modalOuterContentContainer}>
              <View style={[styles.modalInnerContentContainer, {flex: 0.9}]}>
                <TouchableOpacity style={styles.close} onPress={() => {
                    this.setModalVisible(!this.state.visible);
                  }}>
                  <Icon name="close" color={'#000'} size={40}/>
                </TouchableOpacity>
                <View style={styles.modalContent}>
                  {this.props.modalComponent}
                </View>
              </View>
            </SafeAreaView>
          </Modal>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 20,
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 20,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  labelContainer: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
  },
  modalOuterContentContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalInnerContentContainer:{
//    flex: 0.5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: GlobalConst.COLOR.DARKGREEN,
    backgroundColor: '#ffffff',
    marginHorizontal: 5
  },
  close: {
    alignItems: "flex-end",
    padding: 10,
  },
  modalContent: {
    flex: 1,
  },
  labelText: {
    fontSize: 25,
    textAlign: 'center'
  }
})

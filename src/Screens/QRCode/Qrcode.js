import React, {Component} from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import QRCode from 'react-native-qrcode-svg';
import {RNCamera} from 'react-native-camera';

export default class qrcode extends Component {
  state = {
    modalVisible: false,
    cameraModalVisible: false,
  };

  onSuccess = e => {
    // Linking.openURL(e.data).catch(err =>
    //   console.error('An error occured', err),
    // );
    console.log(e);
    this.setState({cameraModalVisible: false});
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Modal
          animationType="slide"
          visible={this.state.modalVisible}
          onRequestClose={() => {
            // setmodal(true);
            this.setState({modalVisible: false});
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0,0,0,0.6)',
            }}>
            <QRCode value="https://www.google.com/" />
          </View>
        </Modal>
        <Modal
          animationType="slide"
          visible={this.state.cameraModalVisible}
          onRequestClose={() => {
            // setmodal(true);
            this.setState({cameraModalVisible: false});
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0,0,0,0.6)',
            }}>
            <QRCodeScanner onRead={this.onSuccess} />
          </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({modalVisible: true})}>
          <Text>Generate QR Code</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.setState({cameraModalVisible: true})}>
          <Text>Scan QR Code</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

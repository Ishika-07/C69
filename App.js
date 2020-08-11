import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BarcodeScreen from './screens/BarcodeScreen';

export default class App extends React.Component {
  render(){
    return (
      
        <BarcodeScreen />
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

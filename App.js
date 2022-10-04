import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import {colors} from './src/global/styles'
//wimport Login from './components/login'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle ="light-content"
        backgroundcolor
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

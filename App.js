import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './app/components/credentials/Welcome';
import Init from './app/components/navigation/Stack';

export default class App extends React.Component {
  render() {
    return (
      <Init />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

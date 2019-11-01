import React, { Component } from 'react';
import { default as AppRoutes } from './src/AppRoutes';
import { View } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppRoutes />
      </View>
    );
  }
}

export default App;
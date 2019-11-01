import React, { Component } from 'react';
import { default as AppRoutes } from './src/AppRoutes';
import { View } from 'react-native';
// import SplashScreen from 'react-native-splash-screen'

class App extends Component {
  componentDidMount() {
    // SplashScreen.hide();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppRoutes />
      </View>
    );
  }
}

export default App;
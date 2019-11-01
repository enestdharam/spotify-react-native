import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { style } from './AllTracks.style';

class Tracks extends Component<any> {
  render() {
    return (
      <View>
        <Text style={style.heading}> Songs </Text>
      </View>
    );
  }
}
export default Tracks;

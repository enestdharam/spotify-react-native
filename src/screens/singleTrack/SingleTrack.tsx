import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { style } from './SingleTrack.style';

class SingleTrack extends Component<any> {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={style.heading}> Songs </Text>
        <TouchableOpacity
          style={{ margin: 10 }}
          onPress={() => null}>
          <Image
            style={style.songImage}
            source={{ uri: 'https://vignette.wikia.nocookie.net/whatever-you-want/images/1/19/Mp3-Hindi-Songs-FunRocker.Com_2.jpg/revision/latest?cb=20130531025809' }}
          />
          <Text style={style.text}>Name</Text>
          <Text style={style.text}>Artist Name</Text>
          <Text style={style.text}>Album</Text>
          <Text style={style.text}>Duration</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default SingleTrack;

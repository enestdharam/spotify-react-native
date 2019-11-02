

import { Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { style } from './SingleTrackView.style';

type Props = {
  imageUrl: string;
  title: string;
  artistName: string;
  albumName: string;
  durationInMs: number;
}

export const SingleTrackView: React.SFC<Props> = ({ imageUrl, title, artistName, albumName, durationInMs }) => {
  return (
    <TouchableOpacity
      style={{ margin: 10 }}
      onPress={() => null}>
      <Image style={style.songImage} source={{ uri: imageUrl }} />
      <Text style={style.text}>Name: {title}</Text>
      <Text style={style.text}>Artist Name: {artistName}</Text>
      <Text style={style.text}>Album Name: {albumName}</Text>
      <Text style={style.text}>Duration: {durationInMs}</Text>
    </TouchableOpacity>
  );
};
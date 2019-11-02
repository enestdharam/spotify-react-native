
import { Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { style } from './TracksListView.style';
import { TracksModel } from '../../../models/index';

type Props = {
    data: TracksModel
    onPress?: () => Function;
}
export const TracksListView: React.SFC<Props> = ({ data, onPress }) => {
    return (
        <TouchableOpacity
            style={{ margin: 10, flex: 1, flexDirection: 'row' }}
            onPress={() => onPress()}>
            <Image
                style={style.imageSize}
                source={{ uri: data.imageUrl }} />
            <View>
                <Text style={style.title}>SONG: {data.name}</Text>
                <Text style={style.title}>ARTIST: {data.artistName}</Text>
                <Text style={style.title}>POPULARITY: {data.popularity}</Text>
            </View>
        </TouchableOpacity>
    );
};
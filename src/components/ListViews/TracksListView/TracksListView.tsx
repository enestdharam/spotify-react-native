
import { Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { style } from './TracksListView.style';
import { TracksModel } from 'models';

type Props = {
    data: TracksModel
    onPress?: () => Function;
}
export const TracksListView: React.SFC<Props> = ({ data, onPress }) => {
    return (
        <TouchableOpacity
            style={{ margin: 10 }}
            onPress={() => onPress()}>
            <Image
                style={style.imageSize}
                source={{ uri: data.imageUrl }} />
            <Text style={style.title}>{name}</Text>
            <Text style={style.title}>{data.artistName}</Text>
            <Text style={style.title}>{data.popularity}</Text>
        </TouchableOpacity>
    );
};
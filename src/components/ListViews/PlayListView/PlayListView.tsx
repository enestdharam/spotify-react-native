

import { Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { style } from './PlayListView.style';
import { PlayListModel } from '../../../models/index';

type Props = {
    data: PlayListModel
    onPress?: () => Function;
}

export const PlayListView: React.SFC<Props> = ({ data, onPress }) => {
    return (
        <TouchableOpacity
            style={{ margin: 10 }}
            onPress={() => onPress()}>
            <Image
                style={style.imageSize}
                source={{ uri: data.images[0].url }} />
            <Text style={style.title}>
                {data.name}
            </Text>
            <Text style={style.title}>
                total trakcs:{data.tracks.total}
            </Text>
        </TouchableOpacity>
    );
};
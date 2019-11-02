

import { Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { style } from './PlayListView.style';
import { PlayListModel } from '../../../models/index';

type Props = {
    data: PlayListModel
    onPress?: () => Function;
}

export const PlayListView: React.SFC<Props> = ({ data, onPress }) => {
    const imageUrl = data.images.length ? data.images.length[0] : '';
    return (
        <TouchableOpacity
            style={{ margin: 10 }}
            onPress={() => onPress()}>
            <Image
                style={style.imageSize}
                source={{ uri: imageUrl }} />
            <Text style={style.title}>
                {data.name}
            </Text>
            <Text style={style.title}>
                total trakcs:{data.tracks.total}
            </Text>
        </TouchableOpacity>
    );
};
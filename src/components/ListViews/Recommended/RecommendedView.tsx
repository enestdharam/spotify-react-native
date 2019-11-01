

import { Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { style } from './Recommended.style';

type Props = {
    imageUrl: string;
    title: string;
    onPress?: () => Function;
}

export const Recommended: React.SFC<Props> = ({ imageUrl, title, onPress }) => {
    return (
        <TouchableOpacity
            style={{ margin: 10 }}
            onPress={() => onPress()}>
            <Image
                style={style.imageSize}
                source={{ uri: imageUrl }} />
            <Text style={style.title}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};
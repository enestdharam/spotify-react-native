

import { Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import {style} from './Recommended.style';

type Props = {
    imageUrl: string;
    title: string;
    onClick?: () => any;
}
export const Recommended: React.SFC<Props> = ({ imageUrl, title, onClick }) => {

    return (
        <TouchableOpacity
            style={{ margin: 10 }}
            onPress={() => onClick()}>
            <Image
                style={style.imageSize}
                source={{ uri: imageUrl }} />
            <Text 
            style={style.title}>{title}</Text>
        </TouchableOpacity>
    );
};
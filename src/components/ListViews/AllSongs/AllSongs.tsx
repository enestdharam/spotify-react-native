
import { Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { style } from './AllSongs.style';

type Props = {
    imageUrl: string;
    name: string;
    artistName: string;
    popularity: string;
    onClick?: () => any;
}
export const AllSongs: React.SFC<Props> = ({ imageUrl, name, artistName, popularity, onClick }) => {
    return (
        <TouchableOpacity
            style={{ margin: 10 }}
            onPress={() => onClick()}>
            <Image
                style={style.imageSize}
                source={{ uri: imageUrl }} />
            <Text style={style.title}>{name}</Text>
            <Text style={style.title}>{artistName}</Text>
            <Text style={style.title}>{popularity}</Text>
        </TouchableOpacity>
    );
};
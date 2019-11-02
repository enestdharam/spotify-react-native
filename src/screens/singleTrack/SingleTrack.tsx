import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { computed } from 'mobx';
import { observer } from 'mobx-react';
import { TracksModel } from '../../models/index';
import { style } from './SingleTrack.style';

type Props = {
    navigation: any;
}

@observer
class SingleTrack extends Component<Props> {

    @computed
    get currentTrack(): TracksModel {
        const { track } = this.props.navigation.state.params;
        debugger;
        return track;
    }

    render() {
        const { imageUrl, name, artistName, albumName, durationInMs } = this.currentTrack;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={style.heading}> Track detail</Text>
                <TouchableOpacity
                    style={{ margin: 10 }}
                    onPress={() => null}>
                    <Image style={style.songImage} source={{ uri: imageUrl }} />
                    <Text style={style.text}>Name: {name}</Text>
                    <Text style={style.text}>Artist Name: {artistName}</Text>
                    <Text style={style.text}>Album Name: {albumName}</Text>
                    <Text style={style.text}>Duration: {durationInMs}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default SingleTrack;

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { computed } from 'mobx';
import { observer } from 'mobx-react';
import { TracksModel } from '../../models/index';
import { style } from './SingleTrack.style';
import { SingleTrackView } from '../../components';

type Props = {
    navigation: any;
}

@observer
class SingleTrack extends Component<Props> {

    @computed
    get currentTrack(): TracksModel {
        const { track } = this.props.navigation.state.params;
        return track;
    }


    render() {
        const { imageUrl, name, artistName, albumName, durationInMs } = this.currentTrack;
        return (
            <View style={style.container}>
                <Text style={style.heading}> Track detail</Text>
                <SingleTrackView
                    imageUrl={imageUrl}
                    title={name}
                    artistName={artistName}
                    albumName={albumName}
                    durationInMs={durationInMs}
                />
            </View>
        );
    }
}
export default SingleTrack;

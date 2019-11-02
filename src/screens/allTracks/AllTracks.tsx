import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { computed, observable } from 'mobx';
import { UserStore } from '../../store/User.store';
import { dataService } from '../../services/Data.service';
import { style } from './AllTracks.style';
import { TracksListView } from '../../components/index';
import { TracksModel } from '../../models/index';

type Props = {
  userStore: UserStore;
  navigation: any
};

@inject('userStore')
@observer
class AllTracks extends Component<Props> {
  @observable isLoading: boolean = false;


  @computed
  get playListName(): string {
    const { playList } = this.props.navigation.state.params
    return playList.name;
  }

  componentDidMount() {
    const { playList } = this.props.navigation.state.params
    this.isLoading = true;
    dataService
      .getTracksLists(playList.id)
      .then((response: TracksModel[]) => {
        this.isLoading = false;
        this.props.userStore.setTrackslists(response);
        debugger;
      })
      .catch(error => {
        this.isLoading = false;
      });
  }

  @computed
  get trackslist(): TracksModel[] {
    return this.props.userStore.trackslists;
  }

  render() {
    return (
      <View>
        <Text style={style.heading}>{this.playListName}</Text>
        {
          this.isLoading ? <ActivityIndicator /> :
            <FlatList<TracksModel>
              keyExtractor={(item, i) => item.id.toString()}
              data={this.trackslist}
              renderItem={({ item }) => (
                <TracksListView
                  data={item}
                  onPress={() => this.props.navigation.navigate('SingleTrack', { track: item })} />
              )}
            />
        }
      </View>
    );
  }
}
export default AllTracks;

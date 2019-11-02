import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { computed, observable } from 'mobx';
import { UserStore } from '../../store/User.store';
import { dataService } from '../../services/Data.service';
import { style } from './Home.style';
import { PlayListView } from '../../components/index';
import { PlayListModel } from '../../models/index';

type Props = {
  userStore: UserStore;
  navigation: any;
};

@inject('userStore')
@observer
class Home extends Component<Props> {
  @observable isLoading: boolean = false;

  componentDidMount() {
    this.isLoading = true;
    dataService
      .getPlayLists()
      .then((response: PlayListModel[]) => {
        this.isLoading = false;
        this.props.userStore.setPlayList(response);
      })
      .catch(error => {
        this.isLoading = false;
      });
  }

  @computed
  get playlists(): PlayListModel[] {
    return this.props.userStore.playlists;
  }


  render() {
    return (
      <View>
        <Text style={style.heading}>Recommended Playlists</Text>
        {
          this.isLoading ? <ActivityIndicator /> :
            <FlatList<PlayListModel>
              keyExtractor={(item, i) => item.id.toString()}
              data={this.playlists}
              renderItem={({ item }) => (
                <PlayListView
                  data={item}
                  onPress={() => this.props.navigation.navigate('Tracks', { playList: item })} />
              )}
            />
        }
      </View>
    );
  }
}
export default Home;

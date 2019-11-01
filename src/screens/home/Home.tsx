import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { computed, observable } from 'mobx';
import { UserStore } from '../../store/User.store';
import { dataService } from '../../services/Data.service';
import { style } from './Home.style';
import { Recommended } from 'components';

type Props = {
  userStore: UserStore;
  navigation: any
};

@inject('userStore')
@observer
class Home extends Component<Props> {
  @observable isLoading: boolean = false;

  componentDidMount() {
    this.isLoading = true;
    dataService
      .getPlayLists()
      .then(response => {
        this.isLoading = false;
        this.props.userStore.setPlayList(response);
      })
      .catch(error => {
        this.isLoading = false;
      });
  }

  @computed
  get playlists(): any[] {
    return this.props.userStore.playlists;
  }

  render() {
    return (
      <View>
        <Text style={style.heading}>Recommended Songs</Text>
        {
          this.isLoading ? <ActivityIndicator /> :
            <FlatList
              keyExtractor={item => item.id}
              data={this.playlists}
              renderItem={({ item }) => (
                <Recommended
                  title={item.name}
                  imageUrl="fsdfsd"
                  onPress={() => this.props.navigation.native('Tracks')} />
              )}
            />
        }
      </View>
    );
  }
}
export default Home;

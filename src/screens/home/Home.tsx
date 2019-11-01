import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { View, Text, FlatList } from 'react-native';
import { computed } from 'mobx';
import { UserStore } from '../../store/User.store';
import { dataService } from '../../services/Data.service';
import { style } from './Home.style';
import { Recommended } from '../../components/index'

type Props = {
  userStore: UserStore;
  navigation: any
};

@inject('userStore')
@observer
class Home extends Component<Props> {

  componentDidMount() {
    
    dataService
      .getPlayLists()
      .then(response => {
        this.props.userStore.setPlayList(response);
      })
      .catch(error => {
        console.log("Error "+JSON.stringify(error))
      });
  }

  @computed
  get playlists(): any[] {
    return this.props.userStore.playlists;
  }


  render() {

    return (<View>
      <Text style={style.heading}> Recommended Songs </Text>
      <Text>Number of Songs</Text>

      {/* <FlatList
        data={this.props.userStore.playlists}
        renderItem={({item}) => (
          <Recommended
            title={item.name}
            imageUrl="fsdfsd"
            onClick={() => this.props.navigation.native('Tracks')} />)}
        keyExtractor={item => item.id}
      /> */}


    </View>);
  }
}
export default Home;

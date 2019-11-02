import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Home, AllTracks, SingleTrack } from './screens/index';

// Base routes for application
const stack = createStackNavigator({
  Home: { screen: Home },
  Tracks: { screen: AllTracks },
  SingleTrack: { screen: SingleTrack }
},
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
);

export default createAppContainer(stack);

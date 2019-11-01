import { createStackNavigator } from 'react-navigation-stack';
import { Home, Tracks, SingleTrack } from './screens';
import { createAppContainer } from 'react-navigation';

// Base routes for application
const stack = createStackNavigator({
  Home: {
    screen: Home
  },
  Tracks: {
    screen: Tracks
  },
  SingleTrack: {
    screen: SingleTrack
  }
},
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
);

export default createAppContainer(stack);

import { AppRegistry } from 'react-native'
import { Provider } from 'mobx-react'
import App from './App'
import { name as appName } from './app.json'
import { RootStore, storeProviderHOC } from './src/store'

const rootStore = new RootStore()

AppRegistry.registerComponent(appName, () =>
  storeProviderHOC(App, Provider, rootStore)
)

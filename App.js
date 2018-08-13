import React from 'react';
import { SearchScreen, AccountViewer } from './src/screens';
import { createStackNavigator } from 'react-navigation'


const AppMainStackNAvigator = createStackNavigator({
  SearchScreen: { screen: SearchScreen },
  AccountViewer: { screen: AccountViewer }
})

export default AppMainStackNAvigator
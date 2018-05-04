import React from 'react';
import { StackNavigator, } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';

import HomeView from './views/HomeView';
import CalendarView from './views/CalendarView';
import NearbyAnimalView from './views/NearbyAnimalView';
import MyAnimalView from './views/MyAnimalView'
import ProfileView from './views/ProfileView';


export default class App extends React.Component {
  render(){
    return(
      <NavApp />
    );
  }
}

const NavApp = StackNavigator({
  HomeV: { screen: HomeView },
  ProfileV: { screen: ProfileView },
  NAnimalV: {screen: NearbyAnimalView},
  MAnimalV: {screen: MyAnimalView},
  CalendarV: {screen: CalendarView},
});
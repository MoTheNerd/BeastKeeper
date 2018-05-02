import React from 'react';
import { StackNavigator, } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';

import HomeView from './views/HomeView';
import CalendarView from './views/CalendarView';
import AnimalView from './views/AnimalView';
import ProfileView from './views/ProfileView';


const NavApp = StackNavigator({
  HomeV: { screen: HomeView },
  ProfileV: { screen: ProfileView },
  AnimalV: {screen: AnimalView},
  CalendarV: {screen: CalendarView},
});

export default NavApp;
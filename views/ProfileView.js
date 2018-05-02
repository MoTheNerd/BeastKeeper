import React from 'react';
import { StackNavigator, } from 'react-navigation';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class ProfileView extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
        <View><Text>ProfileView.js lives here</Text></View>
      );
    }
  }
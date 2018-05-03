import React from 'react';
import { StackNavigator, } from 'react-navigation';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class HomeView extends React.Component {
    static navigationOptions = {
      title: '',
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
        <Button
          title="Go to Jane's profile"
          onPress={() =>
            navigate('Profile', { name: 'Jane' })
          }
        />
      );
    }
  }
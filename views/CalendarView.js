import React from 'react';
import { StackNavigator, } from 'react-navigation';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class CalendarView extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
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
import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity } from 'react-native';

import manimals from '../assets/JSON/myAnimals.json';

var index = 0;
export default class MyAnimalView extends React.Component {

    static navigationOptions = {
      header: null,
    };

    render() {
      
      return (
        <ImageBackground style={{
          //paddingLeft: 20,
          //paddingTop: 50,
          flex: 1,
        }}
        source={{uri: manimals[this.props.navigation.state.params.index].picture[0]}}
        >
          <View
          style={{
            backgroundColor: 'rgba(0,0,0,0.8)',
            flex: 1,
            paddingLeft: 20,
            paddingTop: 50,
          }}>
          <Text style={{
            color: '#FFF',
            fontFamily: 'Didot',
            fontSize: 30,
          }}>
            {manimals[this.props.navigation.state.params.index].name}
          </Text>
          </View>
        </ImageBackground>
      );
    }
  }
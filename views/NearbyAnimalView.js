import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity } from 'react-native';

import nanimals from '../assets/JSON/animals.json';

var index = 0;
export default class NearbyAnimalView extends React.Component {

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
        source={{uri: nanimals[this.props.navigation.state.params.index].picture[0]}}
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
            {nanimals[this.props.navigation.state.params.index].name}
          </Text>
          </View>
        </ImageBackground>
      );
    }
  }
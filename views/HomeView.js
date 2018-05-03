import React from 'react'; // swag
import { StackNavigator, } from 'react-navigation';
import { StyleSheet, Text, View, Button, Image, ImageBackground, StatusBar } from 'react-native';
import MyAnimalContainer from '../components/MyAnimalContainer';
import NearbyAnimalsContainer from '../components/NearbyAnimalsContainer';
import NavBar from '../components/NavBar';

export default class HomeView extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
      header: null,
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
        /*<View><Button hh
          title="Go to Jane's profile"
          onPress={() =>
            navigate('ProfileV', {})
          }
        /></View>*/

        <View style={styles.backgroundContainer}>
            <StatusBar
            backgroundColor="blue"
            barStyle="light-content"
            />
            <ImageBackground source={require('../assets/images/background.png')} style={styles.backgroundImage} >
                <View style={styles.contentContainer}> /*content containter*/>
                    <Text style={styles.titleText}>My Magnificent Beasts</Text>
                    <MyAnimalContainer />
                    <Text style={[styles.titleText, {marginTop:20,}]} >Beast Finder</Text>
                    <NearbyAnimalsContainer />
                </View>
            </ImageBackground>
        </View>
      );
    }
    constructor(props) {
        super(props);
        this.state = {height: props.height};
    }
  }

  const styles = StyleSheet.create({
    backgroundContainer:{
        flex: 1,
    },
    contentContainer:{
        paddingTop: 50,
        paddingLeft: 25,
        top: 0,
    },
    titleText:{
        fontSize: 30,
        fontFamily: 'Didot',
        color:'#FFFFFF',
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'space-between'
    },
  });

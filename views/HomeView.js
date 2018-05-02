import React from 'react'; // swag
import { StackNavigator, } from 'react-navigation';
import { StyleSheet, Text, View, Button, Image, ImageBackground } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import MyAnimalContainer from '../components/MyAnimalContainer';


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
            <ImageBackground source={require('../assets/images/background.png')} style={styles.backgroundImage} >
                <View style={styles.contentContainer}> /*content containter*/>
                    <Text style={styles.titleText}>My Magnificent Beasts</Text>
                    <MyAnimalContainer />
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
        color:'#FFFFFF',
    },
    backgroundImage: {
        flex: 1,
    },
  });

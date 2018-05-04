import React from 'react';
import { View, TouchableOpacity, Text, ImageBackground } from 'react-native';


import myAnimals from '../assets/JSON/myAnimals.json';

export default class MyAnimal extends React.Component {
    
    computeAnimal(){

        return(
            <ImageBackground source={{
                uri: myAnimals[this.props.children].picture[0]
                }}
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                }}
                imageStyle={{
                    borderRadius: 20,
                }}>
                <View style={{
                    backgroundColor:'rgba(0,0,0,0.2)',
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,    
                }}>
                    <Text style={{
                        color: '#FFF',
                        padding: 10,
                        fontSize: 20,
                    }}>
                        {myAnimals[this.props.children].name}
                    </Text>
                </View>    
            </ImageBackground>
        );
    }
    
    render(){
        console.log(this.props.children);
        return(
            <View>
                <TouchableOpacity style={{
                    backgroundColor: "rgba(0,0,0,0.3)",
                    marginRight: 40,
                    width:160,
                    height: 300-80,
                    borderRadius: 20,
                }} onPress={()=> {
                    this.props.navigation.navigate('MAnimalV', {index: this.props.children})
                }}>
                    {this.computeAnimal()}
                </TouchableOpacity>

            </View>


        );
    }

}
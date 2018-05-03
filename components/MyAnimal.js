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
                }}>
                <View style={{backgroundColor:'rgba(0,0,0,0.2)',}}>
                    <Text style={{
                        color: '#FFF',
                        padding: 5,
                        fontSize: 15,
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
                }} onPress={()=> {
                    console.log('oof I was touched!');
                }}>
                    {this.computeAnimal()}
                </TouchableOpacity>

            </View>


        );
    }

}
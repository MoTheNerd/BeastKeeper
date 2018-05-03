import React from 'react';
import { View, TouchableOpacity, Text, ImageBackground } from 'react-native';


import animals from '../assets/JSON/animals.json';

export default class NearbyAnimal extends React.Component {
    
    computeAnimal(){

        return(
            <ImageBackground source={{
                uri: animals[this.props.children].picture[0]
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
                        {animals[this.props.children].name}
                    </Text>
                </View>    
            </ImageBackground>
        );
    }
    
    render(){
        console.log(this.props.children);
        return(
                <TouchableOpacity style={{
                    backgroundColor: "rgba(0,0,0,0.3)",
                    marginRight: 20,
                    width: 70,
                    height: 70,
                }} onPress={()=> {
                    console.log('oof I was touched!');
                }}>
                    {this.computeAnimal()}
                </TouchableOpacity>


        );
    }

}
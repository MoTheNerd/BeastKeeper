import React from 'react';
import { View, TouchableOpacity, Text, ImageBackground } from 'react-native';


import animals from '../assets/JSON/animals.json';

export default class NearbyAnimal extends React.Component {
    
    computeAnimal(){

        return(
            <View style={{
                alignItems: 'center',
            }}>
            <TouchableOpacity style={{
                marginRight: 20,
                width: 100,
                height: 100,
                borderRadius: 50,
            }} onPress={()=> {
                console.log('oof I was touched!');
            }}>
            <ImageBackground source={{
                uri: animals[this.props.children].picture[0]
                }}
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                }}
                imageStyle={{
                    borderRadius: 50,
                }}>
                <View style={{
                    borderRadius: 50,
                    flex: 1,
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                }}>
                    
                </View>    
            </ImageBackground>
            
            </TouchableOpacity>
            <Text style={{
                        color: '#FFF',
                        padding: 5,
                        fontSize: 15,
                        marginRight: 20,
                    }}>
                        {animals[this.props.children].name}
                    </Text>
                    </View>
        );
    }
    
    render(){
        console.log(this.props.children);
        return(
            this.computeAnimal() 
        );
    }

}
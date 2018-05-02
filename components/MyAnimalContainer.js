import React from 'react';
import { View, ScrollView } from 'react-native';

import MyAnimal from './MyAnimal';
import myAnimals from '../assets/JSON/myAnimals.json';

var animals = [];

export default class MyAnimalContainer extends React.Component {
    
    populateData() {
        for (let i = 0; i < myAnimals.length; i++){
            animals.push(<MyAnimal key={myAnimals[i]._id}>{i}</MyAnimal>)
        }
        return(
            <View style={{
                borderRadius: 20,
                marginLeft: 50,
                marginRight: 50,
                backgroundColor: 'rgba(255,255,255,0.6)',
                flexDirection: 'row',
                paddingTop: 40,
                paddingBottom: 40,
                paddingLeft: 40,
                paddingRight: 0,
            }}>
                { animals }
            </View>
        );    
    }
    
    render(){
        return(
            <ScrollView style={{
                height: 300,
                marginTop: 25,
                marginLeft: -25,
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            >
            
                {this.populateData()}
            </ScrollView>
        );
    }
}
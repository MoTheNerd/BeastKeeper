import React from 'react'
import { View, ScrollView, Text } from 'react-native'

import NearbyAnimal from './NearbyAnimal';
import animals from '../assets/JSON/animals.json';

var nanimals = [];

export default class NearbyAnimalsContainer extends React.Component {
    
    populateData(){
        for (let i=0; i < animals.length; i++){
            nanimals.push(<NearbyAnimal key={animals[i]._id}>{i}</NearbyAnimal>)
        }
        return(
            <View style={{  
                paddingTop: 30,
                paddingLeft: 25,
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                {nanimals}
            </View>
        );
    }

    render(){
        return(
            <ScrollView style={{
                flex: 0,
                marginTop: 0,
                marginLeft: -25,
            }}
            showsHorizontalScrollIndicator={false}
            horizontal
            >
                {this.populateData()}
            </ScrollView>
        );
    }

}
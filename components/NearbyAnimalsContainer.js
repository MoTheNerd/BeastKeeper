import React from 'react'
import { View, ScrollView, Text } from 'react-native'

import NearbyAnimal from './NearbyAnimal';
import animals from '../assets/JSON/animals.json';

var nanimals0 = [];
var nanimals1 = [];
var nanimals2 = [];

export default class NearbyAnimalsContainer extends React.Component {

    // Warning this is such bad code. Fix this later before submitting
    populateData(){
        for (let i=0; i < 3; i++){
            nanimals0.push(<NearbyAnimal key={animals[i]._id}>{i}</NearbyAnimal>)
        }
        for (let i=3; i < 6; i++){
            nanimals1.push(<NearbyAnimal key={animals[i]._id}>{i}</NearbyAnimal>)
        }
        for (let i=6; i < 7; i++){
            nanimals2.push(<NearbyAnimal key={animals[i]._id}>{i}</NearbyAnimal>)
        }
        return(
            <View style={{
                flexDirection: 'column',
            }}>
            <View style={{  
                paddingTop: 30,
                paddingLeft: 42.5,
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                {nanimals0}
            </View>
            <View style={{
                paddingTop: 30,
                paddingLeft: 42.5,
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                {nanimals1}
            </View>
            <View style={{
                paddingTop: 30,
                paddingLeft: 42.5,
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                {nanimals2}
            </View>
            </View>
        );
    }

    render(){
        return(
            <ScrollView style={{
                height: 200,
                marginTop: 25,
                marginLeft: -5,
                borderRadius: 20,
                marginRight: 20,
                backgroundColor: 'rgba(255,255,255,0.6)',
            }}
            showsVerticalScrollIndicator={false}
            >
                {this.populateData()}
            </ScrollView>
        );
    }

}
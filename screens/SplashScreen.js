/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import * as Animatable from 'react-native-animatable';

import { Platform,StyleSheet, View, Text , Image,ActivityIndicator,Dimensions,Modal } from 'react-native';

export default class Splash extends Component {
    componentDidMount()
    {
        setTimeout(() =>{
            this.props.navigation.navigate('OTPNumber');
        },1000)
    }
  render() {
    return (
        <View style={styles.container}>
         <Animatable.Image
                    duraton="200"
                    source={require('../assets/nfe.jpg')}
                    style={styles.logo}
                    resizeMode="stretch"
                />
        <ActivityIndicator size="large" color="#7e7e7e" style={{margin:10}} />
      </View>

    );
  }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    logo:{
        width:150,
        height:150
    },
})
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity, ActivityIndicator, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import * as Animatable from 'react-native-animatable';
import { Alert } from 'react-native';


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            AccountNum: '',
            passcode: ''
        };


        // DummyLogin = async() =>
        // {
        //     alert('I am a Dummy Login!');
        //     AsyncStorage.setItem('user',this.state.user);
        //     this.props.navigation.navigate('Home',{user: this.state.user});

        // }

        FunctionLogin = () => {
            // const {AccountNum} = this.state;
            // const {passcode} = this.state;
            // fetch('https://uncoiled-crust.000webhostapp.com/api/login.php',{
            //     method: 'POST',
            //     headers: {
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json',
            //       },
            //       body: JSON.stringify({
            //         AccountNum: AccountNum,
            //         passcode: passcode
            //       })
            // }).then((response) =>response.json())
            // .then((responseJson) => {
            //     if(responseJson === 'OK')
            //     {
            //         //Alert.alert('Good Login');
            //this.props.navigation.navigate('Announcements');
            AsyncStorage.setItem('user', this.state.AccountNum);
            this.props.navigation.navigate('Dashboard', { user: this.state.AccountNum });
            // Alert.alert("You are in public dashboard")p
            // }
            // else
            // {
            //     Alert.alert(responseJson);
            // }
            // }).catch((error) =>{
            //     console.error(error);
            // });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {/* <View style={styles.container}> */}
                {/* <Animatable.Image
                    animation="bounceIn"
                    duraton="500"
                    source={require('../assets/nfe.jpg')}
                    style={styles.logo}
                    resizeMode="stretch"
                /> */}
                {/* <ActivityIndicator size="large" color="#7e7e7e" style={{margin:10}} /> */}
                {/* </View> */}

                <Text style={{ textAlign: 'left', fontSize: 40, fontWeight: 'bold', color: '#030303' }}> Sign In</Text>

                <TextInput
                    placeholder="Enter Phone  number"
                    onChangeText={AccountNum => this.setState({ AccountNum })}
                    style={styles.input}
                    keyboardType='numeric'
                    value={this.state.myNumber}
                    maxLength={15}
                />

                <TextInput
                    placeholder=" Password"
                    onChangeText={passcode => this.setState({ passcode })}
                    style={styles.input}
                    secureTextEntry={true}
                    keyboardType='numeric'
                    value={this.state.myNumber}
                    maxLength={6}
                />


                <View style={styles.space} />
                <TouchableOpacity onPress={() => { FunctionLogin(); }} style={styles.button}>
                    <Text style={styles.loginbtn}> Login </Text>
                </TouchableOpacity>
                <View style={styles.space} />
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('registeration') }} style={styles.Regbutton}>
                    <Text style={styles.loginbtn2}> Create Open Account! </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;
const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    input: {
        width: 300,
        height: 55,
        margin: 10,
        fontFamily: 'Nunito',
        fontSize: 15,
        fontWeight: 'bold',
        borderBottomColor: '#030303',
        borderBottomWidth: 1,
        marginBottom: 30,
    },

    button: {
        width: 300,
        height: 52,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#030303',
        alignItems: 'center'
    },

    Regbutton: {
        width: 300,
        height: 52,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#030303'
    },


    loginbtn: {
        color: '#ffff',
        fontSize: 20,
        fontWeight: 'bold'
    },

    loginbtn2: {
        color: '#030303',
        fontSize: 20,
        fontWeight: 'bold'
    },

    logo: {
        width: 200,
        height: 200,
        marginTop: 150,
        // marginBottom:100
    },

    space: {
        width: 10,
        height: 10,
    },

    imageStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 5,
        margin: 2,
        height: 15,
        width: 15,
        resizeMode: 'stretch',
        marginBottom: 8,
        marginTop: 8,
        alignItems: 'center',
    },
});

export default Login;
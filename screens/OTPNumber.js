import React, { Component } from 'react';
import {
    View,
    Text,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
    TouchableOpacity,
    TextInput

} from 'react-native';
import { Fieldset,} from 'react-native-clean-form'
import { Item, Input, Icon } from 'native-base';
import Fontisto from 'react-native-vector-icons/Fontisto';
import * as Animatable from 'react-native-animatable';
class OTPNumber extends Component {
    constructor() {
        super();
        this.state = {
            PhoneNumber: 'null',
        }
    }
    SplashScreen = () => {
        const { navigation } = this.props;
        navigation.navigate('SplashScreen');
    };
    Dashboard = () => {
        const { navigation } = this.props;
        navigation.navigate('Dashboard');
    };
    MobileNumber = () => {
        const { navigation } = this.props;
        navigation.navigate('MobileNumber');
    };
    //Updating the changes
    submit = () => {
        fetch('http://10.0.2.2:8009/api/feedback/', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "name": this.state.name,
            "Email": this.state.Email,
            "PhoneNumber": this.state.PhoneNumber,
          }),
         
        })
          .then((response) => response.json())
          .then((responseData) => {
            "POST Response",
              "Response Body -> " + JSON.stringify(responseData);
            alert(JSON.stringify(responseData));
          })
      };
        render() {
            return (
                <View style={styles.container}>
                    <StatusBar backgroundColor='#43bfb5' barStyle="light-content" />
                    <View style={styles.header}>
                        <TouchableOpacity onPress={this.SplashScreen}>
                            <View style={styles.categoryIcon}>
                                <Fontisto name="arrow-left" size={20} color="#fff" />
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.headerText}>OTP Registeration</Text>
                    </View>
                    <Animatable.View animation="fadeInUpBig" style={styles.footer}>
                        <ScrollView>
                            <Fieldset>
                                <View style={styles.header}>
                                    <Animatable.Image animation="bounceIn"duraton="1500" source={require('../assets/nfe.jpg')}
                                        style={styles.logo}
                                        resizeMode="stretch"
                                    />
                                </View>
                                    <Text style={styles.action} >Enter Your Name</Text>
                                    <Item success>
                                        <Input style={styles.action1} placeholder='Full Name' 
                                         onChangeText={input => this.setState({ name: input })}/>
                                        <Icon name='checkmark-circle' />
                                    </Item>
                                    <Text style={styles.action} >Enter Email Address</Text>
                                    <Item success>
                                        <Input style={styles.action1} placeholder='Email Address'
                                          onChangeText={input => this.setState({ Email: input })}/>
                                        <Icon name='checkmark-circle' />
                                    </Item>
                                    <Text style={styles.action} >Enter Your Phone Number</Text>
                                    <Item success>
                                        <Input type ='number' style={styles.action1} placeholder='Mobile Number'
                                        onChangeText={input => this.setState({ PhoneNumber: input })} />
                                        <Icon name='checkmark-circle' />
                                    </Item>
                               
                                <TouchableOpacity style={styles.btn} onPress={() => this.submit()}>
                                    <Text style={styles.btnText}>Request For OTP</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.btn1} onPress={this.MobileNumber}>
                                    <Text style={styles.btnText}>Cancel</Text>
                                </TouchableOpacity>

                            </Fieldset>

                        </ScrollView>

                    </Animatable.View>
                </View>
            );
        }
}


export default OTPNumber;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#43bfb5',
        height: 50
    },
    header: {
        flex: 0.5,
        color: '#111',
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 70,

        marginTop: -24


    },
    categoryIcon: {
        marginTop: 20,
        marginLeft: 20,

    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    logo: {
        width:150,
        height: 150,
        margin:20,
        marginLeft:80
        
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
        borderColor: '#05375a',
        borderWidth: 0.5,
        borderRadius: 8,
        height: 42,

    },

    placeholder: {
        borderWidth: 0.8,
        borderRadius: 3,
        height: 40,
        fontSize: 12,
        borderColor: '#76b3db',
        marginTop: 5,
    },
    action: {
        flexDirection: 'row',
        marginTop: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        fontSize: 17,
        fontWeight: 'bold'



    },

    action1: {
        flexDirection: 'row',
        marginTop: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        fontSize: 15,
        fontWeight: 'bold',
    },

    head: {
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        fontSize: 17,
        fontWeight: 'bold'
    },
    savebtn: {
        alignItems: 'center',
        marginTop: 10,
        width: 30,

    },
    btn: {
        backgroundColor: '#43bfb5',
        height: 40,
        width: 350,
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 10,
        marginTop: 30

    },
    btn1: {
        backgroundColor: '#bcd130',
        height: 40,
        width: 350,
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 10

    },
    btnText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',


    },
});

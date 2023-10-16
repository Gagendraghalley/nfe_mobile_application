import React, { Component, useState } from 'react';
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

import { Content, Card, CardItem, Body, Button, Icon } from "native-base";

import Fontisto from 'react-native-vector-icons/Fontisto';
import * as Animatable from 'react-native-animatable';

class Repository extends Component {

    constructor() {
        super();
        this.state = {
            ref_plc: 'null',
            ref_blc: 'null',
            ref_alc: 'null',
        }
    }
    Repository = () => {
        const { navigation } = this.props;
        navigation.navigate('Repository');

    };
    componentDidMount() {
        this.getDetails('http://10.0.2.2:8009/api/getrepodetails/1212', '"ref_link');//plc reference
        this.getDetails('http://10.0.2.2:8009/api/getrepodetails/1232', 'ref_blc');//blc refernce
        this.getDetails('http://10.0.2.2:8009/api/getrepodetails/1111', 'ref_alc');//alc refernce


    }
    async getDetails(url, targetstate) {
        return fetch(url)
            .then(response => response.json())
            .then(responseJson => {
                if (targetstate == "ref_link") {
                    this.setState({
                        ref_link: responseJson[0].ref_link,
                    });
                }

            })
    }
    async getDetails(url, targetstate) {
        return fetch(url)
            .then(response => response.json())
            .then(responseJson => {
                if (targetstate == "ref_blc") {
                    this.setState({
                        ref_blc: responseJson[0].ref_link,
                    });
                }

            })
    }
    async getDetails(url, targetstate) {
        return fetch(url)
            .then(response => response.json())
            .then(responseJson => {
                if (targetstate == "ref_alc") {
                    this.setState({
                        ref_alc: responseJson[0].ref_link,
                    });
                }

            })
    }
    render() {

        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#43bfb5' barStyle="light-content" />

                <View style={styles.Topheader}>
                    <TouchableOpacity
                        onPress={this.Repository}>
                        <View style={styles.categoryIcon}>
                            <Fontisto name="arrow-left" size={20} color="#fff" />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.headerText}>External Reference Links</Text>


                </View>
                <Animatable.View

                    style={styles.footer}
                >
                    <ScrollView>

                        <Content padder>
                            <Card>
                                <CardItem header bordered>
                                    <Text style={styles.header}>Reference Link For PLC</Text>
                                </CardItem>
                                <CardItem header bordered>
                                    <TextInput
                                        value={this.state.ref_plc} editable={false}
                                    />
                                </CardItem>

                                <CardItem header bordered>
                                    <Text style={styles.header}>Reference Link For BLC</Text>
                                </CardItem>
                                <CardItem header bordered>
                                    <TextInput
                                        value={this.state.ref_blc} editable={false}
                                    />
                                </CardItem>

                                <CardItem header bordered>
                                    <Text style={styles.header}>Reference Link For ALC</Text>
                                </CardItem>
                                <CardItem header bordered>
                                    <TextInput
                                        value={this.state.ref_alc} editable={false}
                                    />
                                </CardItem>

                            </Card>
                        </Content>





                    </ScrollView>

                </Animatable.View>
            </View>
        );
    }
}
export default Repository;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#43bfb5',
        height: 50
    },
    header: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    Topheader:{
        fontWeight: 'bold',
        height:50,
        fontSize: 20,

    },
    headerText: {
        color: '#fff',
        fontSize: 15,
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
    logo: {
        width: 150,
        height: 150,
        margin: 20,
        marginLeft: 80

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
    btn2: {
        backgroundColor: '#55b6d4',
        height: 40,
        width: 310,
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        borderRadius: 10

    },
    btnText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',


    },
    cardsWrapper: {
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
    },
    card: {
        height: 45,
        width: 300,
        marginVertical: 10,
        margin: 10,


        shadowColor: '#999',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,

    },
    cardImgWrapper: {
        flex: 1,
    },

    cardInfo: {
        flex: 2,
        padding: 10,
        borderColor: '#aeb0b5',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 8,
        backgroundColor: '#42b0f5',


    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 17,
        shadowColor: '#111',
        color: "#fff",
        textAlign: 'center',

    },
});

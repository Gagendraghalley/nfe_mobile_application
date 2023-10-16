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
import { BLCrepo_url } from './config/rest_config/';
import { Alert } from 'react-native';
class Repository extends Component {

    constructor() {
        super();
        this.state = {
            title: 'null',
            attachments: 'null',
            downloads: 'null',
            ref_link: 'null',
            description: 'null',
            avatar: 'null',
            created_at: 'null'
        }
    }
    download() {
        Alert.alert("Downnload file......");
    }

    View() {
        Alert.alert("View file");
    }
    componentDidMount() {
        this.getDetails(`${BLCrepo_url}`, 'repo');//repo Details

    }
    async getDetails(url, targetstate) {
        return fetch(url)
            .then(response => response.json())
            .then(responseJson => {
                // alert(responseJson[0].title)
                //repo Details
                if (targetstate == "repo") {
                    this.setState({
                        title: responseJson[0].title,
                        attachments: responseJson[0].attachments,
                        ref_link: responseJson[0].ref_link,
                        description: responseJson[0].description,
                        avatar: responseJson[0].avatar,
                        downloads: responseJson[0].downloads.toString(),
                        created_at: responseJson[0].created_at

                    });
                    // alert(responseJson[0].avatar)
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
                        <Text style={styles.headerText}>BLC Reading materails</Text>
                    </View>
                <Animatable.View
                    style={styles.footer}
                >
                    <ScrollView>

                        <Content padder>
                            <Card>
                                <CardItem header bordered>
                                    <Text style={styles.header}>Title:</Text>
                                </CardItem>
                                <CardItem header bordered>
                                    <TextInput style={{ color: "#111",fontSize: 15 }}
                                        value={this.state.title} editable={false}
                                    />
                                </CardItem>


                                <CardItem header bordered>
                                    <Text style={styles.header}>Description:</Text>
                                </CardItem>

                                <CardItem bordered>
                                    <Body>
                                        <TextInput style={{ color: "#111",fontSize: 15}}
                                            value={this.state.description} editable={false}
                                        />
                                    </Body>
                                </CardItem>

                                <CardItem header bordered>
                                    <Text style={styles.header}>Attachments Files:</Text>
                                </CardItem>

                                <CardItem bordered>
                                    <Body>
                                        <TextInput style={{ color: "#111",fontSize: 15 }}
                                            value={this.state.attachments} editable={false}
                                        />
                                    </Body>
                                </CardItem>

                                <CardItem header bordered>
                                    <Text style={styles.header}>Download Counts:</Text>
                                </CardItem>

                                <CardItem bordered>
                                    <Body>
                                        <TextInput style={{ color: "#111",fontSize: 15 }}
                                            value={this.state.downloads} editable={false}
                                        />
                                    </Body>
                                </CardItem>

                                <CardItem header bordered>
                                    <Text style={styles.header}>Uploaded Date:</Text>
                                </CardItem>

                                <CardItem bordered>
                                    <Body>
                                        <TextInput style={{ color: "#111" ,fontSize: 15,}}
                                            value={this.state.created_at} editable={false}
                                        />
                                    </Body>
                                </CardItem>

                                <CardItem footer bordered>
                                    <TouchableOpacity style={styles.btn2} onPress={() => this.download()}><Text style={styles.btnText}>Download</Text>
                                    </TouchableOpacity>

                                </CardItem>

                                <CardItem footer bordered>
                                    <TouchableOpacity style={styles.btn2} onPress={() => this.View()}><Text style={styles.btnText}>View</Text>
                                    </TouchableOpacity>

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
        fontSize: 17,
        fontWeight: 'bold',
    },
    headerText: {
        color: '#fff',
        fontSize: 18,
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
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
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
    Topheader:{
        fontWeight: 'bold',
        height:50,
        fontSize: 20,

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

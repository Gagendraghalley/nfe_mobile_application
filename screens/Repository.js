import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

export default class Repository extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    PLC = () => {
        const { navigation } = this.props;
        navigation.navigate('PLC_Repo');

    };

    BLC = () => {
        const { navigation } = this.props;
        navigation.navigate('BLC_Repo');

    };

    ALC = () => {
        const { navigation } = this.props;
        navigation.navigate('ALC_Repo');

    };

    DDC = () => {
        const { navigation } = this.props;
        navigation.navigate('DzongkhaDevelopmentCommision');

    };

    SR = () => {
        const { navigation } = this.props;
        navigation.navigate('SupplymentryReading');

    };

    AV = () => {
        const { navigation } = this.props;
        navigation.navigate('AudioAndVisual');

    }

    REC = () => {
        const { navigation } = this.props;
        navigation.navigate('RoyalEducationCouncil');

     }

     PU = () => {
        const { navigation } = this.props;
        navigation.navigate('Publication');

     }
     REF = () => {
        const { navigation } = this.props;
        navigation.navigate('REF_Repo');

     }
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.categoryContainer}>
                    <TouchableOpacity
                        style={styles.categoryBtn}
                        onPress={this.PLC}>
                        <View style={styles.categoryIcon}>
                            <MaterialCommunityIcons name="book-multiple" size={40} color="#1676CB" />
                        </View>
                        <Text style={styles.categoryBtnTxt}>PLC Materials</Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={styles.categoryBtn}
                        onPress={this.BLC}>
                        <View style={styles.categoryIcon}>
                            <MaterialCommunityIcons name="book-multiple" size={40} color="#1676CB" />
                        </View>
                        <Text style={styles.categoryBtnTxt}>BLC Materials </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.categoryBtn}
                        onPress={this.ALC}>
                        <View style={styles.categoryIcon}>
                            <MaterialCommunityIcons name="book-multiple" size={40} color="#1676CB" />
                        </View>
                        <Text style={styles.categoryBtnTxt}>ALC Materials</Text>
                    </TouchableOpacity>
                </View>

                <View style={[styles.categoryContainer, { marginTop: 10 }]}>
                    <TouchableOpacity style={styles.categoryBtn} onPress={this.DDC}>
                        <View style={styles.categoryIcon}>
                            <MaterialCommunityIcons name="book-multiple" size={40} color="#1676CB" />
                        </View>
                        <Text style={styles.categoryBtnTxt}>Dzongkha Developement Commission</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.categoryBtn}
                        onPress={this.SR}>
                        <View style={styles.categoryIcon}>
                            <MaterialCommunityIcons name="book-multiple" size={40} color="#1676CB" />
                        </View>
                        <Text style={styles.categoryBtnTxt}>Supplimentary Reader</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.categoryBtn}
                        onPress={this.AV}>
                        <View style={styles.categoryIcon}>
                            <MaterialCommunityIcons name="book-multiple" size={40} color="#1676CB" />
                        </View>
                        <Text style={styles.categoryBtnTxt}>Audio and Visual Materials</Text>
                    </TouchableOpacity>
                </View>

                <View style={[styles.categoryContainer, { marginTop: 10 }]}>
                    <TouchableOpacity
                        style={styles.categoryBtn}
                        onPress={this.REC}>
                        <View style={styles.categoryIcon}>
                            <MaterialCommunityIcons name="book-multiple" size={40} color="#1676CB" />
                        </View>
                        <Text style={styles.categoryBtnTxt}>Royal Education Council</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.categoryBtn}
                        onPress={this.PU}>
                        <View style={styles.categoryIcon}>
                            <MaterialCommunityIcons name="book-multiple" size={40} color="#1676CB" />
                        </View>
                        <Text style={styles.categoryBtnTxt}>Publication</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        style={styles.categoryBtn}
                        onPress={this.REF}>
                        <View style={styles.categoryIcon}>
                            <MaterialCommunityIcons name="book-multiple" size={40} color="#1676CB" />
                        </View>
                        <Text style={styles.categoryBtnTxt}>External Links</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        );
    };
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sliderContainer: {
        height: 200,
        width: '90%',
        marginTop: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
    },

    wrapper: {},

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8,
    },
    sliderImage: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
    },
    categoryContainer: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 10,
    },
    categoryBtn: {
        flex: 1,
        width: '50%',
        marginHorizontal: 0,
        alignSelf: 'center',
    },
    categoryIcon: {
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 80,
        height: 80,
        backgroundColor: '#fdeae7' /* '#FF6347' */,
        borderRadius: 50,
    },
    categoryBtnTxt: {
        alignSelf: 'center',
        marginTop: 5,
        color: '#1676CB',
        fontSize:12,

    },
    cardsWrapper: {
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
    },
    card: {
        height: 100,
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    cardImgWrapper: {
        flex: 1,
    },
    cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
    },
    cardInfo: {
        flex: 2,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: '#fff',
    },
    cardTitle: {
        fontWeight: 'bold',
    },
    cardDetails: {
        fontSize: 12,
        color: '#444',
    },
});
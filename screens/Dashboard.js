import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    Image,
    Linking

} from 'react-native';
import { Content, Container, Card, CardItem, Body } from "native-base";
import Swiper from 'react-native-swiper';
import { COLORS, FONTS, SIZES, icons } from '../constants';
import AsyncStorage from '@react-native-community/async-storage';
import { instructor_url } from './config/rest_config/';
import Fontisto from 'react-native-vector-icons/Fontisto';
class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            example: 'null',
        }
    }
    Login = () => {
        const { navigation } = this.props;
        navigation.navigate('SignInScreen');
    }
    Repo = () => {
        const { navigation } = this.props;
        navigation.navigate('Repository');
    }
    SplashScreen = () => {
        const { navigation } = this.props;
        navigation.navigate('Login');
    }
    async componentDidMount() {

    }
    async getDetails(url, targetstate,) {
        return fetch(url)
            .then(response => response.json())
            .then(responseJson => {
                if (targetstate == "profile") {
                    this.setState({
                        instructor_name: responseJson.instructor_name,
                    });
                    // alert(responseJson.instructor_name)
                }
            })
    }
    render() {
        return (
            <Container>
                <ScrollView style={styles.container}>
                    <StatusBar backgroundColor='#fff' barStyle="light-content" />
                    <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: SIZES.padding, alignItems: 'center' }}>
                        <StatusBar backgroundColor='#fff' barStyle="light-content" />
                        <TouchableOpacity onPress={this.SplashScreen}>
                            <View style={styles.categoryIcon}>
                                <Fontisto name="arrow-left" size={20} color="#111" marginLeft="-10" />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                backgroundColor: COLORS.primary,
                                height: 40,
                                width: 100,
                                padding: 5,
                                paddingRight: SIZES.radius,
                                borderRadius: 10,
                                marginHorizontal: 40,
                                marginLeft: 20
                            }}
                            onPress={this.Login}>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ marginLeft: SIZES.base, color: COLORS.white, fontWeight: "bold", ...FONTS.body3 }}> Login</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                backgroundColor: COLORS.primary,
                                height: 40,
                                width: 140,
                                padding: 10,
                                paddingRight: SIZES.radius,
                                borderRadius: 10,
                                marginHorizontal: 30,
                                marginLeft: 0
                            }}
                            onPress={this.Repo}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ marginLeft: SIZES.base, color: COLORS.white, fontWeight: "bold", ...FONTS.body5 }}>View Repository</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.cardsWrapper}>
                        
                        <View style={styles.card}>
                            <View style={styles.cardInfo}>
                                <Text style={styles.cardTitle}>About Us</Text>
                            </View>
                        </View>
                        <View style={styles.sliderContainer}>
                            <Swiper autoplay horizontal={false} height={200}activeDotColor="#FF6347">
                                <View style={styles.slide}>
                                    <Image
                                        source={require('../assets/banners/image5.jpg')}
                                        resizeMode="cover"
                                        style={styles.sliderImage}/>
                                </View>
                            </Swiper>
                        </View>
                        <Content padder>
                            <Card style={{ backgroundColor:'#f5f5f5'}}>
                                <CardItem bordered>
                                    <Body>
                                        <Text style={{ textAlign: 'justify' }}>
                                            The Ministry of Education was formed from the erstwhile Ministry of Health and Education to meet these objectives. The Department of Adult and Higher Education, as one of the departments, has the mandate to oversee all aspects of tertiary education, non-formal education and adult education. The department shoulders these responsibilities with four divisions, namely:
                                            , Higher Education Planning Division,
                                            ,Non-formal and Continuing Education Division,
                                            , Quality Assurance and Accreditation Division, 
                                            , Scholarship and Student Support Division. Divisions  Higher Education Planning Division and Quality Assurance and Accreditation Division have been bifurcated from the Tertiary Education Division as per the Tertiary Education Policy of the Kingdom of Bhutan 2010 in order to serve as the Secretariats to two bodies viz. Tertiary Education Board and Bhutan Accreditation Council respectively. The roles of the department are collectively geared towards facilitating efficient delivery of services for adult and post-secondary services. The department works in achieving the following vision, mission, core values and objectives:
                                        </Text>
                                    </Body>
                                </CardItem>
                               
                            </Card>
                        </Content>
                        <View style={styles.card}>
                            <View style={styles.cardInfo}>
                                <Text style={styles.cardTitle}>Vision</Text>
                            </View>
                        </View>
                        <View style={styles.sliderContainer}>
                            <Swiper autoplay horizontal={false} height={200}activeDotColor="#FF6347">
                                <View style={styles.slide}>
                                    <Image
                                        source={require('../assets/banners/slider2.jpg')}
                                        resizeMode="cover"
                                        style={styles.sliderImage}/>
                                </View>
                            </Swiper>
                        </View>
                        <Content padder>
                            <Card>
                                <CardItem bordered>
                                    <Body>
                                        <Text style={{ textAlign: 'justify' }}>
                                            A tertiary education system that supports access, quality, relevance and lifelong learning opportunities
                                        </Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </Content>

                        <View style={styles.card}>
                            <View style={styles.cardInfo}>
                                <Text style={styles.cardTitle}>Mission</Text>
                            </View>
                        </View>
                        <View style={styles.sliderContainer}>
                            <Swiper autoplay horizontal={false} height={200}activeDotColor="#FF6347">
                                <View style={styles.slide}>
                                    <Image
                                        source={require('../assets/banners/slider3.jpg')}
                                        resizeMode="cover"
                                        style={styles.sliderImage}/>
                                </View>
                            </Swiper>
                        </View>
                        <Content padder>
                            <Card>
                                <CardItem bordered>
                                    <Body>
                                        <Text style={{ textAlign: 'justify' }}>
                                            To facilitate empowering individuals for personal and professional development;
                                            To create a pool of highly trained graduates and professionals towards formation of national human capital;
                                            To facilitate enhancing continuing and lifelong learning opportunities;
                                            To rationalize and promote sustainable financing of tertiary education;
                                            To facilitate and promote establishment of both public and private tertiary education institutions;
                                            To ensure provision of quality tertiary education both in public and private institutions with systematic mechanism in place;</Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </Content>
                        <View style={styles.card}>
                            <View style={styles.cardInfo}>
                                <Text style={styles.cardTitle}>Learners Successfull Story</Text>
                            </View>
                        </View>
                        <Content padder>
                            <Card>
                                <CardItem bordered>
                                    <Body>
                                        <Text style={{ textAlign: 'justify' }}>
                                            comming soon
                                        </Text>
                                    </Body>
                                </CardItem>
                                {/* <CardItem footer bordered>
                                    <TouchableOpacity><Text style={{ color: '#3471eb' }}> Read More</Text></TouchableOpacity>
                                </CardItem> */}
                            </Card>
                        </Content>
                        <View style={styles.card}>
                            <View style={styles.cardInfo}>
                                <Text style={styles.cardTitle}>Organizational Structure</Text>
                            </View>
                        </View>
                        {/* <View style={styles.sliderContainer1}>
                            <Swiper autoplay horizontal={false} height={200}activeDotColor="#FF6347">
                                <View style={styles.slide}>
                                    <Image
                                        source={require('../assets/banners/structure.png')}
                                        resizeMode="cover"
                                        style={styles.sliderImage}/>
                                </View>
                            </Swiper>
                        </View> */}
                        <Content padder>
                            <Card>
                                <CardItem bordered>
                                    <Body>
                                        <Text style={{ textAlign: 'justify' }}>
                                        The Department of Adult and Higher Education, Ministry of Education provides services related to tertiary education, non-formal and continuing education programmes with a view to empowering citizens by facilitating provision for access to relevant education.  The dept. is guided by its vision and mission to realize its goal. The department is structurally guided by TEB, BAC, SSC and NFCED Board, and other sub-committees towards fulfilling its mandates.</Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </Content>

                        <View style={styles.card}>
                            <View style={styles.cardInfo}>
                                <Text style={styles.cardTitle}>External Links</Text>
                            </View>
                        </View>
                        <Content padder>
                          
                                <CardItem bordered>
                                    <Body>
                                    <Text style={{color: 'blue'}} onPress={() => Linking.openURL('https://www.citizenservices.gov.bt/education-services')}>
                                       DAHE G2C Services 
                                    </Text>
                                    <Text style={{color: 'blue'}} onPress={() => Linking.openURL('http://www.education.gov.bt/')}>
                                        Ministry of Education
                                    </Text>
                                    <Text style={{color: 'blue'}} onPress={() => Linking.openURL('https://www.rub.edu.bt/index.php/en/')}>
                                        Royal University of Bhutan
                                    </Text>
                                    <Text style={{color: 'blue'}} onPress={() => Linking.openURL('http://www.dahe.gov.bt/')}>
                                         Ongoing scholarship students
                                    </Text>
                                    
                                    </Body>
                                </CardItem>
                        </Content>
                       
                    </View>
                </ScrollView>
            </Container>
        );
    }
}
export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },


    cardsWrapper: {
        marginTop: 20,
        width: '95%',
        alignSelf: 'center',
    },
    card: {
        height: 40,
        width: '95%',
        marginVertical: 10,
        margin: 10,
        shadowColor: '#999',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
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
        fontSize: 15,
        shadowColor: '#111',
        color: "#fff",
        textAlign: 'center',

    },
    sliderContainer: {
        height: 200,
        width: '90%',
        marginTop: 0,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
      },
      sliderContainer1: {
        height: 200,
        width: '100%',
        marginTop: 0,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
      },
      slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8,
      },
      sliderImage: {
        height: '100%',
        width: '100%',
        borderRadius: 5,
      },
      sliderImage1: {
        height: '100%',
        width: 100,
        alignSelf: 'center',
        borderRadius: 5,
      },

});

import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,

} from 'react-native';
import { useTheme } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const HomeScreen = ({ navigation }) => {
const theme = useTheme();

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor='#fff' barStyle="light-content" />
      <View style={styles.sliderContainer}>
        <Swiper autoplay horizontal={false} height={200} activeDotColor="#FF6347">
          <View style={styles.slide}>
            <Image
                source={require('../assets/banners/image3.jpeg')}
                resizeMode="cover"
                style={styles.sliderImage}/>
          </View>
        </Swiper>
      </View>

      <View style={styles.cardsWrapper}>
        {/* <Text
            style={{
              alignSelf: 'center',
              fontSize: 22,
              fontWeight: 'bold',
              color: '#f21b1e',
              textShadowColor: '#f21b1e',

            }}>
        </Text> */}
        <TouchableOpacity activeOpacity={0.8}onPress={() => navigation.navigate('NfeCenter')}>
          <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
              <Image
                  source={require('../assets/banners/image3.jpeg')}
                  resizeMode="cover"
                  style={styles.cardImg}/>
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Total Centers</Text>
                <Text style={styles.cardDetails}>
                    <Text style={styles.readmore}>Read More  <Fontisto name="arrow-right" size={12} color="#111" /></Text>
                </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('NfeInstructor')}>
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <Image
                  source={require('../assets/banners/image1.jpg')}
                  resizeMode="cover"
                  style={styles.cardImg}/>
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Total NFE Instructors </Text>
               <Text style={styles.cardDetails}>
                  <Text style={styles.readmore}>Read More <Fontisto name="arrow-right" size={12} color="#111" /></Text>
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}  onPress={() => navigation.navigate('NfeLearner')}>
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <Image
                  source={require('../assets/banners/slider3.jpg')}
                  resizeMode="cover"
                  style={styles.cardImg}/>
            </View>

            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Total NFE Learners</Text>
                <Text style={styles.cardDetails}>
                   <Text style={styles.readmore}>Read More <Fontisto name="arrow-right" size={12} color="#111" /></Text>
               </Text>
            </View>
            
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}  onPress={() => navigation.navigate('NfeLearner')}>
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <Image
                  source={require('../assets/banners/slider2.jpg')}
                  resizeMode="cover"
                  style={styles.cardImg}/>
            </View>

            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>School(s) having center</Text>
                <Text style={styles.cardDetails}>
                   <Text style={styles.readmore}>Read More <Fontisto name="arrow-right" size={12} color="#111" /></Text>
               </Text>
            </View>
            
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
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
    borderRadius: 10,
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
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
    color: '#27292A',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 65,
    height: 65,
    backgroundColor: '#C7CACC' /* '#FF6347' */,
    borderRadius: 50,
    shadowColor: '#111',
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#27292A',
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height:80,
    marginVertical: 12,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 30,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    shadowRadius: 2,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ED913F',
    borderWidth: 5,
    borderLeftWidth: 0,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 8,
    backgroundColor: '#f5f5f5',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    shadowColor: '#111',
  },
  cardDetails: {
    fontSize: 10,
    color: '#444',
  },
  readmore: {
    fontSize: 12,
    color: '#327ba8',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop:60,

  },
});

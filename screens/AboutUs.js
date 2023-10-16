import React, { Component } from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  // Platform

} from 'react-native';

import { Content, Container, Card, CardItem, Body } from "native-base";
import Fontisto from 'react-native-vector-icons/Fontisto';
import * as Animatable from 'react-native-animatable';
import { Textarea } from 'native-base';



class FeedbackForms extends Component {

  constructor() {
    super();
    this.state = {
    }
    
  }
  home = () => {
    const { navigation } = this.props;
    navigation.navigate('Home');
  };
  
  render() {

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#43bfb5' barStyle="light-content" />
        <View style={styles.header}>
          <TouchableOpacity onPress={this.home}>
            <View style={styles.categoryIcon}>
              <Fontisto name="arrow-left" size={20} color="#fff" />
            </View>
          </TouchableOpacity>

          <Text style={styles.headerText}>About Us</Text>
        </View>
          <Animatable.View animation="fadeInUpBig"
            style={styles.footer}
          >
          <ScrollView>
          <Content padder>
              <Card>
                  <CardItem bordered>
                    <Body>
                        <Text style={{ textAlign: 'justify', }}>
                            The Non-Formal and Continuing Education Division (NFCED) is a division within the Department of Adult and Higher Education in the Ministry of Education.
                        </Text>
                        <Text></Text>
                        <Text style={{ textAlign: 'justify',fontWeight: 'bold',}}>
                             The objectives of NFCED are:
                        </Text>
                        <Text style={{ textAlign: 'justify' }}>
                              *To provide quality literacy and numeracy education in Dzongkha, the official language, 
                              to those who did not receive/complete a formal education, in order to:
                        </Text>
                        <Text style={{ textAlign: 'justify' }}>
                             *to provide life skills and livelihood skills education
                        </Text>
                        <Text style={{ textAlign: 'justify' }}>
                            *to provide lifelong learning opportunities.
                        </Text>

                        <Text></Text>
                        <Text style={{ textAlign: 'justify',fontWeight: 'bold',}}>
                             Programme implementation:
                        </Text>
                        <Text style={{ textAlign: 'justify' }}>
                         NFCED coordinates and facilitates the policy formulation, curriculum development and 
                         capacity development for non-formal and continuing education programmes.
                         District education officers in 20 districts in the country are then responsible for 
                         managing the NFE centres in their districts. At community level, school principals 
                         who are mandated by the Ministry of Education, are designated to supervise and provide support 
                         for the NFE centres and facilitators. Village elders under the chairmanship of the village chiefs are also 
                         actively involved in the management of the NFE in their communities.
                        </Text>
                    </Body>
                  </CardItem>
              </Card>
              <CardItem>
                <Body>
                    <Text style={{ textAlign: 'center',fontWeight: 'bold',}}> Copyright {'\u00A9'}2021 All Rights reserved by NFCED
                    </Text>
                </Body>
              </CardItem>
                 
           </Content>
          </ScrollView>
        </Animatable.View>
      </View>
    );
  }
}
export default FeedbackForms;

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
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 70,

    marginTop: -24


  },
  categoryIcon: {
    marginTop: 20,
    marginLeft: 20,

  },
  btn: {
    backgroundColor: '#43bfb5',
    height: 40,
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',

  },
  btnText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',


  },
  footer: {
    flex: Platform.OS === 'ios' ? 3 : 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  text_header: {
    color: '#40464a',
    fontWeight: 'bold',
    fontSize: 30
  },
  text_footer: {
    color: '#111',
    fontSize: 24
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
  button: {
    alignItems: 'center',
    marginTop: 10
  },
  link: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    borderRadius: 10,
    paddingTop: 5,
    paddingBottom: 10,

    backgroundColor: '#f2f2f2',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 10,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },

  },
  textlink: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  para: {
    fontSize: 12,
    justifyContent: 'center',
    marginTop: 4,
    fontWeight: 'bold',
    borderColor: '#05375a',
    borderWidth: 0.2,
    height: 23,
    width: 200


  },


  placeholder: {
    borderWidth: 0.8,
    borderRadius: 3,
    height: 40,
    fontSize: 12,
    borderColor: '#76b3db',
    marginTop: 5,


  },

  feedback: {
    borderWidth: 0.8,
    borderRadius: 3,
    height: 150,
    fontSize: 12,
    borderColor: '#76b3db',
    marginTop: 5,
    backgroundColor: '#f2f2f2'



  },
  action: {
    flexDirection: 'row',
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    fontSize: 15,


  },
  actionplaceholder: {
    flexDirection: 'row',
    marginTop: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    fontSize: 16,
    borderWidth: 0.4,
    borderColor: '#76b3db',

  },
});

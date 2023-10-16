import React, { Component } from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity, Alert,
  Platform,
  ScrollView,
  StatusBar,
  TextInput,
} from 'react-native';
import { Fieldset, } from 'react-native-clean-form'
import Fontisto from 'react-native-vector-icons/Fontisto';
import * as Animatable from 'react-native-animatable';
import { NfeCount_url } from './config/rest_config/';
import { clcCount_url } from './config/rest_config/';
import { CenterCount_url } from './config/rest_config/';

export default class NfeCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nfecount: 'null',
      clccount: 'null',
    }
  }
  home = () => {
    const { navigation } = this.props;
    navigation.navigate('Home');
  };
  async componentDidMount() {
    this.getDetails(`${NfeCount_url}`, 'nfecentrecount');//NFE centre count 
    this.getDetails(`${clcCount_url}`, 'clccentrecount'); // ALC Center count
    this.getDetails(`${CenterCount_url}`, 'centercount'); // ALC Center count


  }
  async getDetails(url, targetstate) {
    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        //NFE Center Details
        if (targetstate == "nfecentrecount") {
          this.setState({
            nfecount: responseJson.toString(),
          });

          // alert(responseJson.toString())
        }

        //CLC Center Details
        if (targetstate == "clccentrecount") { //CenterCount_url
          this.setState({
            clccount: responseJson.toString(),
          });

          // alert(responseJson.toString())
        }

        //total Center count
        if (targetstate == "centercount") { //CenterCount_url
          this.setState({
            count: responseJson[0].count.toString(),
          });

          // alert(responseJson.toString())
        }
      })
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#fff' barStyle="light-content" />

        <View style={styles.header}>
          <TouchableOpacity
            onPress={this.home}>
            <View style={styles.categoryIcon}>
              <Fontisto name="arrow-left" size={20} color="#fff" />
            </View>
          </TouchableOpacity>

          <Text style={styles.headerText}> Total Centre in Bhutan</Text>
        </View>
        <Animatable.View
          animation="fadeInUpBig"
          style={styles.footer}
        >
          <ScrollView>
            <Fieldset>
              <Text style={styles.action} >Total NFE Centres:</Text>
              <TextInput type style={styles.placeholder1}
                value={this.state.nfecount}
                placeholder="1"
                editable={false}

              />
              <Text style={styles.action} >Total ALC Centres:</Text>
              <TextInput type style={styles.placeholder1}
                value={this.state.clccount}
                placeholder="3"
                editable={false}

              />

              <Text style={styles.action} >Total Centre Counts:</Text>
              <TextInput type style={styles.placeholder1}
                value={this.state.count}
                placeholder="3"
                editable={false}

              />

            </Fieldset>
          </ScrollView>

        </Animatable.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 0, paddingTop: 0,
    backgroundColor: '#43bfb5',

  },
  head: { height: 40, backgroundColor: '#43bfb5' },
  text: { margin: 4, color: '#111', fontWeight: 'bold' },
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1', color: '#111' },
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB', borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' },
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
  text_header: {
    color: '#40464a',
    fontWeight: 'bold',
    fontSize: 30
  },
  text_footer: {
    color: '#111',
    fontSize: 24
  },
  list: {
    color: '#40464a',
    fontWeight: 'bold',
    fontSize: 17,
    margin: 20

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

  placeholder1: {
    borderRadius: 7,
    height: 90,
    fontSize: 24,
    borderColor: '#3b3d3d',
    margin: 20,
    borderBottomWidth: 15,
    color: '#fff',
    backgroundColor: '#34b7eb',
    // justifyContent:'center'


  },

  action: {
    flexDirection: 'row',
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    fontSize: 18,
    fontWeight: 'bold',



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
  btn: {
    backgroundColor: '#1E90FF',
    height: 50,
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 50

  },
  btnText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',


  },
});

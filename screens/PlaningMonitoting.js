import React, { Component } from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
  TextInput,
  TouchableOpacity

} from 'react-native';
import {Fieldset} from 'react-native-clean-form';
import { RadioGroup } from 'react-native-btr';
import * as Animatable from 'react-native-animatable';
import {dzongkhag_url} from './config/rest_config/';
import AsyncStorage from '@react-native-community/async-storage';
import { Textarea } from 'native-base';
import Fontisto from 'react-native-vector-icons/Fontisto';
class PlaningMonitoting extends Component {
  constructor() {
    super();
    this.state = {
        dzongkhagName: '',
        plan: '',
        description: '',

      radioButtons: [{
          label: '1',
          value: '1',
          checked: true,
          color: '#F44336',
          disabled: false,
          flexDirection: 'row',
          size: 9,
          justifyContent: 'center'
        },

        {
          label: '2',
          value: '2',
          checked: false,
          color: '#FF8F00',
          disabled: false,
          flexDirection: 'row',
          size: 9,
          justifyContent: 'center'

        },

        {
          label: '3',
          value: '3',
          checked: false,
          color: '#1B5E20',
          disabled: false,
          flexDirection: 'row',
          size: 9,
          justifyContent: 'center'

        },
        {
          label: '4',
          value: '4',
          checked: false,
          color: '#1B5E20',
          disabled: false,
          flexDirection: 'row',
          size: 9,
          justifyContent: 'center'

        }

      ],
    }
  }

  PlaningMonitoting = () => {
    const { navigation } = this.props;
    navigation.navigate('MonitoringTools');

  };
  async componentDidMount() {
    let dzon_id = await AsyncStorage.getItem('dzon_id');
    this.getDetails(`${dzongkhag_url}` + dzon_id, 'dzo'); //Dzongkhag
  }
  async getDetails(url, targetstate) {
    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        //Dzongkhag Name pulling here
        if (targetstate == 'dzo') {
          this.setState({
            dzongkhagName: responseJson.data.name,
          });
        }
      })
      .catch(error => console.log(error)); //to catch the errors if any
  }
  //API for submitting data to database
  submit = () => {
      fetch('http://10.0.2.2:8080/MobileApp-lumen/public/api/insertMonitoringA', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "dzongkhagName":this.state.dzongkhagName,
            "plan": this.state.plan,
            "description": this.state.description,
        }),
      })
        .then((response) => response.json())
        .then((responseData) => {
          "POST Response",
            "Response Body -> " + JSON.stringify(responseData)
        })
    alert("Data save successfully");
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#43bfb5' barStyle="light-content" />
          <View style={styles.header}>
            <TouchableOpacity onPress={this.PlaningMonitoting}>
              <View style={styles.categoryIcon}>
                <Fontisto name="arrow-left" size={20} color="#fff" />
              </View>
            </TouchableOpacity>
            <Text style={styles.headerText}>Planning</Text>
          </View>
          <Animatable.View animation="fadeInUpBig"style={styles.footer}>
          <ScrollView>
            <Fieldset>
                <Text style={styles.action}>Dzongkhag/Thromde:</Text>
                    <TextInput
                      type
                          style={styles.placeholder1}
                          placeholder="Dzongkhag/Thromde"
                          value={this.state.dzongkhagName}
                          editable={false}
                        />
                      <Text >  </Text>
                <Text style={styles.action}> Plan for up-scaling NFE programme by Dzongkhag/Thromde:</Text>
                <View style={styles.RadioButton}>
                  <RadioGroup color='#0277BD'
                          labelStyle={{ fontSize: 14, }}
                          radioButtons={this.state.radioButtons}
                          onPress={radioButtons => this.setState({ radioButtons })}
                          style={{ padding: 20, flexDirection: 'row' }}
                          onChangeText={input => this.setState({ plan: input })}
                  />
                </View>
                <Text style={styles.action}>Observation/Description:</Text>
                <Textarea style={styles.placeholder}
                      placeholder="Observation/description"
                      onChangeText={input => this.setState({ description: input })}
                />
            </Fieldset>
            <TouchableOpacity style={styles.btn}
              onPress={() => this.submit()}>
              <Text style={styles.btnText}>save</Text>
            </TouchableOpacity>
          </ScrollView>
        </Animatable.View>
      </View>
    );
  };
};


export default PlaningMonitoting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#43bfb5'
  },
  header: {
    flex: 0.5,
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
    paddingBottom: 15,
    color: '#111',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 30,
    marginTop: -24
  },
  categoryIcon: {
    marginTop: 20,
    marginLeft: 0,
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
    fontSize: 14,
    justifyContent: 'center',
    marginTop: 4,
    fontWeight: 'bold',
    borderColor: '#05375a',

    height: 23,
    width: 200


  },


  placeholder: {
    borderWidth: 0.8,
    borderRadius: 3,
    height: 100,
    fontSize: 12,
    borderColor: '#76b3db',
    marginTop: 20

  },
  placeholder1: {
    borderRadius: 3,
    height: 40,
    fontSize: 14,
    borderColor: '#76b3db',
    marginTop: 5,
    backgroundColor: '#f5f5f5',
    color: '#3A8BE3',
  },
  action: {
    flexDirection: 'row',
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    fontSize: 15,
    // fontWeight: 'bold'
  },
  actionplaceholder: {
    flexDirection: 'row',
    marginTop: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    fontSize: 16,
    borderWidth: 0.4,
    borderColor: '#76b3db'

  },
  RadioButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginRight: 20



  },
  Radiohead: {
    marginTop: 10
  },
  Radioheadspace: {
    marginRight: 50,
  },
  selectedItemView:
  {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 14,
    backgroundColor: '#263238',
    justifyContent: 'center',
    alignItems: 'center'
  },

  selectedText:
  {
    fontSize: 17,
    color: '#fff'
  },
  btn: {
    backgroundColor: '#43bfb5',
    height: 40,
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:5,
    marginTop:10


  },
  btnText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    


  },
});

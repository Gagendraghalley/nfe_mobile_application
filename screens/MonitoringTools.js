import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
  TextInput,
  ActivityIndicator
} from 'react-native';
import {FieldsContainer, Fieldset} from 'react-native-clean-form';
import * as Animatable from 'react-native-animatable';
import {Picker} from '@react-native-picker/picker';
import {monitoringTools} from './config/rest_config/';
import {dzongkhag_url} from './config/rest_config/';
import {gewog_url} from './config/rest_config/';
import {centreDetails_url} from './config/rest_config/';
import AsyncStorage from '@react-native-community/async-storage';

class MonitoringTools extends Component {
  constructor(props) {
    super(props);
      this.state = {
          dzongkhagName: '',
          gewogName: 'null',
          centerName: 'null',
          school: 'Sarpang HSS',
          monitoring_title: '',
          MonitoringLists: [],
      };
  }
    PlaningMonitoting = () => {
      const {navigation} = this.props;
      navigation.navigate('PlaningMonitoting');
    };

    ClassRoomManagement = () => {
      const {navigation} = this.props;
      navigation.navigate('ClassRoomManagement');
    };

    SkillDevelopmentMonotoring = () => {
      const {navigation} = this.props;
      navigation.navigate('SkillDevelopmentMonotoring');
    };

    MON = () => {
      const {navigation} = this.props;
      navigation.navigate('ManagementOfNfeEmis');
    };

  async componentDidMount() {
      let dzon_id = await AsyncStorage.getItem('dzon_id');
      let gewog_id = await AsyncStorage.getItem('gewog_id');
      let nfe_center_id = await AsyncStorage.getItem('nfe_center_id');

      this.getDetails(`${dzongkhag_url}` + dzon_id, 'dzo'); //Dzongkhag
      this.getDetails(`${gewog_url}` + gewog_id, 'gewog'); //gewog
      this.getDetails(`${monitoringTools}`, 'monitoringTools'); //MonitoringTools
      this.getDetails(`${centreDetails_url}` + nfe_center_id, 'center_Details'); //center Details
    }
  async getDetails(url, targetstate) {
    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {

        //Monitoring Tools
        if (targetstate == 'monitoringTools') {
          this.setState({
            MonitoringLists: responseJson,
          });
        }

        //Dzongkhag
        if (targetstate == 'dzo') {
          this.setState({
            dzongkhagName: responseJson.data.name,
          });
        }
        //Gewog
        if (targetstate == 'gewog') {
          this.setState({
            gewogName: responseJson.data.name,
          });
        }
        //parent school
        if (targetstate == 'school') {
          this.setState({
            school: responseJson.data.parent_school,
          });
        }

        //Center details
        if (targetstate == 'center_Details') {
          this.setState({
            centerName: responseJson[0].centre_name,
          });
        }
      })
      .catch(error => console.log(error)); //to catch the errors if any
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#fff" barStyle="light-content" />
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <ScrollView>
            <FieldsContainer>
              <Fieldset>
                <Text style={styles.action}>Choose Monitorging Type:</Text>
                {
                  <Picker
                    style={{
                        width: 340,
                        height: 55,
                        fontSize: 25,
                        color: '#3A8BE3',
                        borderBottonWidth: 1,
                      }}
                      selectedValue={this.state.Monitoring}
                      onValueChange={(itemValue, itemIndex) => {
                        // alert(itemValue);
                      this.setState({monitoring_title: itemValue});
                      }}>
                    <Picker.Item
                      label='Select Monitoring type'
                      value="Monitoring"
                    />
                    {this.state.MonitoringLists.map(item => {
                      return (
                        <Picker.Item
                          label={`${item.monitoring_title}`}
                          value={`${item.id}`}
                          key={item.id}
                        />
                      );
                    })}
                  </Picker>
                }
               
                {/* Dzongkhag/Thromde */}
                { this.state.monitoring_title === 'beb124b1-9a60-49cd-b08a-2675990fb9c8' && (
                  <>
                <Text style={styles.action}>Dzongkhag/Thromde:</Text>
                  <TextInput type
                          style={styles.placeholder1}
                          placeholder="Dzongkhag/Thromde"
                          value={this.state.dzongkhagName}
                          editable={false}/>
                    <Text></Text>
                    <TouchableOpacity onPress={this.PlaningMonitoting}
                        style={[
                              styles.link,
                              {
                                  borderColor: '#111',
                                  borderWidth: 0.1,
                                  marginTop: 0,
                              },
                        ]}>
                    
                        <Text style={[ styles.textlink,
                            {
                                  color: '#fcfdff',
                                  marginLeft: 20,
                                  fontSize: 15,
                            },
                          ]}>
                          A. Planning
                        </Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={this.SkillDevelopmentMonotoring}
                      style={[
                        styles.link,
                          {
                            borderColor: '#111',
                            borderWidth: 0.1,
                            marginTop: 15,
                          },
                      ]}>
                    <Text
                      style={[
                        styles.textlink,
                        {
                            color: '#fcfdff',
                            marginLeft: 20,
                            fontSize: 15,
                        },
                      ]}>
                      {' '}
                    B. Management and Administration
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.SkillDevelopmentMonotoring}
                      style={[
                        styles.link,
                          {
                            borderColor: '#111',
                            borderWidth: 0.1,
                            marginTop: 15,
                          },
                      ]}>
                    <Text
                      style={[
                        styles.textlink,
                        {
                            color: '#fcfdff',
                            marginLeft: 20,
                            fontSize: 15,
                        },
                      ]}>
                      {' '}
                      C. General Comments and Feedback
                    </Text>
                  </TouchableOpacity>

                </>
                )}
                  {/* Principal */}
                {this.state.monitoring_title === '2143713a-1d63-4c2d-a5be-186c5faf37db' && (
                  <>
                   <Text style={styles.action}>Dzongkhag/Thromde:</Text>
                    <TextInput
                      type
                      style={styles.placeholder1}
                      placeholder="Dzongkhag/Thromde"
                      value={this.state.dzongkhagName}
                      editable={false}
                    />
                    <Text style={styles.action}>Parent School:</Text>
                    <TextInput type  style={styles.placeholder1}
                          placeholder="parent school"
                          value={this.state.dzongkhagName}
                          editable={false}
                      />

                    <Text></Text>

                    <TouchableOpacity onPress={this.PlaningMonitoting}
                      style={[styles.link,
                          {
                            borderColor: '#111',
                            borderWidth: 0.1,
                            marginTop: 0,
                          },
                      ]}>
                     <Text style={[ styles.textlink,
                        {
                            color: '#fcfdff',
                            marginLeft: 20,
                            fontSize: 15,
                        },
                      ]}>
                      A. Planning
                    </Text>
                  </TouchableOpacity>

                <TouchableOpacity  onPress={this.MON} style={[ styles.link,
                    {
                      borderColor: '#111',
                      borderWidth: 0.1,
                      marginTop: 15,
                    },
                ]}>
                <Text
                  style={[ styles.textlink,
                    {
                      color: '#fcfdff',
                      marginLeft: 20,
                      fontSize: 15,
                    },
                  ]}>
                  B. Management of NFE-EMIS
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.SkillDevelopmentMonotoring}
                  style={[
                    styles.link,
                    {
                      borderColor: '#111',
                      borderWidth: 0.1,
                      marginTop: 15,
                    },
                ]}>
                <Text
                  style={[
                    styles.textlink,
                    {
                      color: '#fcfdff',
                      marginLeft: 20,
                      fontSize: 15,
                    },
                  ]}>
                  {' '}
                  C. General Comments and Feedback
                </Text>
              </TouchableOpacity>
                      </>
                )}

                {/* Local Leader */}
                {this.state.monitoring_title === '20550331-0d32-4806-809d-642793d2ad94' && (
                  <>
                    <Text style={styles.action}>Dzongkhag/Thromde:</Text>
                      <TextInput
                        type
                          style={styles.placeholder1}
                          placeholder="Dzongkhag/Thromde"
                          value={this.state.dzongkhagName}
                          editable={false}
                      />
                    <Text style={styles.action}>Gewog/Thromde Demkhong:</Text>
                      <TextInput
                        type
                          style={styles.placeholder1}
                          value={this.state.centerName}
                          placeholder="Centre Name"
                          editable={false}
                      />
                      <Text></Text>
                      <TouchableOpacity onPress={this.PlaningMonitoting}
                    style={[
                          styles.link,
                          {
                            borderColor: '#111',
                            borderWidth: 0.1,
                            marginTop: 0,
                          },
                    ]}>
                    <Text style={[ styles.textlink,
                        {
                            color: '#fcfdff',
                            marginLeft: 20,
                            fontSize: 15,
                        },
                      ]}>
                      A. Planning
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={this.MON} style={[ styles.link,
                    {
                      borderColor: '#111',
                      borderWidth: 0.1,
                      marginTop: 15,
                    },
                ]}>
                <Text
                  style={[ styles.textlink,
                    {
                      color: '#fcfdff',
                      marginLeft: 20,
                      fontSize: 15,
                    },
                  ]}>
                  B. Management of NFE-EMIS
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.SDM}
                style={[
                  styles.link,
                    {
                      borderColor: '#111',
                      borderWidth: 0.1,
                      marginTop: 15,
                    },
                ]}>
                <Text
                  style={[
                    styles.textlink,
                      {
                        color: '#fcfdff',
                        marginLeft: 20,
                        fontSize: 15,
                      },
                  ]}>
                  C. Community Vitality
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={this.SkillDevelopmentMonotoring}
                  style={[
                    styles.link,
                      {
                          borderColor: '#111',
                          borderWidth: 0.1,
                          marginTop: 15,
                      },
                ]}>
                <Text
                  style={[
                    styles.textlink,
                    {
                      color: '#fcfdff',
                      marginLeft: 20,
                      fontSize: 15,
                    },
                  ]}>
                  {' '}
                  D. General Comments and Feedback
                </Text>
              </TouchableOpacity>
                  </>
                  
                )}

                {/* NFE Instructor */}
                {this.state.monitoring_title === 'a7b030a5-cb05-4e82-943e-6636e45fe725' && (
                  <>
                    <Text style={styles.action}>Dzongkhag/Thromde:</Text>
                    <TextInput
                      type
                          style={styles.placeholder1}
                          placeholder="Dzongkhag/Thromde"
                          value={this.state.dzongkhagName}
                          editable={false}
                    />
                    <Text style={styles.action}>Parent School:</Text>
                    <TextInput
                      type
                          style={styles.placeholder1}
                          placeholder="Gewog/Demkhong"
                          value={this.state.gewogName}
                          editable={false}
                    />
                    <Text style={styles.action}>Centre Name:</Text>
                    <TextInput
                      type
                          style={styles.placeholder1}
                          value={this.state.centerName}
                          placeholder="Centre Name"
                          editable={false}
                    />
                  <Text></Text>
                  <TouchableOpacity onPress={this.PlaningMonitoting}
                    style={[
                          styles.link,
                          {
                              borderColor: '#111',
                              borderWidth: 0.1,
                              marginTop: 0,
                          },
                    ]}>
                    <Text style={[ styles.textlink,
                        {
                              color: '#fcfdff',
                              marginLeft: 20,
                              fontSize: 15,
                        },
                      ]}>
                      A. Planning
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.ClassRoomManagement}
                  style={[
                    styles.link,
                      {
                          borderColor: '#111',
                          borderWidth: 0.1,
                          marginTop: 15,
                      },
                  ]}>
                  <Text
                    style={[
                      styles.textlink,
                      {
                          color: '#fcfdff',
                          marginLeft: 20,
                          fontSize: 15,
                      },
                    ]}>
                    B. Classroom Management
                  </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.SkillDevelopmentMonotoring}
                style={[
                  styles.link,
                  {
                      borderColor: '#111',
                      borderWidth: 0.1,
                      marginTop: 15,
                  },
                ]}>
                <Text
                  style={[
                    styles.textlink,
                    {
                        color: '#fcfdff',
                        marginLeft: 20,

                        fontSize: 15,
                    },
                  ]}>
                  C. Assessment & Skill Development
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.SkillDevelopmentMonotoring}
                    style={[
                      styles.link,
                      {
                          borderColor: '#111',
                          borderWidth: 0.1,
                          marginTop: 15,
                      },
                  ]}>
                  <Text
                    style={[
                      styles.textlink,
                      {
                          color: '#fcfdff',
                          marginLeft: 20,
                          fontSize: 15,
                      },
                    ]}>
                    {' '}
                    D. General Comments and Feedback
                  </Text>
              </TouchableOpacity>
                  </>
                )}
                 {/* CLC Instructor */}
                {this.state.monitoring_title === '0cb84ba8-cd8d-4072-b4ba-e32545fd959e' && (
                  <>
                    <Text style={styles.action}>Dzongkhag/Thromde:</Text>
                    <TextInput
                      type
                          style={styles.placeholder1}
                          placeholder="Dzongkhag/Thromde"
                          value={this.state.dzongkhagName}
                          editable={false}
                    />
                    <Text style={styles.action}>Parent School:</Text>
                      <TextInput
                        type
                            style={styles.placeholder1}
                            placeholder="Gewog/Demkhong"
                            value={this.state.gewogName}
                            editable={false}
                      />
                    <Text style={styles.action}>Centre Name:</Text>
                      <TextInput
                        type
                            style={styles.placeholder1}
                            value={this.state.centerName}
                            placeholder="Centre Name"
                            editable={false}
                      />
                    <Text></Text>
                    <TouchableOpacity onPress={this.PlaningMonitoting}
                      style={[
                            styles.link,
                            {
                                borderColor: '#111',
                                borderWidth: 0.1,
                                marginTop: 0,
                            },
                      ]}>
                    <Text style={[ styles.textlink,
                        {
                              color: '#fcfdff',
                              marginLeft: 20,
                              fontSize: 15,
                        },
                      ]}>
                      A. Planning
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.ClassRoomManagement}
                  style={[
                    styles.link,
                        {
                            borderColor: '#111',
                            borderWidth: 0.1,
                            marginTop: 15,
                        },
                  ]}>
                <Text
                  style={[
                    styles.textlink,
                      {
                          color: '#fcfdff',
                          marginLeft: 20,
                          fontSize: 15,
                      },
                  ]}>
                  B. Classroom Management
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.SkillDevelopmentMonotoring}
                  style={[
                    styles.link,
                      {
                          borderColor: '#111',
                          borderWidth: 0.1,
                          marginTop: 15,
                      },
                  ]}>
                <Text
                  style={[
                    styles.textlink,
                      {
                          color: '#fcfdff',
                          marginLeft: 20,
                          fontSize: 15,
                      },
                  ]}>
                  C. Assessment & Skill Development
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.SkillDevelopmentMonotoring}
                  style={[
                    styles.link,
                      {
                          borderColor: '#111',
                          borderWidth: 0.1,
                          marginTop: 15,
                      },
                ]}>
                <Text
                  style={[
                    styles.textlink,
                      {
                          color: '#fcfdff',
                          marginLeft: 20,
                          fontSize: 15,
                      },
                  ]}>
                  {' '}
                  D. General Comments and Feedback
                </Text>
              </TouchableOpacity>
                  </>
                )}
              </Fieldset>
            </FieldsContainer>
          </ScrollView>
        </Animatable.View>
      </View>
    );
  }
}
export default MonitoringTools;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    fontSize: 22,
    fontWeight: 'bold',
  },
  footer: {
    flex: Platform.OS === 'ios' ? 3 : 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#40464a',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#111',
    fontSize: 24,
  },
  action: {
    flexDirection: 'row',
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    fontSize: 17,
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
    marginTop: 10,
  },
  link: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    borderRadius: 10,
    paddingTop: 5,
    paddingBottom: 10,
    backgroundColor: '#3f78eb',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 10,
    shadowRadius: 15,
    shadowOffset: {width: 1, height: 13},
  },
  textlink: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  placeholder: {
    borderWidth: 0.8,
    borderRadius: 3,
    height: 40,
    fontSize: 12,
    borderColor: '#76b3db',
    marginTop: 5,
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
});

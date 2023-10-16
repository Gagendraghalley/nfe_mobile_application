import React, { Component, userState, UserEffect } from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity, Alert,
  Platform,
  ScrollView,
  StatusBar,
  TextInput,
} from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import { Button, Fieldset, } from 'react-native-clean-form'
import Fontisto from 'react-native-vector-icons/Fontisto';
import * as Animatable from 'react-native-animatable';
import DatePicker from 'react-native-datepicker';

import AsyncStorage from '@react-native-community/async-storage';
import { centreDetails_url } from './config/rest_config/';
import { Learner_DetailsbysectionId } from './config/rest_config/';
import { Learner_DetailsbyCentreIDCourseIDSkillID } from './config/rest_config/';
import { instructor_url } from './config/rest_config/'
import { icons } from '../constants';

export default class Attendance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      centerCode: 'null',
      centerName: 'null',
      section_id: 'null',
      // date: "20-05-15",
      cid_reference_no: "null",
      learner_name: 'null',
      tableHead: ['CID/Ref Number', 'Name of Learners', 'No of present days'],
      LearnerList: [],

      // centreCode: '',
    }

  }
  home = () => {
    const { navigation } = this.props;
    navigation.navigate('Home');

  };
  async componentDidMount() {

    let staff_id = await AsyncStorage.getItem('staff_id');
    let nfe_center_id = await AsyncStorage.getItem('nfe_center_id');
    this.getDetails(`${instructor_url}` + staff_id, 'instructor_url');//instructor Details
    this.getDetails(`${centreDetails_url}` + nfe_center_id, 'centreDetails_url');//center Details

  }
  async getDetails(url, targetstate) {
    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        
        //Instructor Details
        if (targetstate == "centreDetails_url") {
          this.setState({
            centre_name: responseJson[0].centre_name,
            centre_code: responseJson[0].centre_code,
            course_id: responseJson[0].course_id,
            skill_id: responseJson[0].skill_id,
            centre_status: responseJson[0].centre_status,
          });
        }

        //Instructor Details
        if (targetstate == "instructor_url") {
          this.setState({
            section_id: responseJson.section_id,
            course_id: responseJson.course_id,
            skill_id: responseJson.skill_id,
            centre_id: responseJson.centre_id,
          });
            if (this.state.section_id != null) {
              this.getDetails(`${Learner_DetailsbysectionId}` + this.state.section_id, 'learner_list_withSection');
            }
            else if (this.state.course_id != null) {
              this.getDetails(`${Learner_DetailsbyCentreIDCourseIDSkillID}` + this.state.centre_id, + this.state.course_id, + null, 'learner_list_withCentreIdCourseID');

            }
            else {
              this.getDetails(`${Learner_DetailsbyCentreIDCourseIDSkillID}` + this.state.centre_id, + null, + skill_id, 'learner_list_withCentreIdSkillId');

            }
        }
        //Leaner list with section
        let learners = [];
        if (targetstate == "learner_list_withSection") {
          for (let i = 0; i < responseJson.length; i++) {
            learners.push([responseJson[i].cid_reference_no, responseJson[i].learner_name, responseJson[i].qualification]);
          }
          this.setState({
            LearnerList: learners,
          });
        }
        //Leaner list with centreId and courseID
        if (targetstate == "learner_list_withCentreIdCourseID") {
          for (let i = 0; i < responseJson.length; i++) {
            learners.push([responseJson[i].cid_reference_no, responseJson[i].learner_name, responseJson[i].qualification]);
          }
          this.setState({
            LearnerList: learners,
          });
        }

        //Leaner list with centreId and SkillId
        if (targetstate == "learner_list_withCentreIdSkillId") {
          for (let i = 0; i < responseJson.length; i++) {
            learners.push([responseJson[i].cid_reference_no, responseJson[i].learner_name, responseJson[i].qualification]);
          }
          this.setState({
            LearnerList: learners,
          });
        }

      })
  }

  //Feedback to admin services
  submit = () => {
    fetch('http://10.0.2.2:8009/admin_api/v1/feedback/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "feedbackType": this.state.feedbackType,

      }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        "POST Response",
          "Response Body -> " + JSON.stringify(responseData)
      })
    alert("Information submitted successfully");

  };

  render() {
    const state = this.state;
    const element = (data, index) => (
      <View>
        <TextInput type style={styles.placeholder1}
          placeholder="100"
        />
      </View>
    );

    return (

      <View style={styles.container}>
        <StatusBar backgroundColor='#43bfb5' barStyle="light-content" />

        <View style={styles.header}>
          <TouchableOpacity
            onPress={this.home}>
            <View style={styles.categoryIcon}>
              <Fontisto name="arrow-left" size={20} color="#fff" />
            </View>
          </TouchableOpacity>

          <Text style={styles.headerText}> Monthly Learner Attendance</Text>
        </View>
        <Animatable.View
          animation="fadeInUpBig"
          style={styles.footer}
        >
          <ScrollView>
            <Fieldset>
              <Text style={styles.action} >Centre Name:</Text>
              <TextInput type style={styles.placeholder1}
                value={this.state.centre_name}
                placeholder="Tashling"
                editable={false}

              />

              <Text style={styles.action} >Centre Code :</Text>
              <TextInput type style={styles.placeholder1}
                value={this.state.centre_code}
                placeholder="220121211"
                editable={false}

              />

              <View>
                <Text style={styles.list}>
                  List of Learners:
              </Text>
              </View>

              <View style={styles.container}>
                <Table borderStyle={{ borderColor: 'transparent' }}>
                  <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
                  {
                    state.LearnerList.map((rowData, index) => (
                      <TableWrapper key={index} style={styles.row}>
                        {
                          rowData.map((cellData, cellIndex) => (
                            <Cell key={cellIndex} data={cellIndex === 2 ? element(cellData, index) : cellData} textStyle={styles.text} />
                          ))
                        }
                      </TableWrapper>
                    ))
                  }
                </Table>
              </View>

            </Fieldset>
            <TouchableOpacity style={styles.btn}
              onPress={() => this.submit()}>
              <Text style={styles.btnText}>submit</Text>
            </TouchableOpacity>
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

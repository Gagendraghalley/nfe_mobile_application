import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {instructor_url} from './config/rest_config/';
import {Button, Fieldset} from 'react-native-clean-form';
import {useTheme, Avatar} from 'react-native-paper';

class InstructorProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructor_name: 'null',
      dob: 'null',
      contact_no: 'null',
      cid_no: 'null',
      qualification: 'null',
      dzongkhag: 'null',
      gewog: 'null',
      village: 'null',
      gender: 'null',
      instructor_code: 'null',
      email: 'null',
      thram_no: 'null',
      house_no: 'null',
      appointment_date: 'null',
    };
  }
  async componentDidMount() {
    let staff_id = await AsyncStorage.getItem('staff_id');
    this.getDetails(`${instructor_url}` + staff_id, 'profile'); //user profile
  }

  async getDetails(url, targetstate) {
    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        if (targetstate == 'profile') {
          this.setState({
            isLoading: true,
            instructor_name: responseJson.instructor_name,
            instructor_code: responseJson.instructor_code,
            dob: responseJson.dob,
            gender: responseJson.gender,
            contact_no: responseJson.contact_no,
            email: responseJson.email,
            alternative_email: responseJson.alternative_email,
            cid_no: responseJson.cid_no,
            qualification: responseJson.qualification,
            dzongkhag: responseJson.dzongkhag,
            gewog: responseJson.gewog,
            village: responseJson.village,
            thram_no: responseJson.thram_no,
            house_no: responseJson.house_no,
            appointment_date: responseJson.appointment_date,
            section_id: responseJson.section_id,
          });
        }
      });
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Fieldset>
          <ScrollView>
            <View style={styles.menuWrapper}>
              <View style={styles.menuItem}>
                <TextInput style={styles.menuItemText} editable={false}> Name:</TextInput>
                <TextInput style={styles.menuItemText1} value={this.state.instructor_name} editable={false}/>
              </View>

              <View style={styles.menuItem}>
                <TextInput style={styles.menuItemText} editable={false}>
                  Date of Birth:
                </TextInput>
                <TextInput style={styles.menuItemText1} value={this.state.dob} editable={false}/>
              </View>
              <View style={styles.menuItem}>
                <TextInput style={styles.menuItemText} editable={false}>
                  Gender:
                </TextInput>
                <TextInput
                  style={styles.menuItemText1}
                  value={this.state.gender}
                  editable={false}
                />
              </View>

              <View style={styles.menuItem}>
                <TextInput style={styles.menuItemText} editable={false}>
                  Instructor Code:
                </TextInput>
                <TextInput
                  style={styles.menuItemText1}
                  value={this.state.instructor_code}
                  editable={false}
                />
              </View>

              <View style={styles.menuItem}>
                <TextInput style={styles.menuItemText} editable={false}>
                  Contact Number:
                </TextInput>
                <TextInput
                  style={styles.menuItemText1}
                  value={this.state.contact_no}
                  editable={false}
                />
              </View>

              <View style={styles.menuItem}>
                <TextInput style={styles.menuItemText} editable={false}>
                  Email Address:
                </TextInput>
                <TextInput
                  style={styles.menuItemText1}
                  value={this.state.email}
                  editable={false}
                />
              </View>

              <View style={styles.menuItem}>
                <TextInput style={styles.menuItemText} editable={false}>
                  Alternative Email:
                </TextInput>
                <TextInput
                  style={styles.menuItemText1}
                  value={this.state.alternative_email}
                  editable={false}
                />
              </View>

              <View style={styles.menuItem}>
                <TextInput style={styles.menuItemText} editable={false}>
                  CID/Reference Number :
                </TextInput>
                <TextInput
                  style={styles.menuItemText1}
                  value={this.state.cid_no}
                  editable={false}
                />
              </View>

              <View style={styles.menuItem}>
                <TextInput style={styles.menuItemText} editable={false}>
                  Qualification:
                </TextInput>
                <TextInput
                  style={styles.menuItemText1}
                  value={this.state.qualification}
                  editable={false}
                />
              </View>

              <View style={styles.menuItem}>
                <TextInput style={styles.menuItemText} editable={false}>
                  Dzongkhag:
                </TextInput>
                <TextInput
                  style={styles.menuItemText1}
                  value={this.state.dzongkhag}
                  editable={false}
                />
              </View>

              <View style={styles.menuItem}>
                <TextInput style={styles.menuItemText} editable={false}>
                  Gewog:
                </TextInput>
                <TextInput
                  style={styles.menuItemText1}
                  value={this.state.gewog}
                  editable={false}
                />
              </View>

              <View style={styles.menuItem}>
                <TextInput style={styles.menuItemText} editable={false}>
                  Village:
                </TextInput>
                <TextInput
                  style={styles.menuItemText1}
                  value={this.state.village}
                  editable={false}
                />
              </View>

              <View style={styles.menuItem}>
                <TextInput style={styles.menuItemText} editable={false}>
                  Tharm No:
                </TextInput>
                <TextInput
                  style={styles.menuItemText1}
                  value={this.state.thram_no}
                  editable={false}
                />
              </View>

              <View style={styles.menuItem}>
                <TextInput style={styles.menuItemText} editable={false}>
                  House No:
                </TextInput>
                <TextInput
                  style={styles.menuItemText1}
                  value={this.state.house_no}
                  editable={false}
                />
              </View>

              <View style={styles.menuItem}>
                <TextInput style={styles.menuItemText} editable={false}>
                  Appointment Date:
                </TextInput>
                <TextInput
                  style={styles.menuItemText1}
                  value={this.state.appointment_date}
                  editable={false}
                />
              </View>
            </View>
          </ScrollView>
        </Fieldset>
      </SafeAreaView>
    );
  }
}
export default InstructorProfileScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F2F3F4' 
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {},
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderWidth: 0.3,
    borderBottomColor: '#f5f5f5',
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 10,
    fontSize: 14,
    lineHeight: 26,
    fontWeight: 'bold',
    // marginRight:'200'
  },
  menuItemText1: {
    color: '#3A8BE3',
    marginLeft: 10,
    fontSize: 15,
    lineHeight: 24,
    fontWeight: 'bold',
    // marginRight:'200'
  },
});

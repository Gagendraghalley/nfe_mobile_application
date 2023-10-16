import React, {Component} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {instructorprofileUpdate_url} from './config/rest_config/';

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact_no: 'null',
      alternative_email: 'null',
      url: 'null',
      staff_id: null,
    };
  }
  async componentDidMount() {
    const staff_id = await AsyncStorage.getItem('staff_id');
    this.setState({
      staff_id: staff_id,
    });
    // alert(staff_id)
    this.getDetails(`${instructor_url}` + staff_id, 'profile'); //user profile
  }
  // Updating the instructor profile
  submit = (contact_no, alternative_email) => {
    fetch(
      `http://ins.moe.bt/instructor_api/v1/instructorprofile/${
        this.state.staff_id
      }`,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contact_no: this.state.contact_no,
          alternative_email: this.state.alternative_email,
        }),
      },
    )
      .then(response => response.json())
      .then(responseData => {
        'POST Response', 'Response Body -> ' + JSON.stringify(responseData);
      });

    if (contact_no == 0 || alternative_email == 0) {
      Alert.alert(
        'Contact number or Alternative email field cannot be empty.',
        [{text: 'Okay'}],
      );
      return;
    }

    Alert.alert('Information updated successfully');
    [{text: 'Okay'}];
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#fff" barStyle="light-content" />

        <ScrollView>
          <View style={styles.menuItem}>
            <TextInput style={styles.menuItemText} editable={false}>
              Contact Number:
            </TextInput>
            <TextInput
              style={styles.menuItemText}
              placeholder="Contact Number"
              onChangeText={input => this.setState({contact_no: input})}
            />
          </View>

          <View style={styles.menuItem}>
            <TextInput style={styles.menuItemText} editable={false}>
              Alternative Email:
            </TextInput>
            <TextInput
              style={styles.menuItemText}
              placeholder="Alternative Email"
              onChangeText={input => this.setState({alternative_email: input})}
            />
          </View>

          <TouchableOpacity style={styles.btn} onPress={() => this.submit()}>
            <Text style={styles.btnText}>Save Changes</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

export default EditProfile;

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderWidth: 0.4,
    borderBottomColor: '#dddddd',
    marginTop: 10,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 10,
    fontSize: 14,
    lineHeight: 26,
    fontWeight: 'bold',
    // marginRight:'200'
  },
  btn: {
    backgroundColor: '#43bfb5',
    height: 40,
    width: 350,
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
  },

  btn1: {
    backgroundColor: '#de262f',
    height: 40,
    width: 350,
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
  },
  btnText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

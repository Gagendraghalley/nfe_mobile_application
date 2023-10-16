import React, { Component } from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
  TextInput,

  TouchableOpacity,

} from 'react-native';
import {

  Fieldset,
  Select

} from 'react-native-clean-form'

import Fontisto from 'react-native-vector-icons/Fontisto';
import * as Animatable from 'react-native-animatable';
import { Textarea } from 'native-base';



class FeedbackForms extends Component {

  constructor() {
    super();
    this.state = {
      feedbackType: 'null',
      feedback: 'null',
      cid_no: 'null',
      centerID: 'null',
      PhoneNumber: 'null',
      Email: 'null',
      Feedback: 'feedback',
    }
  }
  home = () => {
    const { navigation } = this.props;
    navigation.navigate('Home');

  };
  //API to sumbit information to admin service
  submit = () => {
    fetch('http://10.0.2.2:8009/api/feedback/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "feedbackType": this.state.feedbackType,
        "feedback": this.state.feedback,
        "PhoneNumber": this.state.PhoneNumber,
        "Email": this.state.Email,

      }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        "POST Response",
          "Response Body -> " + JSON.stringify(responseData);
        // alert(JSON.stringify(responseData));
      })
    // alert("Data submitted successfully");
  };

  render() {

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

          <Text style={styles.headerText}>Feedback Form</Text>
        </View>
        <Animatable.View
          animation="fadeInUpBig"
          style={styles.footer}
        >
          <ScrollView>
            <Fieldset>
              <Text style={styles.action}>Feedback Type: *</Text>
                <TextInput style={styles.placeholder}
                  placeholder="Enter the feedback type"
                  onChangeText={input => this.setState({ feedbackType: input })}
                />

              <Text style={styles.action} >Describe Your Feedback: *</Text>
                <Textarea style={styles.feedback}
                  placeholder=""
                  onChangeText={input => this.setState({ feedback: input })}
                />
              <Text style={styles.action} >Enter Your Phone Number: *</Text>
                <TextInput style={styles.placeholder}
                  placeholder="Enter your phone number"
                  onChangeText={input => this.setState({ PhoneNumber: input })}
                />
              <Text style={styles.action} >Enter Your Email Address: </Text>
              <TextInput style={styles.placeholder}
                placeholder="Enter your email address"
                onChangeText={input => this.setState({ Email: input })}/>
            </Fieldset>
            <TouchableOpacity style={styles.btn}
              onPress={() => this.submit()}>
              <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>
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

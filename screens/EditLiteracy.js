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

} from 'react-native-clean-form'
import Fontisto from 'react-native-vector-icons/Fontisto';
import * as Animatable from 'react-native-animatable';


class Literacy extends Component {

  constructor() {
    super();
    this.state = {
      literate_male: 'null',
      literate_female: 'null',
      TotalNumber:'null'
    }

  }

  Literacy = () => {
    const { navigation } = this.props;
    navigation.navigate('Literacy');

  };

  componentDidMount() {
    this.getDetails('http://10.0.2.2:8009/api/dzongkhags/1', 'male');//Dzongkhag
    this.getDetails('http://10.0.2.2:8009/api/gewogs/1', 'female');//gewog
  }

  async getDetails(url, targetstate) {
    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        // Male
        if (targetstate == "male") {
          this.setState({
            literate_male: responseJson.data.male,
          });
        }
        //Female
        if (targetstate == "female") {
          this.setState({
            literate_female: responseJson.data.female,
          });
        }
      })
  }

  //Updating the changes
  submit = () => {
    fetch('url', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "literate_male": this.state.literate_male,
        "literate_female": this.state.literate_female,

      }),
    })

      .then((response) => response.json())
      .then((responseData) => {
        "POST Response",
          "Response Body -> " + JSON.stringify(responseData)
      })
    alert("Information saved successfully");
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#fff' barStyle="light-content" />

        <View style={styles.header}>
          <TouchableOpacity
            onPress={this.Literacy}>
            <View style={styles.categoryIcon}>
              <Fontisto name="arrow-left" size={20} color="#fff" />
            </View>
          </TouchableOpacity>

          <Text style={styles.headerText}>Edit Literacy </Text>
        </View>
        <Animatable.View
          animation="fadeInUpBig"
          style={styles.footer}
        >
          <ScrollView>
            <Fieldset>


              <Text style={styles.action} >Numbers of Literate Male:</Text>
              <TextInput style={styles.menuItemText} placeholder="Male" value={this.state.literate_male}
                onChangeText={input => this.setState({ literate_male: input })} />

              <Text style={styles.action} >Numbers of Literate Female:</Text>
              <TextInput style={styles.menuItemText} placeholder="Female" value={this.state.literate_female}
                onChangeText={input => this.setState({ literate_female: input })} />


              <Text style={styles.action} >Total Numbers:</Text>
              <TextInput type style={styles.placeholder1}
                placeholder="Total Number"
                value={this.state.TotalNumber}
                editable={false}

              />


              <TouchableOpacity style={styles.btn}
                onPress={() => this.submit()}>
                <Text style={styles.btnText}>Save Changes</Text>
              </TouchableOpacity>


              <TouchableOpacity style={styles.btn1}
                onPress={this.EditProfile}>
                <Text style={styles.btnText}>Cancel</Text>
              </TouchableOpacity>
            </Fieldset>

          </ScrollView>

        </Animatable.View>
      </View>
    );
  }
}


export default Literacy;

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



  placeholder: {
    borderWidth: 0.8,
    borderRadius: 3,
    height: 40,
    fontSize: 12,
    borderColor: '#76b3db',
    marginTop: 5,


  },
  placeholder1: {
    // borderWidth: 0.8,
    borderRadius: 3,
    height: 40,
    fontSize: 12,
    borderColor: '#111',
    marginTop: 5,
    backgroundColor: '#f5f5f5'


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
  head: {
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    fontSize: 17,
    fontWeight: 'bold'
  },
  savebtn: {
    alignItems: 'center',
    marginTop: 10,
    width: 30,

  },
  btn: {
    backgroundColor: '#43bfb5',
    height: 40,
    width: 350,
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 10,
    marginTop: 30

  },
  btn1: {
    backgroundColor: '#de262f',
    height: 40,
    width: 350,
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10

  },
  btnText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',


  },
});

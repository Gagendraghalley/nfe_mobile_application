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
  FlatList

} from 'react-native';
import {

  Fieldset,

  Select,

} from 'react-native-clean-form'
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Picker } from '@react-native-picker/picker';
import * as Animatable from 'react-native-animatable';
import { color } from 'react-native-reanimated';
import AsyncStorage from '@react-native-community/async-storage';
import { dzongkhag_url } from './config/rest_config/';
import { gewog_url } from './config/rest_config/';
import { literacyRate_url } from './config/rest_config/';


class Literacy extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      dzongkhagName: 'null',
      gewogName: 'null',
      center: 'Wangchukling',
      school: 'Sarpang HSS',
      cid: 'null',
      designation: 'null',
      literate_male: 'null',
      literate_female: 'null',
      designation: 'designation',
      literate_male: 'null',
      literate_female: 'null',
      total_literate: 'null',
      gewog_literacy_rate: 'null',
      literacy_rate_male: 'null',
      literacy_rate_female: 'null',
      total_literacy_rate: 'null'
    }

  }

  home = () => {
    const { navigation } = this.props;
    navigation.navigate('Home');

  };

  EditLiteracy = () => {
    const { navigation } = this.props;
    navigation.navigate('EditLiteracy');

  };

  async componentDidMount() {

    let dzon_id = await AsyncStorage.getItem('dzon_id');
    let gewog_id = await AsyncStorage.getItem('gewog_id');

    this.getDetails(`${dzongkhag_url}` + dzon_id, 'dzo');//Dzongkhag
    this.getDetails(`${gewog_url}` + gewog_id, 'gewog');//gewog literacyRate_url
    this.getDetails(`${literacyRate_url}` + gewog_id, 'LiteracyRate'); //literacyRate_url

  }

  async getDetails(url, targetstate) {
    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        //Dzongkhag name
        if (targetstate == "dzo") {
          this.setState({
            dzongkhagName: responseJson.data.name,
          });
          // alert(responseJson.data.name)
        }
        //Gewog name
        if (targetstate == "gewog") {
          this.setState({
            gewogName: responseJson.data.name,
          });
        }

        //Literacy Rate
        if (targetstate == "LiteracyRate") {
          this.setState({
            literate_male: responseJson[0].literate_male.toString(),
            literate_female: responseJson[0].literate_female.toString(),
            total_literate: responseJson[0].total_literate.toString(),
            literacy_rate_male: responseJson[0].literacy_rate_male.toString(),
            literacy_rate_female: responseJson[0].literacy_rate_female.toString(),
            total_literacy_rate: responseJson[0].total_literacy_rate.toString(),
          });

        }
      })
  }

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

          <Text style={styles.headerText}>Literacy Information</Text>
        </View>
        <Animatable.View
          animation="fadeInUpBig"
          style={styles.footer}
        >
          <ScrollView>
            <Fieldset>

              <Text style={styles.action} >Dzongkhag/Thromde:</Text>
              <TextInput type style={styles.placeholder1}
                placeholder="Dzongkhag/Thromde"
                value={this.state.dzongkhagName}
                editable={false}

              />
              <Text style={styles.action} >Gewog/Demkhong:</Text>
              <TextInput type style={styles.placeholder1}
                placeholder="Gewog/Demkhong"
                value={this.state.gewogName}
                editable={false}

              />
              <Text style={styles.action} >Numbers of Literate Male:</Text>
              <TextInput type style={styles.placeholder1}
                placeholder="Literate Male"
                value={this.state.literate_male}
                editable={false}

              />
              <Text style={styles.action} >Literacy Male rate(%):</Text>
              <TextInput type style={styles.placeholder1}
                placeholder="gewog Literate"
                value={this.state.literacy_rate_male}
                editable={false}

              />

              <Text style={styles.action} >Numbers of Literate Female:</Text>
              <TextInput type style={styles.placeholder1}
                placeholder="Literate male"
                value={this.state.literate_female}
                editable={false}

              />
              <Text style={styles.action} >Literacy Female rate(%):</Text>
              <TextInput type style={styles.placeholder1}
                placeholder="gewog Literate"
                value={this.state.literacy_rate_female}
                editable={false}

              />


              <Text style={styles.action} >Total Numbers:</Text>
              <TextInput type style={styles.placeholder1}
                placeholder="Total Literate"
                value={this.state.total_literate}
                editable={false}

              />

              <Text style={styles.action} >Total Literacy rate(%):</Text>
              <TextInput type style={styles.placeholder1}
                placeholder="gewog Literate"
                value={this.state.literacy_rate_female}
                editable={false}

              />

              {/* <TouchableOpacity style={styles.btn}
                onPress={this.EditLiteracy}>
                <Text style={styles.btnText}>Edit</Text>
              </TouchableOpacity> */}
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
    // borderWidth: 0.8,
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
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 30

  },
  btnText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',


  },
});

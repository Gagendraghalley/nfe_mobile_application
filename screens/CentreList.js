import React, { Component } from 'react';
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
import AsyncStorage from '@react-native-community/async-storage';
import { centrelist } from './config/rest_config/';
import { dzongkhag_url } from './config/rest_config/';

export default class Attendance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Centre_List: [
      ],
      dzongkhagName: 'null',
      tableHead: [''],

      centreCode1: '',
    }
  }
  home = () => {
    const { navigation } = this.props;
    navigation.navigate('Home');

  };
  async componentDidMount() {

    let dzon_id = await AsyncStorage.getItem('dzon_id');
    // alert(dzon_id)
    this.getDetails(`${centrelist}` + dzon_id, 'centrelist');//center Details

    //dzongkhag
    this.getDetails(`${dzongkhag_url}` + dzon_id, 'dzo');//Dzongkhag

  }
  async getDetails(url, targetstate) {
    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        //Dzongkhag
        if (targetstate == "dzo") {
          this.setState({
            dzongkhagName: responseJson.data.name,
          });
        }
        //Centre Lists based on the dzongkhag id
        let centre_name = [];
        if (targetstate == "centrelist") {
          for (let i = 0; i < responseJson.length; i++) {
            centre_name.push([responseJson[i].centre_name]);
          }
          this.setState({
            Centre_List: centre_name,
          });
          // alert(centre_name)
        }

      })
  }
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

          <Text style={styles.headerText}>Centre Lists</Text>
        </View>
        <Animatable.View
          animation="fadeInUpBig"
          style={styles.footer}
        >
          <ScrollView>
            <Text style={styles.action} >Dzongkhag Name:</Text>
            <TextInput type style={styles.placeholder1}
              value={this.state.dzongkhagName}
              placeholder="Tashling"
              editable={false}

            />
            <Fieldset>

              <View style={styles.container}>
                <Table borderStyle={{ borderColor: 'transparent' }}>
                  <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
                  {
                    state.Centre_List.map((rowData, index) => (
                      <TableWrapper key={index} style={styles.row}>
                        {
                          rowData.map((cellData, cellIndex) => (
                            <Cell key={cellIndex} data={cellIndex === 8 ? element(cellData, index) : cellData} textStyle={styles.text} />
                          ))
                        }
                      </TableWrapper>
                    ))
                  }
                </Table>
              </View>

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
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1', color: '#111', fontSize: 20 },
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB', borderRadius: 2 },
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

});

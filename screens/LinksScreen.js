import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Platform, View, Button, Picker, Alert, Text } from "react-native";
import { DataTable } from 'react-native-paper';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Record',
  };
  constructor(){
       super();
       this.state={
         PickerSelectedVal : ''
       }
     };
  getSelectedPickerValue=()=>{
        Alert.alert("Selected opiton is : " +this.state.PickerSelectedVal);
      }

  render() {

    console.log(data)
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */
           <View style={styles.container}>
             <Picker
              selectedValue={this.state.PickerSelectedVal}
              onValueChange={(itemValue, itemIndex) => this.setState({PickerSelectedVal: itemValue})} >
              <Picker.Item label="Select" />
              <Picker.Item label="Sale Transaction" value="Sale Transaction" />
              <Picker.Item label="Expense" value="Expenses" />
            </Picker>

            <Button title="Add Record" onPress={ this.getSelectedPickerValue }  />

            <Text style={styles.sales}>Today Sales Transcations </Text>
            <DataTable  style={styles.header}>
              <DataTable.Header>
                <DataTable.Title> Code </DataTable.Title>
                <DataTable.Title numeric> Qty </DataTable.Title>
                <DataTable.Title numeric> Sell</DataTable.Title>
                <DataTable.Title numeric> Buy </DataTable.Title>
              </DataTable.Header>

              <DataTable.Row>
                <DataTable.Cell numeric>CH-11-0000</DataTable.Cell>
                <DataTable.Cell numeric>159</DataTable.Cell>
                <DataTable.Cell numeric>500</DataTable.Cell>
                <DataTable.Cell numeric>440</DataTable.Cell>
              </DataTable.Row>


              <DataTable.Pagination
                page={1}
                numberOfPages={3}
                onPageChange={(page) => { console.log(page); }}
                label="1-2 of 6"
              />
            </DataTable>
          </View>
        }


      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 10,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  sales:{
    paddingTop: 10,
    fontSize: 15,
    fontWeight:'bold'
  }
});

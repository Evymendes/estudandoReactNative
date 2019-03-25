import React, {Component} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

export default class App extends Component {

  render() {

    return (
      <View style={styles.container}>
      <View style={styles.header}></View>
        <ScrollView>
          <View style={styles.quadrado}></View>
          <View style={styles.quadrado1}></View>
          <View style={styles.quadrado}></View>
          <View style={styles.quadrado1}></View>
          <View style={styles.quadrado}></View>
          <View style={styles.quadrado1}></View>
        </ScrollView>
        <View style={styles.header}></View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    paddingTop:20,
    flex:1
  },
  header:{
    backgroundColor:'#FFF',
    height:100
  },
  quadrado:{
    backgroundColor:'#FF0000',
    height:200
  },
  quadrado1:{    
    backgroundColor:'blue',
    height:200
  }
});
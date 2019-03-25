import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default class tamanhaFixoEDinamico extends Component {
  render(){
    return (
        <View style={{flex:1, paddingTop:30, justifyContent:'center', alignItems:'center'}}>          
          <View style={{flex:1, backgroundColor:'red'}}></View>
          <View style={{flex:1, backgroundColor:'blue'}}></View>
          <View style={{flex:2, backgroundColor:'green'}}></View>
        </View>        
    );
  }
}

const styles = StyleSheet.create({
  texto:{
    fontSize:30
  },
  treinandoStyles1:{
    fontSize:25,
    color: 'blue',
    textAlign: 'center'
  },
  treinandoStyles2:{
    fontSize: 20,
    color: 'red'
  }
});
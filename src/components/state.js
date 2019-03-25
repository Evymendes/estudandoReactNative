import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView, TextInput } from 'react-native';


export default class PrimeiroProjeto extends Component{

  constructor(props) {
    super(props);
    this.state = {texto:''};

    this.mudarTexto = this.mudarTexto.bind(this);
  }

  mudarTexto(t){
    let s = this.state;
    if(t.length > 0){
      s.texto = 'Olá, '+t; 
    } else {
      s.texto = '';
    }
   this.setState(s);
  }

  render() {

    return (
      <ScrollView>
        <View style={{paddingTop:30, justifyContent:'center', alignItems:'center'}}>
         
          <TextInput style={styles.input} placeholder="Qual é o seu nome?" onChangeText={this.mudarTexto}/>
          <Text style={styles.texto}>{this.state.texto} </Text>
          </View>
        </ScrollView>
      );
  }
}

const styles = StyleSheet.create({
  texto:{
    fontSize:30
  },
  input:{
    width:130,
    height:40,
    borderWidth:1,
    borderColor: 'black',
    padding:10,
    margin:10
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
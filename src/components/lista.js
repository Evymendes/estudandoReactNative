import React, { Component } from 'react';
import { View, TextInput, AsyncStorage, StyleSheet, FlatList} from 'react-native';

import ListItem from '.src/ListItem'

export default class PrimeiroProjeto extends Component{

  constructor(props) {
    super(props);
    this.state = {
     list:[
     {key:'1', img:'https://www.b7web.com.br/avatar1.png', nome:'Evelyn', msg:'oi'},
     {key:'2', img:'https://www.b7web.com.br/avatar2.png', nome:'Evely', msg:'Boa Tarde'},
     {key:'3', img:'https://www.b7web.com.br/avatar3.png', nome:'Evel', msg:'Boa Noite'},
     {key:'4', img:'https://www.b7web.com.br/avatar3.png', nome:'Eve', msg:'Bom Dia!!!'},
     {key:'5', img:'https://www.b7web.com.br/avatar2.png', nome:'Ev', msg:'Hello'},
     {key:'6', img:'https://www.b7web.com.br/avatar1.png', nome:'Evy', msg:'Vamos sair?'},
     ]
    };    
  }

  render() {

    return (
      <View style={styles.body}>
        <FlatList
         data={this.state.list}
         renderItem={({item})=> <listItem data={item} />} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
 body:{
  paddingTop:20,
  flex: 1,
  justifyContent:'center',
  alignItems:'center'
 },
 input:{
  width: 200,
  height: 40
 }
});
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView, TextInput, Alert } from 'react-native';

export default class PrimeiroProjeto extends Component {

 constructor(props) {
    super(props);
    this.state = {inputText:'', texto:''};

    this.apertouBotao = this.apertouBotao.bind(this);
  }
  
  apertouBotao() {
    let s = this.state;
    s.texto = "Olá ,"+ s.inputTexto;
    this.setState(s);
  }

  render() {
    return (
      <View style={{paddingTop:30, margin:30}}>
      <TextInput placeholder="Whats is name?" onChangeText={(inputTexto) => this.setState({inputTexto})}/>
        <Button title="Aperte em mim!" onPress={this.apertouBotao} />
        <Text>{this.state.texto}</Text>
      </View>
      );
  }
}

const styles = StyleSheet.create({
 
});

// import React, { Component } from 'react';
// import { View, Text, StyleSheet, Button, Image, ScrollView, TextInput, Alert } from 'react-native';

// export default class PrimeiroProjeto extends Component {

//  constructor(props) {
//     super(props);
//     this.state = {inputText:'', texto:''};

//     this.apertouBotao = this.apertouBotao.bind(this);
//   }
  
//   apertouBotao() {
//     let s = this.state;
//     if(s.inputTexto == "Evelyn"){
//       s.texto = "Você Acertou!";
//     } else {
//       s.texto = "Você errou!"
//     }
    
//     this.setState(s);
//   }

//   render() {
//     return (
//       <View style={{paddingTop:30, margin:30}}>
//       <TextInput placeholder="Adinhinhe meu nome" onChangeText={(inputTexto) => this.setState({inputTexto})}/>
//         <Button title="Aperte em mim!" onPress={this.apertouBotao} />
//         <Text>{this.state.texto}</Text>
//       </View>
//       );
//   }
// }

// const styles = StyleSheet.create({
 
// });


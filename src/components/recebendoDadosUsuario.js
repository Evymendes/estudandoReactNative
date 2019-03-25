/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity} from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: 'Evelyn',
      textoRecebido: '',
      texto2: '',
      inputText: '',
      texto3: '',
      inputText3: '',
      textName: ''
    }

    this.mudarTexto = this.mudarTexto.bind(this);
    this.mudarTexto2 = this.mudarTexto2.bind(this);
    this.mudarTexto3 = this.mudarTexto3.bind(this);
  }
  

  mudarTexto(texto){
    if(texto.length > 0){
      this.state.textoRecebido = "olá, " + texto;
    } else {
      this.state.textoRecebido = ''
    }
    this.setState(this.state);
  }

  mudarTexto2(){
   this.state.texto2 = 'Olá, ' + this.state.inputText;
   this.setState(this.state);
  }


  mudarTexto3(){
    if(this.state.inputText3 == 'Evelyn'){
      this.state.texto3 = 'voce acertou';
    } else {
      this.state.texto3 = 'voce errou';
    }
   this.setState(this.state);
  }

  handleChangeTextName = (typeTextName) => {
    this.setState({textName: typeTextName});
  }

  handleChangeTextTest = (typeTextTest) => {
    this.setState({textTest: typeTextTest});
  }
  testMudarTexto = () => {
   this.setState({textTexto: this.state.textTest});
  }

  render() {


    return (
      <View style={styles.container}>

        <TextInput style={styles.Input} placeholder='Qual é o seu nome?' onChangeText={this.mudarTexto}/>
        <Text>{this.state.textoRecebido}</Text>


        <TextInput style={styles.Input} placeholder="Qual é seu nome?" onChangeText={(inputText) => this.setState({inputText}) }/>
        <Button title='oiii' onPress={this.mudarTexto2} />
        <Text > {this.state.texto2} </Text>



        <TextInput style={styles.Input} placeholder="Qual é seu nome?" onChangeText={(inputText3) => this.setState({inputText3}) }/>
        <Button title='oiii' onPress={this.mudarTexto3} />
        <Text > {this.state.texto3} </Text>

        <TextInput placeholder='Name'
          onChangeText = {this.handleChangeTextName}
          value={this.state.textName}
        />
        <Text>{this.state.textName}</Text>
      
        <Text>{this.state.name}</Text>




        <TextInput placeholder='Name'
            onChangeText = {this.handleChangeTextTest}
            value={this.state.textTest}
          />
          <TouchableOpacity title='oiii' onPress={this.testMudarTexto} style={{backgroundColor: 'pink'}}>
             <Text> ClickText </Text>
          </TouchableOpacity>
          <Text>{this.state.textTexto}</Text>


      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  Input:{
    width:150,
    borderWidth: 1,
    borderColor: '#000000',
    margin:10,
    padding:10
  }
});
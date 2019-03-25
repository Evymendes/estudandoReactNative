import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Button } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super();
    this.state = {
      msg: 'Evy!!',
      msg2: 'Ehhh'
    };
    this.clicou = this.clicou.bind(this);
  }

  clicou() {
    this.setState({
      msg2: 'Evy 1sti'
    });
  }

  render() {
    return (
      <View style={styles.body}>
        <Text>Olá Mundo!!!</Text>
        <Text>{this.state.msg}</Text>
        <Text>{this.state.msg2}</Text>
        <Button title="oii" onPress={this.clicou} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex:1,
    marginTop:30,
    backgroundColor: '#3913B3',
  },
  containerTexto:{
    color: '#FFFFFF',
    fontWeight:'bold',
    textAlign:'left',
    fontSize:20,
    marginTop:25,
    marginLeft:30
    // alignSelf: 'stretch'
  },
  botaoArea:{
    flexDirection:'row',
  },
  botao:{
    width:'45%',
    height: 50,
    margin:6,
    justifyContent: 'center',
    alignItems: 'center',   
    backgroundColor:'rgba(255,255,255,0.5)',
    borderRadius:4,
  },
  botaoTexto:{
    fontWeight:'bold',
    textAlign:'center',
    fontSize:16,
    color:'#FFFFFF',
  }
});

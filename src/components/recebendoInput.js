/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image, TextInput} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props);
    this.state = {
      name: 'Evelyn',
      textoRecebido: ''
  texto2: '',
      inputText: ''
    texto2: '',
      inputText2: ''
    }

    this.mudarTexto = this.mudarTexto.bind(this);
    this.mudarTexto2 = this.mudarTexto2.bind(this);
    this.mudarTexto3 = this.mudarTexto3.bind(this);
  }
  }

  somar(n1, n2){
    return n1 + n2;
  };


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
    if(this.state.inputText2 == 'Evelyn'){
      this.state.texto2 = 'voce acertou';
    } else {
      this.state.texto2 = 'voce errou';
    }
   this.setState(this.state);
  }

  render() {
    var nome = 'Evelyn';

    let imagem = {
      uri:'https://www.inovex.de/blog/wp-content/uploads/2018/03/react-native.png'
    };


    return (
      <View style={styles.container}>
        <Text>Meu nome é: {nome} </Text>
        <Text>A soma de 2 + 2 é {this.somar(2, 2)} </Text>

        <TextInput style={styles.Input} placeholder='Qual é o seu nome?' onChangeText={this.mudarTexto}/>
        <Button title="Responder" onPress={this.responder} />
        <Text>{this.state.textoRecebido}</Text>


        <TextInput style={styles.Input} placeholder="Qual é seu nome?" onChangeText={(inputText) => this.setState({inputText}) }/>
        <Button title='oiii' onPress={this.mudarTexto2} />
        <Text > {this.state.texto2} </Text>



        <TextInput style={styles.Input} placeholder="Qual é seu nome?" onChangeText={(inputText2) => this.setState({inputText2}) }/>
        <Button title='oiii' onPress={this.mudarTexto3} />
        <Text > {this.state.texto2} </Text>


        <Button title="Aperte" onPress={()=>{}} />
        <Button title="Aperte" onPress={()=>{alert("Me Apertou")}} />
        <Image source={require('./estudio.png')} />
        <Image source={imagem} style={{width:100, height:100}}/>
        <Text>{this.state.name}</Text>
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



/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow

 <View style={styles.container}>
        <Text style={styles.welcome}>Hello Word</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Text>Meu nome é: {nome} </Text>
        <Text>A soma de 2 + 2 é {this.somar(2, 2)} </Text>
        <TextInput  style={styles.Input} placeholder="Qual é o seu nome?"/>
        <Button title="Aperte" onPress={()=>{}} />
        <Button title="Aperte" onPress={()=>{alert("Me Apertou")}} />
        <Image source={require('./estudio.png')} />
        <Image source={{uri:'https://www.inovex.de/blog/wp-content/uploads/2018/03/react-native.png'}} style={{width:300, height:300}}/>
      </View>
 */


// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Hello Word</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//         <Text>asd,nas,jd,hkjh </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },





// });

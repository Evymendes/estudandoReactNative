import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView, TextInput, Alert } from 'react-native';


class Image2 extends Component {

  render() {

  let img = {
    uri:'http://www.personal.psu.edu/'+this.props.nome+'/jpg.jpg'
  };

  return (
    <Image source={img} style={{width:parseInt(this.props.largura), height:parseInt(this.props.altura)}}/>
  );
 
  }
}

class Janta extends Component {

  constructor(props) {
    super(props);
    this.state = {comida:props.comida};
    var comidas = ['Pizza', 'Lazanha', 'Macarronada', 'Sopa', 'Churrasco'];

    setInterval(() => {

      this.setState(previousState => {
        var n = Math.floor(Math.random() * comidas.length);

        return {comida: comidas[n] };
      });

    }, 1000);
  }

  render() {

    return(
      <View>
        <Text style={{textAlign:'center', fontWeight:'bold', fontSize:20}}>propriedade multavel STATE</Text>
        <Text style={{textAlign:'center', fontWeight:'bold', fontSize:20, color:'red'}}>Hoje eu vou jantar:</Text>
        <Text style={{textAlign:'center', fontSize:15}}>{this.state.comida}</Text>
      </View>
    );
  }
}


export default class PrimeiroProjeto extends Component{

  somar(n1, n2) {
    return n1 + n2;
  }

  constructor(props) {
    super(props);
    this.state = {texto:'', inputText:'', texto2:''};

    this.mudarTexto = this.mudarTexto.bind(this);
    this.apertouBotao2 = this.apertouBotao2.bind(this);
  }
  //Recebendo dados do usuário
  // mudarTexto0(t){
  //   let s = this.state;
  //   s.texto = 'Olá, '+t; 
  //   this.setState(s);
  // } 

  mudarTexto(t){
    let s = this.state;
    if(t.length > 0){
      s.texto = 'Olá, '+t; 
    } else {
      s.texto = '';
    }
   this.setState(s);
  }

  apertouBotao() {
    Alert.alert("Aeeeehh apertou!!");
  }
  
  apertouBotao2() {
    let s = this.state;
    s.texto2 = "Olá ,"+ s.inputTexto2;
    this.setState(s);
  }

  render() {
    let imagem = {
    uri:'http://www.personal.psu.edu/oeo5025/jpg.jpg'
    };

    let nome = "Evelyn";

    return (
        <View style={{paddingTop:30, justifyContent:'center', alignItems:'center'}}>
          <View  style={styles.header}>
      
          </View>
          <ScrollView>
          <Text>Olá Mundoooo</Text>
          <Text>Meu nome é {nome}</Text>

          <Text style={styles.texto}>A soma de 2 + 2 é {this.somar(2, 2)}</Text>
          
          <Button title="Aperte" onPress={()=>{
            alert("Me Apertou");
          }}/>
          //função anonima

          <Text style={{fontSize:25, color:"red", margin:20}}>Props</Text>
          <Button title="Aperte de Novo" onPress={()=>alert("Me Apertou de novo, em?")}/>
          
          <Image source={imagem} style={{width:200, height:200}} />
          <Image2 nome='oeo5025' largura='100' altura='100' />

          <Janta comida="salada"/>

          <Text style={styles.treinandoStyles1}>Treinando 1</Text>
          <Text style={styles.treinandoStyles2}>Treinando 2</Text>
          <Text style={[styles.treinandoStyles1, styles.treinandoStyles2]}>Treinando 2 style junto</Text>
          <Text style={[styles.treinandoStyles2, styles.treinandoStyles1]}>Treinando 2 style junto ao contrario</Text>
          
          <View style={{flex:1, width:24, height:24, backgroundColor:'blue'}}></View>
          <View style={{flex:2, width:24, height:24, backgroundColor:'red'}}></View>
          <View style={{width:24, height:24, backgroundColor:'green'}}></View>

          <TextInput style={styles.input} placeholder="Qual é o seu nome?" onChangeText={this.mudarTexto}/>
          <Text style={styles.texto}>{this.state.texto} </Text>
          <Button title="Aperte em mim" onPress={this.apertouBotao} />



          <TextInput style={styles.input}  placeholder="Whats is name?" onChangeText={(inputTexto2) => this.setState({inputTexto2})}/>
          <Button title="Aperte em mim 2!" onPress={this.apertouBotao2} />
          <Text>{this.state.texto2}</Text>
      
          <View>
            <View>
              <Text style={styles.inputArea}>Criador de Mimimi</Text>
            </View>
            <View>
              <TextInput style={styles.input} placeholder="Digite seu mimimi" />
            </View>
            <View styles={styles.area}>
              <Text style={[styles.texto0, styles.texto1]}>Texto 1</Text>
              <Image style={styles.guri} source={require('./image/mimimi.jpg')} />
              <Text style={[styles.texto0, styles.texto2]}>Texto 2gjhgjhgjhgjh</Text>
            </View>
          </View>
          <View>
          <Text> oioioioioioi
          </Text>
          </View>
        </ScrollView>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: '#FF6EC7',
    height:100,
  },
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
  },
  area:{
    width:300,
    height:300,
    marginTop:10
  },
  guri:{
    width:150,
    height:150,
  },
  texto0:{
    fontSize:25,
    color:'black',
    padding:10,
    backgroundColor:'transparent',
    fontWeight:'bold',
    textAlign:'center',
    height:70
  }
});
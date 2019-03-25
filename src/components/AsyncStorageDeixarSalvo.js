import React, { Component } from 'react';
import { View, TextInput, AsyncStorage, StyleSheet} from 'react-native';



export default class PrimeiroProjeto extends Component{

  constructor(props) {
    super(props);
    this.state = {
      nome:''
    };

    AsyncStorage.getItem("nome").then((value)=>{
      this.setState({nome:value});
    });
    //Pegar Informação

    this.setNome = this.setNome.bind(this);
  }

    setNome(nome){
      let s = this.state;
      s.nome = nome;
      this.setState(s);

      AsyncStorage.setItem("nome", nome);
      //Salvar Informação
    }

  render() {

    return (
      <View style={styles.body}>
        <TextInput style={styles.input} value={this.state.nome} onChangeText={(text)=>this.setNome(text)} />
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


Meu nome é Evelyn, tenho 24 anos, sou bolsista da FGV. Com o Vai na Web não tem simulação. A gente aprende em ambientes reais e projetos reais. É mão na massa o tempo todo!

Recentemente eu estive no time de desenvolvimento do aplicativo Match4Action. Ele foi projetado por alunos de  Universidade de Stanford, na Califórnia, e desenvolvido aqui, no Morro dos Prazeres no Brasil. Com isso, eu ganhei uma viagem pra os Estados Unidos para conhecer Stanford, o time do M4a e apresentar o Vai na Web para o mundo."
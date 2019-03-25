import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text, 
  Button
} from 'react-native';

class Cronometro extends Component {

  constructor(props){
    super(props);
    this.state = {
      numero: 0,
      titulo: 'Vai'
    }
    this.timer = null;

    this.rodar = this.rodar.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  rodar() {
    let s = this.state;
    if(this.timer != null) {
      //parar o tempo
      clearInterval(this.timer);
      this.timer  = null;
    } else {
      this.timer = setInterval(()=> {
        let s = this.state;
        s.numero += 0.1;
        this.setState(s);
      }, 100);
      s.titulo = "Parar";
    }
    this.setState(s);
  }

  limpar() {
    if(this.timer != null) {
      //parar o timer
      clearInterval(this.timer);
      this.timer = null;
    }

    let s = this.state;
    s.numero = 0;
    s.titulo = "Vai";
    this.setState(s);
  }

  render() {
    return (
      <View>
        <Text>{this.state.numero.toFixed(1)}</Text>
        <Button title={this.state.titulo} onPress={this.rodar}/>
        <Button title={'limpar'}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.orange,
  }
});

export default Cronometro;
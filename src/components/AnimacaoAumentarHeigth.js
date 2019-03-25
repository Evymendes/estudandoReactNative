import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, ScrollView, TouchableOpacity, Animated, Button} from 'react-native';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      heightRet: new Animated.Value(145)
    };
      this.botaoo = this.botaoo.bind(this);
    
  }

  botaoo() {
    Animated.timing(
      this.state.heightRet,
      {
        toValue:232,
        duration:500
      }
  ).start();
  }
    // aparecerCanvas() {
    //   Animated.timing(
    //   this.state.heightRet,
    //   {
    //     toValue:232,
    //     duration:500
    //   }
    // ).start();
    // }

  render() {
    return (
     // <View style={{flex:1, justifyContent:'center', alignItems:'center',backgroundColor:"black"}}>
     //    <Animated.View style={{height:this.state.heightRet, width:300, }}>
     //    <Text style={{Color:"#ffffff"}}>hehehe</Text>
        
     <View style={styles.canvas}>
       <Animated.View style={{height:this.state.heightRet, width:300, }}>
        <View style={styles.canvasNome}>
          <Text style={styles.key}>Cost Structure</Text>
          <TouchableOpacity onPress={this.botaoo} >
           <Image style={styles.imagem} source={require('./source/cruz.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.canvasQuadradinho}>
            <Text style={styles.canvasTexto}>x20 y80</Text>
            <TextInput style={styles.canvasInput} underlineColorAndroid='transparent' placeholder='Insert here...' />
            <View style={styles.canvasQuadradinhoPequeno}>
              <View style={styles.canvasTijolo}></View>
              <View style={[styles.canvasTijolo, styles.canvasLaranja]}></View>
              <View style={[styles.canvasTijolo, styles.canvasAmarelo]}></View>
              <View style={[styles.canvasTijolo, styles.canvasVerde]}></View>
              <View style={[styles.canvasTijolo, styles.canvasVerdeAgua]}></View>
              <View style={[styles.canvasTijolo, styles.canvasAzulAgua]}></View>
              <View style={[styles.canvasTijolo, styles.canvasAzul]}></View>
              <View style={[styles.canvasTijolo, styles.canvasLilas]}></View>
            </View>
        </View>
      </Animated.View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    marginTop:24,
    backgroundColor: '#3913B3',
  },
  inicio:{
    width: 340,
    height: 101,
    marginLeft:10,
    borderRadius:4,
    backgroundColor:'#FF2D9F',  
    justifyContent: 'center',
    alignItems: 'center', 
    
  },
  link:{  
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 15
  },
  titulo:{
    fontSize: 16,    
    color: '#FFFFFF',
    fontWeight:'bold',
  },
  canvas:{
    flex:1,
    zIndex:0,
    width: 340,
    height: 232,
    margin:10,
    borderRadius:4,
    backgroundColor:'green',
    // backgroundColor:'#FFFFFF',
    flexWrap: 'wrap'
  },
  canvasNome:{
    zIndex:0,
    height: 50,
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  canvasColoridas:{
    flex:1,
    width: 332,
    height: 90,
    fontSize: 15,
    fontWeight:'bold',
    margin:4,
    borderRadius:4,
    backgroundColor:'#FFED77',
    color:'black',
    textAlign:'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  canvasMarginBottom:{
    marginBottom:49
  },
  key:{
    zIndex:1,
    fontSize: 16,
    fontWeight:'bold',
    color:'#FF2D9F',
    margin:16,
  },
  imagem:{
    width: 20,
    height: 20,
    margin: 13
  },
  canvasQuadradinho:{
    flex:1,
    backgroundColor:'#FFED77',
    flexDirection:'column',
  },
  canvasQuadradinhoPequeno:{
     flex:1,
    alignItems: 'flex-end',
    flexDirection:'row',
  },
  canvasTijolo:{
    backgroundColor:'#FF8377',
    width: 37,
    height: 38,
  },
  canvasLaranja:{
    backgroundColor:'#FFBF77',
  },
  canvasAmarelo:{
    backgroundColor:'#FFED77',
  },
  canvasVerde:{
    backgroundColor:'#C8FF3F',
  },
  canvasVerdeAgua:{
    backgroundColor:'#77FFBB',
  },
  canvasAzulAgua:{
    backgroundColor:'#84F8FF',
  },
  canvasAzul:{
    backgroundColor:'#8ED7FF',
  },
  canvasLilas:{
    backgroundColor:'#DCAFFF',
  },
  canvasInput:{ 
    width:  318,
    height: 100,
    marginLeft:11,
    fontSize: 15,
    textAlign:'center',
  },
  canvasTexto:{
    margin: 11,
    fontSize: 14,
    textAlign:'right',
    color:'#572C43'
  }
});

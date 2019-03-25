import React, { Component } from 'react';
import { 
  StyleSheet, 
  View, 
  Image,
  Animated,
  Easing,
  Text
} from 'react-native';

import LogoImage from '../assets/logo.png';
import LogoName from '../assets/logoM4A.png'

class AnimatedLoading extends Component {

  constructor(props){
    super(props);
    this.state = {
      animatedBottom: new Animated.Value(0),
    }

    Animated.loop(
      Animated.sequence([
        Animated.timing(
          this.state.animatedBottom,
          {
            toValue: 50,
            duration: 1000
          }
        ),
        Animated.timing(
          this.state.animatedBottom,
          {
            toValue: 0,
            duration: 1000
          }
        )
      ])
    ).start();
  }

  render(){
    return(
      <View style={styles.container}>
        <Animated.Image 
          source={LogoImage}
          style={{bottom: this.state.xValue, justifyContent: 'center'}}
          >
        </Animated.Image>
        <Image source={LogoName}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default AnimatedLoading;
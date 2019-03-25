import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text, Button
 } from 'react-native';
 import { RNCamera } from 'react-native-camera';

import ImagePicker from 'react-native-image-picker';

class InsertImage extends Component {

  constructor(props){
    super(props);
    this.state = {
      avatarSource: null
    }
    this.tirarFoto = this.tirarFoto.bind(this);
  }


tirarFoto() {
  if(this.camera) {
    this.camera.takePictureAsync({ 
      quality: 0.8,
      width: 500,
    }).then((data)=>{
      alert('tirou a foto');
    });
  }
}

  render() {
    return (
      <View>
        <Title text='Images' fontSize='small' />
        <RNCamera
          style={{height: 300}}
          ref={(camera)=> {
            this.camera = camera;
          }}
          type={RNCamera.Constants.Type.back}
          permissionDialogTitle="Permissão para usar a camera"
          permissionDialogMessage='Nós precisamos usar a sua câmera'
        />
        <View style={{height: 300}}>
          <Button title='Tirar Foto' onPress={this.tirarFoto} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fieldAddImage: {
    flexDirection: 'row',
    marginHorizontal: 40,
    marginTop: 10,
    marginBottom: 40,
    justifyContent: 'space-between'
  },
  newImage: {
    width: '14%',
    height: '50%',
    borderColor: '#0081C3',
    borderWidth: 1,
  }
});

export default InsertImage;
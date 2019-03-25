import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, TextInput, TouchableOpacity, Image, Text, Button, AsyncStorage} from 'react-native';

//components
import HeaderNavigator from '../components/headerNavigator';
import Texts from '../components/texts';
import Title from '../components/title';

import ExtraInfo from '../components/extraInfo';
import FooterSwipe from '../components/footerSwipe';
import { connect } from 'react-redux';

import axios from 'axios';

//image
import DevcentWork from '../assets/sdgOito.png';
import Affordable from '../assets/sdgSete.png';
import Poverty from '../assets/sdgUm.png';
import ImageCalendar from '../assets/calendar.png';
import ImageClock from '../assets/clock.png';

const mapStateToProps = (state) => ({
  user: state.register.user
});

class CreateInitiativeScreen extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      description: '',
      address: '',
      city: '',
      country: '',
      postalCode: '',
      agreement: false,
      error: ''
    }
    this.handleAgreement = this.handleAgreement.bind(this);
    this.initiativeRegister = this.initiativeRegister.bind(this);
  }

  async createNewInitiative(newInitiative) {
    try {
      const token = await AsyncStorage.getItem('token')
      return await axios({
        url: `http://192.168.1.139:3000/initiatives`,
        method: 'post',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        data: newInitiative
      })
    }
    catch(err){
      throw err
    }
    /*console.log('tentou pegar o token ')
    return AsyncStorage.getItem('token').then((token) => {
      console.log(token)
      console.log('tentou axios ')
      return axios({
        url: `http://192.168.1.139:3000/initiatives`,
        method: 'post',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        data: newInitiative
      })
      .then((result)=>result)
      .catch((error)=> error)
    })*/
  }

  async initiativeRegister() {
    const {name, description, address, city, country} = this.state;

    const newInitiative = {
      name,
      bio: description,
      address,
      city,
      country,
    }

    try {
      console.log('tentou salvar ')
      await this.createNewInitiative(newInitiative)
      //this.props.navigation.navigate('ProfileScreen');
    }
    catch(err) {
      console.error(err)
    }
  }

  handleAgreement() {
    this.setState({
      agreement: !this.state.agreement,
    });
  }

  renderCheckBox(eventType) {
    return (
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity  style={styles.checkBox} >
          <View  style={styles.agreementCheck} />
        </TouchableOpacity>
        <Text style={styles.textCheckBox}>{eventType}</Text>
      </View>
    );
  }

  renderImageSdg(sdgType) {
    return (
      <TouchableOpacity>
        <Image source={sdgType} style={styles.imageSDG} />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
      <HeaderNavigator noConfirmation navigation={this.props.navigation}/>
      <ScrollView>
      <View style={{ marginTop:30, marginBottom:100}}>
        <Title text='Initiative name' fontSize='small' />
        <TextInput 
          style={styles.input} 
          placeholder='Insere here' 
          placeholderTextColor='#6ECEFF'
          onChangeText={(name) => this.setState({name: name})}
        />
        <Text>{this.state.name}</Text>
        <Button title='oii' onPress={this.initiativeRegister}/> 
        <Title text='Description' fontSize='small' />
        <TextInput 
          style={styles.input} 
          placeholder='100 characters maximum, ok?' 
          placeholderTextColor='#6ECEFF'
          onChangeText={(descriptionType) => this.setState({description: descriptionType})}
        />
        <Text>{this.state.description}</Text>
        <View style={styles.fieldCheckBox}>
          <Title text='Event type' fontSize='small' />
          <View style={{flexDirection: 'column', marginLeft: '10%'}}>
          {this.renderCheckBox('Ongoing')}
          {this.renderCheckBox('One time')}
          </View>
        </View>
        <Title text='Date' fontSize='small' />
        <Texts text='Start' fontSize='small' marginLeft='curt' />
        <View style={{flexDirection: 'row'}}>
          <View style={styles.fieldDate}>
            <TextInput style={[styles.input, styles.inputStart]} placeholder='12/03/18' placeholderTextColor='#6ECEFF'/>
            <Image source={ImageCalendar} style={styles.imagem}/>
          </View>
          <View style={styles.fieldDate}>
            <TextInput style={[styles.input, styles.inputStart, {marginLeft: 10}]} placeholder='26/03/18' placeholderTextColor='#6ECEFF'/>
            <Image source={ImageCalendar} style={styles.imagem}/>
          </View>
        </View>        
        <Title text='Time' fontSize='small' />
        <Texts text='Start' fontSize='small' marginLeft='curt' />
        <View style={{flexDirection: 'row'}}>
          <View style={styles.fieldDate}>
            <TextInput style={[styles.input, styles.inputStart]} placeholder='08:30pm' placeholderTextColor='#6ECEFF'/>
            <Image source={ImageClock} style={styles.imagem}/>
          </View>
          <View style={styles.fieldDate}>
            <TextInput style={[styles.input, styles.inputStart, {marginLeft: 10}]} placeholder='08:30pm' placeholderTextColor='#6ECEFF'/>
            <Image source={ImageClock} style={styles.imagem}/>
          </View>
        </View>
        <Title text='Location' fontSize='small' />
        <Texts text='Address' fontSize='small' marginLeft='curt' />
        <TextInput 
          style={styles.input} 
          placeholder='Type the address…' 
          placeholderTextColor='#6ECEFF'
          onChangeText={(addressType) => this.setState({address: addressType})}
        />
        <Texts text='City' fontSize='small' marginLeft='curt' />
        <TextInput 
          style={styles.input} 
          placeholder='Type the city…' 
          placeholderTextColor='#6ECEFF'
          onChangeText={(cityType) => this.setState({city: cityType})}
        />
        <View style={styles.addressInfo}>
          <View style={styles.fieldLocation}>
          <Texts text='Country' fontSize='small' marginLeft='curt' />
          <TextInput style={[styles.input, styles.inputLocation]} placeholder='Type the country…' placeholderTextColor='#6ECEFF'
             onChangeText={(countryType) => this.setState({country: countryType})}
          />
          </View>
          <View style={styles.fieldLocation}>
            <Texts text='Postal Code' fontSize='small' marginLeft='little' />
            <TextInput style={[styles.input, styles.inputLocation, {marginLeft: 10}]} placeholder='Type the postal code…' placeholderTextColor='#6ECEFF'
              onChangeText={(postalCodeType) => this.setState({postalCode: postalCodeType})}
            />
          </View>
        </View>
        <Text style={[styles.textSDG, {fontWeight: 'bold'}]}> Which Global Goals are attended by this action? </Text>
        <Text style={styles.textSDG}> Swipe and click as many are relevant. </Text>
        <View style={styles.imageCarousel}>
          {this.renderImageSdg(DevcentWork)}
          {this.renderImageSdg(Affordable)}
          {this.renderImageSdg(Poverty)}      
        </View>
        </View>
        <FooterSwipe type='Publish!'/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  input: {
    marginTop: 6,
    marginLeft: 35,
    marginBottom: 20,
    paddingLeft: 10,
    width: '81%', 
    height: '5%',
    backgroundColor: '#E8F7FF' ,
    borderRadius: 2
  },
  fieldDate: {
    flexDirection: 'row', 
    height:'100%',
    width: '50%'
  },
  inputStart: {
    width: '61%',
    height: '50%'
  },
  addressInfo: {
    flexDirection: 'row', 
    width: '100%', 
    height: '10%'
  },
  fieldLocation: {
    flex: 1,
    flexDirection: 'column',
  },
  inputLocation: {
    width: '75%',
    height: '50%'
  },
  imageCarousel: {
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'space-between'
  },
  date: {
    height: '11%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  fieldCheckBox: {
    marginBottom: 15,
    width: '100%',
    flexDirection: 'row'
  },
  checkBox: {
    marginRight: 10,
    marginBottom: 15, 
    width: 15,
    height: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#8BC5E4',
    backgroundColor: 'transparent',    
    justifyContent: 'center',
    alignItems: 'center'
  },
  agreementCheck: {
    width: 7,
    height: 7,
    borderRadius: 10,
    backgroundColor: '#0081C3',
  },
  textCheckBox: {
    fontSize: 15,
    color: '#141414'
  },
  imagem: {
    marginTop: 6,
    paddingLeft: 5,
    height: '50%',
    resizeMode: 'contain',
    backgroundColor: '#E8F7FF',
  },
  textSDG: {    
    marginLeft: 40,
    width: '70%',
    fontSize:15,
    lineHeight: 25,
    color: '#141414',
  }
});

export default connect(mapStateToProps, null)(CreateInitiativeScreen);

/*initiativeRegister = () => {
  const {name, description, address, city, country, postalCode} = this.state;

  alert(name + description + address + city + country + postalCode);
}*/
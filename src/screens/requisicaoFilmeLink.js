import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList, Image } from 'react-native';

export default class Lista extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			filmes : [],
			loading: true
		};
		fetch('http://filmespy.herokuapp.com/api/v1/filmes')
			.then((res) => res.json())
			.then((json) => {
				let state = this.state;
				state.loading = false;
				state.filmes = json.filmes;
				this.setState(state);
			});
	}

	render() {
		if(this.state.loading) {
			return (
				<View style={[styles.container, styles.loading]}>
					<Text> Carregando... </Text>
				</View>
			);
		} else {
			return (
				<View style={styles.container}>
					<FlatList 
						data={this.state.filmes}
						renderItem={({item}) => <ConfigTela data={item} />}
						keyExtractor={(item, index)=> item.titulo} 
					/>
				</View>
			);
		}
	}
}

class ConfigTela extends Component {
	render() {
		return (
			<View style={styles.field}>
				<Image source={{uri:this.props.data.poster.replace('http:', 'https:')}} style={styles.image}/>
				<View style={styles.detail}>
					<Text style={styles.text}>{this.props.data.titulo}</Text>
					<Text style={styles.text}>{this.props.data.genero}</Text>
					<Text style={styles.text}>{this.props.data.data}</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create ({
	container: {
		flex: 1,
		marginTop: 25
	},
	loading: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	field: {
		flex: 1,
		margin: 10,
		flexDirection: 'row'
	},
	detail:{
		flexDirection: 'column'
	},
	image:{
		margin: 10,
		width: '20%',
		height: '100%',
		resizeMode: 'contain'
	}
})







//https://codepen.io/ksykes/pen/QmORWL
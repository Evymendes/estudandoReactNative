import React, { Component } from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpcity, TextInput, Button } from 'react-native';

export default class CrudToDoPost extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			todo: [],
			input:''
		};

		this.url = 'https://b7web.com.br/todo/40605';
		
		this.loadLista = this.loadLista.bind(this);
		this.addButton = this.addButton.bind(this);

		this.loadLista();
	};

	loadLista() {
		fetch(this.url)
			.then((res) => res.json())
			.then((json) =>{
				let state = this.state;
				state.todo = json.todo;
				this.setState(state)
			});
	}
	addButton() {
		let texto = this.state.input;

		let state = this.state;
		state.input = '';
		this.setState(state);

		fetch(this.url, {
			method: 'POST',
			headers: {
				'Accept': 'aplication/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				item: texto
			})
		})
			.then((res) => res.json())
			.then((json) => {
				this.loadLista();
			})
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.areaInserir}>
					<Text>Adicione uma Nova Tarefa</Text>
					<View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
						<TextInput style={styles.input}
							onChangeText = {(text) => {
								let state = this.state;
								state.input = text;
								this.setState(state);
							}}
							value={this.state.input}
						/>
						<Button title='Adicionar' onPress={this.addButton} /> 
					</View>
				</View>
				<FlatList
					data={this.state.todo}
					renderItem={({item}) => <ConfigList data={item} />}
					keyExtractor={(item, index) => item.id}
				/>
			</View>
		);
	}
}

class ConfigList extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>{this.props.data.item}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create ({
	container: {
		flex: 1,
		marginTop: 25
	},
	areaInserir:{
		justifyContent: 'center',
		alignItems: 'center',
		margin: 10,
		//flexDirection: 'row'
	},
	input: {
		width: '70%',
		backgroundColor: '#CCC'
	},
})
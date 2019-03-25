import React from 'react';

import{
	View,
	FlatList,
	Text,
	Image,
	TouchableOpacity
}from 'react-native';

class Treinamento extends React.Component {
	state = {
		items: [{hey: '1'}, {hey: '2'},{hey: '3'},{hey: '4'},{hey: '5'}],
	};

	mudandoCor = (data) => {
		if (data.index === 0){
			return <Text>Primeiro</Text>
		}
		if (data.index === this.state.items.length - 1){
			return <Text> Último </Text>
		}
		return <Text>{data.item.hey} </Text>
	}

	clickButton = () => {
		this.setState({
			items: this.state.items.concat([{hey: this.state.items.length + 1}])
		})
		}

	render() {
		return (
			<View>
				<FlatList
					data={this.state.items}
					renderItem={this.mudandoCor}
				/>
				<Image style={styles.imagem} source={{uri:'https://image.freepik.com/fotos-gratis/lapis-verde-com-uma-lista-positiva_1156-444.jpg'}} />
				<TouchableOpacity
					style={styles.btn}
					onPress={this.clickButton}
				>
					<Text> Adicionar</Text>
				</TouchableOpacity>
			</View>
		)
	}
}
const styles = {
	imagem: {
		width: '40%',
		height: '40%'
	},
	btn: {
		justifyContent: 'center',
		alignItems: 'center',
		width: '25%',
		height: 40,
		backgroundColor: 'red'
	}
}


export default Treinamento;
import React from 'react';
import {Text} from 'react-native';

class Judul extends React.Component{
	render(){
		return(

			<Text style={salon.judul}
			>BIODATA</Text>
			  )
	}
}
const salon = {
	judul:{
		color : '#f00',
		fontSize : 50,
		fontWeight : 'bold',
		backgroundColor: '#0f0'
	}
}
export default Judul;
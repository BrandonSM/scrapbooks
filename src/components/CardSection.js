import React from 'react';
import { Text, View, Image } from 'react-native';

const CardSection = (props) => {
	return (
		<View style={styles.container}>
			{props.children}
			<View>
				<Image/>
			</View>
			<View>
				<Text></Text>
				<Text></Text>
			</View>
		</View>
	);
};

const styles = {
	container : {
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: '#FFF',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#DDD',
		position: 'relative',
	},
};

export default CardSection;
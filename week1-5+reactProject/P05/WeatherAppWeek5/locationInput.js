import { View, TextInput, Button, StyleSheet } from 'react-native';
import React from 'react';
const UpdateLocation = ({ updateLocation }) => {
	const textInputField = React.createRef();
	return (
		<View style={styles.flexRow}>
			<View style={styles.flexRowItem}>
				<TextInput ref={textInputField} placeholder="Type location" style={styles.textinput} />
			</View>
			<View style={styles.flexRowItem}>
				<Button title="Get weather" onPress={() => updateLocation(textInputField.current.value)} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	flexRow: {
		flexDirection: 'row'
	},
	flexRowItem: {
		flex: 0.5,
		padding: 5
	},
	textinput: {
		fontSize: 20,
		padding: 5,
		borderWidth: 2
	}
});

export default UpdateLocation;

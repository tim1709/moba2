import { Text, View, StyleSheet } from 'react-native';

const WeatherScreen = ({temperature, windSpeed, weatherIcon}) => {
	return (<View>        
		<View style={styles.flexRow}>
			<View style={styles.flexRowItem}>
				<View style={styles.temperatureBox}>
					<Text style={styles.fontSize20}>Temperature: {temperature}°</Text>
				</View>
			</View>
			<View style={styles.flexRowItem}>
				<View style={styles.windBox}>
					<Text style={styles.fontSize20}>Wind Speed: {windSpeed} kmh</Text>
				</View>
			</View>
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
	temperatureBox: {
		backgroundColor: 'yellow',
		padding: 4
	},
	windBox: {
		backgroundColor: 'pink',
		padding: 4
	},
	fontSize20: {
		fontSize: 20
	}
});

export default WeatherScreen;

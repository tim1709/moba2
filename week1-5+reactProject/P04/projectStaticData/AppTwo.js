import React, { useState } from 'react';
import Header from './headerFile';
import UpdateLocation from './locationInput';
import { View, Button, StyleSheet } from 'react-native';
import WeatherScreen from './weatherScreen';
import ForecastList from './forecastList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

function HomeScreen() {
	const [location, setLocation] = useState('Tampere');
	const [temperature, setTemperature] = useState(29.7);
	const [windSpeed, setWindSpeed] = useState(10);
	//const [ weatherIcon, setWeatherIcon ] = useState();
	const [listForecast, setListForecast] = useState({
		list: []
	});
	function getRoundedFixed2(value) {
		var roundedString = value.toFixed(2);
		return Number(roundedString);
	}
	const fetchData = async (location) => {
		// Gets the fresh data from API and puts it into the temp and wind fields
		fetch(
			'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=9fe9ef5960f93657114eee855970b420'
		)
			.then((res) => res.json())
			.then((json) => {
				console.log(json);
				var temperatureInK = json.main.temp;
				setTemperature(getRoundedFixed2(temperatureInK - 273.15));
				setWindSpeed(getRoundedFixed2(json.wind.speed));
				//console.log(json.weather[0].icon);
				//setWeatherIcon(json.weather[0].icon)
				//console.log(weatherIcon);
			});
	};

	const fetchDataForecast = async (location) => {
		location = 'Tampere';
		fetch(
			'https://api.openweathermap.org/data/2.5/forecast?q=' + location + '&appid=9fe9ef5960f93657114eee855970b420'
		)
			.then((res) => res.json())
			.then((json) => {
				var weatherList = json.list;
				setListForecast(weatherList);
			});
	};

	const fetchDataTampere = () => {
		setLocation('Tampere');
		fetchData('Tampere');
	};

	const updateLocation = (updatedLocation) => {
		setLocation(updatedLocation);
		fetchData(updatedLocation);
	};




	return (
		<View>			<Header location={location} />
			<View style={styles.outestView}>
				<WeatherScreen
					temperature={temperature}
					windSpeed={windSpeed}
				//weatherIcon={weatherIcon}
				/>
				<UpdateLocation updateLocation={updateLocation} />
				<View style={styles.flexRow}>
					<View style={styles.flexRowItem}>
						<Button title="Fetch Weather Data Tampere" onPress={() => fetchDataTampere()} />
					</View>
					<View style={styles.flexRowItem}>
						<Button title="Fetch Forecast data" onPress={() => fetchDataForecast()} />
					</View>
				</View>
				<ForecastList listWithForecastData={listForecast}></ForecastList>
			</View>
		</View>
	);
}



function AppTwo() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={HomeScreen} />

			</Stack.Navigator>
		</NavigationContainer>);
}



const styles = StyleSheet.create({
	outestView: {
		flexDirection: 'column',
		padding: 10
	},
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
	},
	textinput: {
		fontSize: 20,
		padding: 5,
		border: '1px solid rgba(0, 0, 0, 1)'
	}
});

export default AppTwo;

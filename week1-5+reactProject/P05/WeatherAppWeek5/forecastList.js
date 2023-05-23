import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ForecastList = (listWithForecastData) => {
	if (listWithForecastData.listWithForecastData.length > 0) {
		return (
			<div>
				<div>here for testing purposes</div>
				<h3>Weather forecast</h3>
				<View
					style={styles.forecastList}
				>
					{listWithForecastData.listWithForecastData.map((item, index) => {
						if (index % 8 == 0) {
							return (
								<View style={styles.forecastDay} key={index}>
									<Text>Time: {getFinnishDateFromUnix(item.dt) + 3}</Text>
									<Text>Temp: {getRoundedFixed2(item.main.temp - 273.15)}°</Text>
									<Text>Wind: {item.wind.speed} </Text>
								</View>
							);
						}
					})}
				</View>
			</div>
		);
	} else {
		return (
			<div>
				<h3>Weather forecast</h3>
			</div>
		);
	}
};

function getFinnishDateFromUnix(value) {
	var a = new Date(value * 1000);
	var months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
	var year = a.getFullYear();
	var month = months[a.getMonth()];
	var date = a.getDate();
	var hour = a.getHours();
	var min = '0' + a.getMinutes();
	var sec = '0' + a.getSeconds();
	var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min.substr(-2) + ':' + sec.substr(-2);
	return time;
}

function getRoundedFixed2(value) {
	var roundedString = value.toFixed(2);
	return Number(roundedString);
}

const styles = StyleSheet.create({
	forecastDay: {
		backgroundColor: 'pink',
		flex: 0.2,
		margin: 2,
		padding: 2
	},
    forecastList:{
        flexDirection: 'row',
        height: 200
    }
});

export default ForecastList;

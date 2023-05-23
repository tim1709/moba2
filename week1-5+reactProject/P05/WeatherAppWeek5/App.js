import { StyleSheet, Text, View, Button, TextInput,Image } from 'react-native';
import { useState } from 'react';
import WeatherScreen from './weatherScreen';
import SvgUri from 'react-native-svg-uri';

export default function App() {
  const [location, setLocation] = useState('Zurich');
  const [temperature, setTemperature] = useState(29.7);
  const [windSpeed, setWindSpeed] = useState(10);
  function getRoundedFixed2(value) {
    var roundedString = value.toFixed(2);
    return Number(roundedString);
  }

  const updateLocation = (updatedLocation) => {
    setLocation(updatedLocation);
    fetchData(updatedLocation);
  };
  const fetchData = async (location2) => {
    console.log(location2);
    // Gets the fresh data from API and puts it into the temp and wind fields
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q='+location+'&appid=9fe9ef5960f93657114eee855970b420'
    ).then((res) => res.json())
    .then((json) => {
      var temperatureInK = json.main.temp;
      setTemperature(getRoundedFixed2(temperatureInK - 273.15));
      setWindSpeed(getRoundedFixed2(json.wind.speed));
      //console.log(json.weather[0].icon);
      //setWeatherIcon(json.weather[0].icon)
      //console.log(weatherIcon);
    });

  };
  return (
    <View>
      <View style={{ height: 50, alignContent:'center'}}><Text style={{alignSelf:"center",marginTop:30}}>{location}</Text></View>

      <View style={styles.outestView}>
        <WeatherScreen
          temperature={temperature}
          windSpeed={windSpeed}
        />
        <View style={styles.flexRow}>
          <View style={styles.flexRowItem}>
            <TextInput placeholder="Type location" style={styles.textinput} onChange={(event) => setLocation(event.nativeEvent.text)} />
          </View>
          <View style={styles.flexRowItem}>
            <Button title="Get weather" onPress={() => fetchData(location)} />
          </View>
        </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outestView: {
    flexDirection: 'column',
    padding: 10,
    marginTop: 20
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
    borderWidth: 2
  }
});
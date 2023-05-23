import React from 'react';
import { View, Text, Button, StyleSheet,TouchableOpacity,FlatList } from 'react-native';
import { useState } from 'react';
import moment from 'moment';

function DetailsScreen({ route, navigation }) {
  const { keyword } = route.params;

  const [events, setEvents] = useState([]);

  const url =
    'https://api.seatgeek.com/2/events?venue.state=' +
    keyword +
    '&client_id=MzIwMDY0ODd8MTY3Njk4MzUyNC42ODc0NzQz&client_secret=20ec6a6ce7017f407dbc86d957349d5c90ae268b7fc748aea99122c44cbfaaac';
  //app secret is 20ec6a6ce7017f407dbc86d957349d5c90ae268b7fc748aea99122c44cbfaaac
  // Client ID: MzIwMDY0ODd8MTY3Njk4MzUyNC42ODc0NzQz
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      var eventList = json.events;
      setEvents(eventList);
    });

  const renderItem = ({ item }) => {
    const datetime = moment.utc(item.datetime_utc);

  // Format the datetime using the desired format
  const formattedDatetime = datetime.format('DD MM YYYY HH:mm');
  console.log(item);
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('More_Details', { type: item.type,date:formattedDatetime,venue: item.venue.name })}>
        <Text style={styles.eventType}>{item.type}</Text>
        <Text> {formattedDatetime}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>You Searched for {keyword}</Text>

      {events ? (
        <FlatList
        data={events}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      ) : (
        <Text>'No Events'</Text>
      )}
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    marginBottom: 10,
    padding: 10
  },
  eventType:{
    fontWeight: 'bold'
  }
});

export default DetailsScreen;

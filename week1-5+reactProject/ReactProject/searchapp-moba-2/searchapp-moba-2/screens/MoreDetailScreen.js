import { StyleSheet, Text, View, TextInput, Button,Image } from 'react-native';

function MoreDetailsScreen({ route, navigation }) {
  const { type, date,venue } = route.params;
      // sports, music_festival, broadway_tickets_national, theater comedy family 

  return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.eventType}>{type}</Text>
      <Text> {date}</Text>
      <Text> {venue}</Text>

      {type==='concert' && <Image style={{ width: 200, height: 200 }} source={require('./concert.jpeg')}/>}
      {type==='nhl' && <Image style={{ width: 200, height: 200 }} source={require('./nhl.jpeg')}/>}
      {type==='mlb' && <Image style={{ width: 200, height: 200 }} source={require('./baseball.jpeg')}/>}
      {type==='sports' && <Image style={{ width: 200, height: 200 }} source={require('./sports.png')}/>}
      {type==='music_festival' && <Image style={{ width: 200, height: 200 }} source={require('./music_festival.png')}/>}
      {type==='broadway_tickets_national' && <Image style={{ width: 200, height: 200 }} source={require('./broadway.png')}/>}
      {type==='theater' && <Image style={{ width: 200, height: 200 }} source={require('./theater.png')}/>}
      {type==='comedy' && <Image style={{ width: 200, height: 200 }} source={require('./comedy.png')}/>}
      {type==='family' && <Image style={{ width: 200, height: 200 }} source={require('./family.png')}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  eventType: {
    fontWeight: 'bold',
  },
});

export default MoreDetailsScreen;

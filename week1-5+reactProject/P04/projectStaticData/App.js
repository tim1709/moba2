import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView } from 'react-native';

export default function App() {
  return (
    <View>
      <View style={{height: 50, alignContent: 'center'}}><Text style={{fontWeight: 'bold'}}>Static events scrollview</Text></View>
      <ScrollView>
        <View style={styles.item}>
          <Text>Theater 2023 04 10 2pm</Text>
        </View>
        <View style={styles.item}>
          <Text>Theater 2023 04 10 2pm</Text>
        </View>
        <View style={styles.item}>
          <Text>Theater 2023 04 10 2pm</Text>
        </View>
        <View style={styles.item}>
          <Text>Theater 2023 04 10 2pm</Text>
        </View>
        <View style={styles.item}>
          <Text>Theater 2023 04 10 2pm</Text>
        </View>
        <View style={styles.item}>
          <Text>Theater 2023 04 10 2pm</Text>
        </View>
        <View style={styles.item}>
          <Text>Theater 2023 04 10 2pm</Text>
        </View>
        <View style={styles.item}>
          <Text>Theater 2023 04 10 2pm</Text>
        </View>
        <View style={styles.item}>
          <Text>Theater 2023 04 10 2pm</Text>
        </View>
        <View style={styles.item}>
          <Text>Theater 2023 04 10 2pm</Text>
        </View>
        <View style={styles.item}>
          <Text>Theater 2023 04 10 2pm</Text>
        </View>
        <View style={styles.item}>
          <Text>Theater 2023 04 10 2pm</Text>
        </View>
        <View style={styles.item}>
          <Text>Theater 2023 04 10 2pm</Text>
        </View>
        <View style={styles.item}>
          <Text>Theater 2023 04 10 2pm</Text>
        </View>
        <View style={styles.item}>
          <Text>Theater 2023 04 10 2pm</Text>
        </View>
        <View style={styles.item}>
          <Text>Theater 2023 04 10 2pm</Text>
        </View>
       
        
        </ScrollView></View>
  );
}

const styles = StyleSheet.create({
  item: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    marginBottom: 10,
  },
});

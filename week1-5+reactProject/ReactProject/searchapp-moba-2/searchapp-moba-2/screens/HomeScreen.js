import { useState } from 'react';

import { StyleSheet, Text, View, TextInput, Button  } from 'react-native';

function HomeScreen({ navigation }) {
  const [keyword, setKeyword] = useState('ny');

  const searchKeyword = () => {
    navigation.navigate('Details', { keyword: keyword });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        style={styles.textInput}
        placeholder="keywords"
        onChangeText={(newText) => setKeyword(newText)}
      />
      <Button title="Go to Details" onPress={searchKeyword} />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 2,
    fontSize: 20,
    padding: 5,
  },
});
export default HomeScreen;

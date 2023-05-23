import React from 'react-native';
import {View, Text} from 'react-native'
export default function Header ({location}){
return (
    <View>
		<Text style={{fontWeight: 'bold', fontSize: '30'}}>Weather for: {location} </Text>
    </View>
    );
};


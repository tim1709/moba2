import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Home() {
    const [ keyword, setKeyword ] = useState('');
	const [ events, setEvents ] = useState([]);
	const [ result, setResult ] = useState('');
	const searchKeyword = () => {
		const url =
			'https://api.seatgeek.com/2/events?venue.state='+keyword+'&client_id=MzIwMDY0ODd8MTY3Njk4MzUyNC42ODc0NzQz&client_secret=20ec6a6ce7017f407dbc86d957349d5c90ae268b7fc748aea99122c44cbfaaac';
		//app secret is 20ec6a6ce7017f407dbc86d957349d5c90ae268b7fc748aea99122c44cbfaaac
		// Client ID: MzIwMDY0ODd8MTY3Njk4MzUyNC42ODc0NzQz
		console.log('sdf');
		fetch(url).then((res) => res.json()).then((json) => {
			var eventList = json.events;
			setEvents(eventList);
			console.log(events);
		});
	};
	return (
		<View style={styles.container}>
			<TextInput
				style={styles.textInput}
				placeholder="keywords"
				onChangeText={(newText) => setKeyword(newText)}
			/>
			<View style={styles.padding15}>
				<Button title="Search" onPress={() => searchKeyword()} />
			</View>
			<Text>{keyword}</Text>
			{events ? (
				events.map((event) => (
					<View key={event.id}>
						<Text>
							{event.type} {event.datetime_utc}
						</Text>
					</View>
				))
			) : (
				''
			)}
			<StatusBar style="auto" />
		</View>
	);

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	padding15: {
		padding: 15
	},
	textInput: {
		border: '1px solid rgba(0, 0, 0, 1)',
		fontSize: 20,
		padding: 5
	}
});
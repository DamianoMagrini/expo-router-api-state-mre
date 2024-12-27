import { fetch } from 'expo/fetch';
import { Button, View } from 'react-native';

async function callCounter() {
	const res = await fetch('/counter');
	const { count } = await res.json();
	alert('Count: ' + count);
}

async function callAlive() {
	await fetch('/alive');
}

export default function App() {
	return (
		<View>
			<Button title='Call counter' onPress={callCounter} />
			<Button title='Call alive' onPress={callAlive} />
		</View>
	);
}

import { useNetworkState } from '@react-hookz/web';
// Tracks the state of browser's network connection.

function UseNetworkState() {
	const onlineState = useNetworkState();

	return <pre>{JSON.stringify(onlineState, null, 2)}</pre>;
}

export default UseNetworkState;

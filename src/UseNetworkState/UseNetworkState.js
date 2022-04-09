import { useNetworkState } from 'react-use';
// Tracks the state of browser's network connection.

function UseNetworkState() {
	const state = useNetworkState();

	return <pre>{JSON.stringify(state, null, 2)}</pre>;
}

export default UseNetworkState;

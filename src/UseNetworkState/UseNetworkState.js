import { useNetworkState } from 'react-use';
import { useNetwork } from 'ahooks';
// Tracks the state of browser's network connection.

function UseNetworkState() {
	const state = useNetworkState();
	const networkState = useNetwork();

	return <pre>{JSON.stringify(networkState, null, 2)}</pre>;
}

export default UseNetworkState;

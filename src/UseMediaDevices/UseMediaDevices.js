import { useMediaDevices } from 'react-use';

function UseMediaDevices() {
	const state = useMediaDevices();

	return <pre>{JSON.stringify(state, null, 2)}</pre>;
}

export default UseMediaDevices;

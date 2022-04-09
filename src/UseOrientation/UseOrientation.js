import { useOrientation } from 'react-use';

function UseOrientation() {
	const state = useOrientation();
	return <pre>{JSON.stringify(state, null, 2)}</pre>;
}

export default UseOrientation;

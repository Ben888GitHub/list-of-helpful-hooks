import { usePageLeave } from 'react-use';

function UsePageLeave() {
	usePageLeave(() => console.log('Page left...'));

	return null;
}

export default UsePageLeave;

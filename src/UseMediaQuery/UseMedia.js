import { useMedia } from 'react-use';
import { useMediaQuery } from '@react-hookz/web';
const UseMedia = () => {
	const matches = useMediaQuery('(min-width: 900px)');

	return (
		<div style={{ color: matches ? 'teal' : 'red' }}>
			{matches ? 'I am teal' : 'I am red'}
		</div>
	);
};

export default UseMedia;

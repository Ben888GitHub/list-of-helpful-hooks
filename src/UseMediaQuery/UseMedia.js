import { useMedia } from 'react-use';

const UseMedia = () => {
	const matches = useMedia('(min-width: 900px)');

	return (
		<div style={{ color: matches ? 'teal' : 'red' }}>
			{matches ? 'I am teal' : 'I am red'}
		</div>
	);
};

export default UseMedia;

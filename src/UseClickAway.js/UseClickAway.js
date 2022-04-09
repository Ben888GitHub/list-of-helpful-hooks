import { useRef } from 'react';
import { useClickAway } from 'react-use';

function UseClickAway() {
	const ref = useRef(null);
	useClickAway(ref, () => {
		console.log('OUTSIDE CLICKED');
	});

	return (
		<div
			ref={ref}
			style={{
				width: 200,
				height: 200,
				background: 'red'
			}}
		/>
	);
}

export default UseClickAway;

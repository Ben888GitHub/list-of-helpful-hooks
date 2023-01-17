import { useRef, useState } from 'react';
import { useClickAway } from 'react-use';

function UseClickAway() {
	const ref = useRef(null);
	const [opened, setOpened] = useState(true);
	useClickAway(ref, () => {
		console.log('OUTSIDE CLICKED');
		setOpened(false);
	});

	return (
		<>
			<button onClick={() => setOpened(!opened)}>Toggle</button>
			{opened && (
				<div
					ref={ref}
					style={{
						width: 200,
						height: 200,
						background: 'red'
					}}
				/>
			)}
		</>
	);
}

export default UseClickAway;

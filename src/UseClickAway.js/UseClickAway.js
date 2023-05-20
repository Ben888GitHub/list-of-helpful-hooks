import { useRef, useState } from 'react';
import { useClickOutside } from '@react-hookz/web';

function UseClickAway() {
	const ref = useRef(null);
	const [opened, setOpened] = useState(true);
	useClickOutside(ref, () => {
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

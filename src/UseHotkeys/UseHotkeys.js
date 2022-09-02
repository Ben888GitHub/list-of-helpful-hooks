import { useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

function UseHotkeys() {
	const [count, setCount] = useState(0);
	useHotkeys('cmd+k', () => setCount((prevCount) => prevCount + 1));
	useHotkeys('cmd+j', () => setCount((prevCount) => prevCount - 1));

	return (
		<div>
			<code>type cmd+k or cmd+j to change the count</code>
			<p>Pressed {count} times.</p>
		</div>
	);
}

export default UseHotkeys;

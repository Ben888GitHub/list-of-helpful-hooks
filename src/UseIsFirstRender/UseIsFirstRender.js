import { useState } from 'react';
import { useIsFirstRender } from '@uidotdev/usehooks';

// * https://usehooks.com/useisfirstrender
/**
check whether the current render is the 
first render of a component, good for conditionally 
execute certain logic or render specific components only on the initial render
 */

const UseIsFirstRender = () => {
	const isFirstRender = useIsFirstRender();
	const [count, setCount] = useState(1);

	const increment = () => {
		setCount((currentCount) => currentCount + 1);
	};

	return (
		<div>
			<h1>useIsFirstRender</h1>
			<h2>First Render? {isFirstRender ? 'Yes' : 'No'}</h2>
			<button className="primary" onClick={increment}>
				re-render
			</button>
			<p>Render Count: {count}</p>
		</div>
	);
};

export default UseIsFirstRender;

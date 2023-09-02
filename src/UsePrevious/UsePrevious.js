import { useState } from 'react';
import { usePreviousDistinct } from '@react-hookz/web';

// * Show previous value of the current state value
// * https://react-hookz.github.io/web/?path=/docs/state-usepreviousdistinct--example

const UsePrevious = () => {
	const [value, setValue] = useState(0);
	const previousDistinctValue = usePreviousDistinct(value);

	const increment = () => {
		setValue((v) => v + 1);
	};

	const decrement = () => {
		setValue((v) => v - 1);
	};

	return (
		<div>
			<span>Current value: {value}</span>

			<div style={{ margin: '1rem 0' }}>
				<div style={{ marginBottom: '0.5rem' }}>
					<button type="button" onClick={increment}>
						increment
					</button>
					<button type="button" onClick={decrement}>
						decrement
					</button>
				</div>
			</div>

			<div>Previous value: {previousDistinctValue ?? 'undefined'}</div>
		</div>
	);
};

export default UsePrevious;

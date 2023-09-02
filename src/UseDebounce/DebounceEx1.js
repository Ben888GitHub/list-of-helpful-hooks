import { useState } from 'react';
import { useDebounce } from 'react-use';
import { useDebouncedCallback } from '@react-hookz/web';

// * https://react-hookz.github.io/web/?path=/docs/callback-usedebouncedcallback--example

function DebounceEx1() {
	const [state, setState] = useState('Typing stopped');
	const [val, setVal] = useState('');
	const [debouncedValue, setDebouncedValue] = useState('');

	const handleDebounceChange = useDebouncedCallback(
		(value) => {
			setState('Typing stopped');
			setDebouncedValue(value);
		},
		[],
		800,
		1000
	);

	return (
		<>
			<input
				type="text"
				value={val}
				placeholder="Debounced input"
				onChange={({ currentTarget }) => {
					setState('Waiting for typing to stop...');
					setVal(currentTarget.value);
					handleDebounceChange(currentTarget.value);
				}}
			/>
			<div>{state}</div>
			<div>
				Debounced value: {debouncedValue}
				{/* <button onClick={cancel}>Cancel debounce</button> */}
			</div>
		</>
	);
}

export default DebounceEx1;

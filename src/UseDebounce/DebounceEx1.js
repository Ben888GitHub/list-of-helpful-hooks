import { useState } from 'react';
// import { useDebounce } from 'react-use';
import { useDebounce } from 'ahooks';

function DebounceEx1() {
	const [state, setState] = useState('Typing stopped');
	const [val, setVal] = useState('');
	// const [debouncedValue, setDebouncedValue] = useState('');
	const debouncedValue = useDebounce(val, { wait: 1000 });

	return (
		<>
			<input
				type="text"
				value={val}
				placeholder="Debounced input"
				onChange={({ currentTarget }) => {
					setVal(currentTarget.value);
				}}
			/>
			{/* <div>{state}</div> */}
			<div>
				Debounced value: {debouncedValue}
				{/* <button onClick={cancel}>Cancel debounce</button> */}
			</div>
		</>
	);
}

export default DebounceEx1;

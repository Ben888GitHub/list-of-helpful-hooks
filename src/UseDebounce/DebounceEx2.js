import { useState } from 'react';
import { useDebounce } from 'react-use';

function DebounceEx2() {
	const [state, setState] = useState('Typing stopped');
	const [val, setVal] = useState('');
	const [debouncedValue, setDebouncedValue] = useState('');

	const [, cancel] = useDebounce(
		() => {
			setState('Typing stopped');
			const rows = Array.from(Array(5000), (_, index) => {
				return (
					<div key={index}>
						<img
							style={{ width: 30, height: 30 }}
							src="https://www.ethode.com/contentAsset/raw-data/84e3be24-58bc-499c-9d50-f8088158f11a/image"
							className="App-logo"
							alt="logo"
						/>

						<>
							{index + 1}. {val}
						</>
					</div>
				);
			});

			const list = <>{rows}</>;
			setDebouncedValue(list);
			console.log(val);
		},
		2000,
		[val]
	);

	return (
		<>
			<>
				<input
					type="text"
					value={val}
					placeholder="Debounced input"
					onChange={({ currentTarget }) => {
						setState('Waiting for typing to stop...');
						setVal(currentTarget.value);
					}}
				/>
			</>
			<br />
			<div>{state}</div>
			<br />
			<>
				{!debouncedValue && <span>Loading...</span>}
				{debouncedValue && debouncedValue}
			</>
		</>
	);
}

export default DebounceEx2;

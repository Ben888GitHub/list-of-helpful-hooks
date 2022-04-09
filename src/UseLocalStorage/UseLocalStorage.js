import { Fragment, useRef, memo, useCallback, useState } from 'react';
import { useLocalStorage } from 'react-use';

function UseLocalStorage() {
	const [value, setValue, remove] = useLocalStorage('value', []);
	const inputRef = useRef();

	console.log(`rerender`);
	// console.log(value);
	console.log(inputRef);

	const handleChange = (e) => {
		inputRef.current = e.target.value;
		// console.log(inputRef);
	};

	const addValue = () => {
		inputRef.current.value = '';
		setValue([
			...value,
			{
				id: value.length + 1,
				value: inputRef.current
			}
		]);
	};

	const deleteValue = (id) => {
		const removeItem = value.filter((item) => item.id !== id);
		setValue(removeItem);
	};

	return (
		<>
			<h2>UseLocalStorage</h2>
			{/* <input type="text" onChange={handleChange} /> */}
			<input
				type="text"
				ref={inputRef}
				value={inputRef?.current?.value}
				onChange={handleChange}
			/>
			<button onClick={addValue}>Add Value</button>
			{value?.map((item, index) => (
				<Fragment key={index}>
					<h5>
						{item.id}: {item.value}
					</h5>
					<button onClick={() => deleteValue(item.id)}>
						Delete {item.value}
					</button>
					<br />
				</Fragment>
			))}
		</>
	);
}

export default UseLocalStorage;

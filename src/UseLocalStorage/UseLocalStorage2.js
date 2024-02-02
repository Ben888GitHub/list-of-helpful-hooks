import { useState, Fragment } from 'react';
import useLocalStorageState from 'use-local-storage-state';

function UseLocalStorage2() {
	const [todos, setTodos] = useLocalStorageState('todos', {
		defaultValue: []
	});

	const [inputValue, setInputValue] = useState('');

	console.log(`rerender`);

	const addTodo = () => {
		// setTodos([
		// 	...todos,
		// 	{
		// 		id: todos.length + 1,
		// 		value: inputValue
		// 	}
		// ]);
		setTodos((prevTodos) => [
			...prevTodos,
			{
				id: prevTodos.length + 1,
				value: inputValue
			}
		]);
		setInputValue('');
	};

	const handleChange = (e) => {
		setInputValue(e.target.value);
	};

	const deleteTodo = (id) => {
		console.log(id);
		const removeItem = todos.filter((item) => item.id !== id);
		setTodos(removeItem);
	};

	return (
		<>
			<h2>UseLocalStorage with use-local-storage-state</h2>
			<input
				type="text"
				placeholder="todo name"
				value={inputValue}
				onChange={handleChange}
			/>
			<button onClick={addTodo}>Add Todo</button>

			{todos?.map((item, index) => (
				<Fragment key={index}>
					<h5>
						{item.id}: {item.value}
					</h5>
					<button onClick={() => deleteTodo(item.id)}>
						Delete {item.value}
					</button>
					<br />
				</Fragment>
			))}
		</>
	);
}

export default UseLocalStorage2;

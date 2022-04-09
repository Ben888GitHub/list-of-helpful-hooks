import { useToggle } from 'react-use';

function UseToggle() {
	const [on, toggle] = useToggle(true);
	// console.log(`toggle render`);
	return (
		<div>
			<div>{on ? 'ON' : 'OFF'}</div>
			<button onClick={toggle}>Toggle</button>
			<button onClick={() => toggle(true)}>set ON</button>
			<button onClick={() => toggle(false)}>set OFF</button>
		</div>
	);
}

export default UseToggle;

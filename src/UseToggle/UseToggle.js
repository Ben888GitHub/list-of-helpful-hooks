import { useToggle } from 'ahooks';

function UseToggle() {
	// const [on, toggle] = useToggle(true);
	const [state, { toggle, setLeft, setRight }] = useToggle();
	// console.log(`toggle render`);
	return (
		<div>
			<div>{state ? 'ON' : 'OFF'}</div>
			<button onClick={toggle}>Toggle</button>
			<button onClick={setRight}>set ON</button>
			<button onClick={setLeft}>set OFF</button>
		</div>
	);
}

export default UseToggle;

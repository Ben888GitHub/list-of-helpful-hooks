import { useToggle } from '@react-hookz/web';

function UseToggle() {
	const [isToggled, toggle] = useToggle(true);
	// console.log(`toggle render`);
	// console.log(isToggled);
	return (
		<div>
			<div>{isToggled ? 'ON' : 'OFF'}</div>
			<button onClick={toggle}>Toggle</button>
			<button onClick={() => toggle(true)}>set ON</button>
			<button onClick={() => toggle(false)}>set OFF</button>
		</div>
	);
}

export default UseToggle;

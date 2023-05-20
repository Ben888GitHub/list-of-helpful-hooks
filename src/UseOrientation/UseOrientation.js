import { useScreenOrientation } from '@react-hookz/web';

function UseOrientation() {
	const orientation = useScreenOrientation();
	return (
		<div>
			<div>
				Orientation: <code>{orientation}</code>
			</div>
			<div>
				Render time: <code>{new Date().toLocaleString()}</code>
			</div>
		</div>
	);
}

export default UseOrientation;

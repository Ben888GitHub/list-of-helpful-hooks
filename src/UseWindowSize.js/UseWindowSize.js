// import { useWindowSize } from 'react-use';
import { useWindowSize } from '@react-hookz/web';

function UseWindowSize() {
	const { width, height } = useWindowSize();

	return (
		<>
			<h5>width: {width}</h5>
			<h5>height: {height}</h5>
			{width < 600 && <>Phone Size</>}
		</>
	);
}

export default UseWindowSize;

// import { useWindowSize } from 'react-use';
import { useSize } from 'ahooks';
import { useRef } from 'react';

function UseWindowSize() {
	const ref = useRef(null);
	const size = useSize(ref);

	return (
		<div ref={ref}>
			<h5>width: {size?.width}</h5>
			<h5>height: {size?.height}</h5>
			{size?.width < 600 && <>Phone Size</>}
		</div>
	);
}

export default UseWindowSize;

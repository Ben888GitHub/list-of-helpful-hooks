import useResizeObserver from 'use-resize-observer';
import './style.css';

function UseResizeObserver() {
	const { ref, width, height } = useResizeObserver();

	return (
		<div>
			UseResizeObserver
			<div ref={ref} className="box">
				{width}x{height}
			</div>
		</div>
	);
}

export default UseResizeObserver;

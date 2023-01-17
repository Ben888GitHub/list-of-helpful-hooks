import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';

const IntersectionObserver = () => {
	const { ref, inView, entry } = useInView({
		/* Optional options */
		threshold: 1 // Number between 0 and 1 indicating the percentage that should be visible
	});
	const containerRef = useRef();

	// console.log(ref);
	// ref is to enable the child elements to be accessible to the Intersection values
	console.log(inView);
	console.log(entry?.isIntersecting);

	return (
		<>
			<div ref={ref}>
				<h2>{`Header inside viewport ${inView}.`}</h2>
			</div>
			<br />
			<main ref={containerRef} style={{ overflowY: 'scroll', height: 300 }}>
				<div ref={ref}>
					<h1>{entry?.isIntersecting ? 'Fully Visible' : 'Obscured'}</h1>
				</div>
			</main>
		</>
	);
};

export default IntersectionObserver;

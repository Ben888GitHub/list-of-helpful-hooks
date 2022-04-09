import { useCss } from 'react-use';

function UseCss() {
	const className = useCss({
		color: 'red',
		border: '1px solid red',
		'&:hover': {
			color: 'blue'
		}
	});
	// console.log(`hover render`);
	return <div className={className}>Hover me!</div>;
}

export default UseCss;

// reference: https://github.com/streamich/react-use/blob/HEAD/docs/useCss.md

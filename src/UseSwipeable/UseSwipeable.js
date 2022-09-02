import { useSwipeable } from 'react-swipeable';

function UseSwipeable() {
	const handlers = useSwipeable({
		onSwiped: (e) => console.log('User Swiped!', e)
	});

	return <div {...handlers}>You can swipe here</div>;
}

export default UseSwipeable;

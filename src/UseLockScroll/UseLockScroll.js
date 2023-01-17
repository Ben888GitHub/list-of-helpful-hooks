import { useLockBodyScroll, useToggle } from 'react-use';

function UseLockScroll() {
	const [locked, toggleLocked] = useToggle(false);

	useLockBodyScroll(locked);

	return (
		<>
			<button style={{ fontSize: 18 }} onClick={() => toggleLocked()}>
				{locked ? 'Unlock' : 'Lock'}
			</button>
		</>
	);
}

export default UseLockScroll;

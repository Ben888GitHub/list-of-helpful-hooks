import useOnlineStatus from '@rehooks/online-status';

function UseOnlineStatus() {
	const onlineStatus = useOnlineStatus();
	// console.log(onlineStatus);

	return (
		<>
			<h1>You are {onlineStatus ? 'Online' : 'Offline'}</h1>
		</>
	);
}

export default UseOnlineStatus;

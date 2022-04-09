import { useState } from 'react';
import useBrowserContextCommunication from 'react-window-communication-hook';

function WindowCommunicationHook() {
	const [communicationState, postMessage] =
		useBrowserContextCommunication('channel');
	// communicationState contains lastMessage and messages which is an array of the messages that where send from other tabs/windows to the current one.
	// Use postMessage to send messages to the other browser contextes (windows, tabs, iframes)

	// Tabs, Windows etc are not listening to there own messages so
	// we need an extra local state
	const [status, setStatus] = useState('login');

	function logout() {
		setStatus('logout');
		postMessage('logout');
	}

	const shouldLogout = [communicationState.lastMessage, status].includes(
		'logout'
	);

	return (
		<>
			<h1>{shouldLogout ? 'Logged Out' : 'Logged In'}</h1>
			<button onClick={logout}>Logout</button>
		</>
	);
}

export default WindowCommunicationHook;

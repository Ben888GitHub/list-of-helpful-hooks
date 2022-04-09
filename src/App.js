import './App.css';
import DebounceEx1 from './UseDebounce/DebounceEx1';
import UseLocalStorage from './UseLocalStorage/UseLocalStorage';
import UseLocalStorage2 from './UseLocalStorage/UseLocalStorage2';
import UseWindowSize from './UseWindowSize.js/UseWindowSize';
import UseClickAway from './UseClickAway.js/UseClickAway';
import UseOrientation from './UseOrientation/UseOrientation';
import UseNetworkState from './UseNetworkState/UseNetworkState';
import UsePageLeave from './UsePageLeave/UsePageLeave';
import UseCss from './UseCss/UseCss';
import UseToggle from './UseToggle/UseToggle';
import UseMediaDevices from './UseMediaDevices/UseMediaDevices';
import UseOnlineStatus from './UseOnlineStatus/UseOnlineStatus';
import WindowCommunicationHook from './WindowCommunicationHook/WindowCommunicationHook';

function App() {
	return (
		<div className="App">
			<DebounceEx1 />
			<br />
			<button onClick={() => alert('hey')}>Alerrt</button>
			{/* <DebounceEx2 /> */}
			{/* 

			<UseLocalStorage /> */}
			<br />
			<UseLocalStorage2 />
			<br />
			<UseWindowSize />
			<br />
			{/* <UseClickAway /> */}
			<UseOrientation />
			<br />
			<UseNetworkState />
			<br />
			{/* <UsePageLeave /> */}
			<UseCss />
			<br />
			<UseToggle />
			<br />
			<UseMediaDevices />
			<br />
			<WindowCommunicationHook />
			<br />
			<UseOnlineStatus />
		</div>
	);
}

export default App;

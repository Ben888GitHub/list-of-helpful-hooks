import useGeolocation from 'beautiful-react-hooks/useGeolocation';

function UseGeolocation() {
	const [geoState, { onChange }] = useGeolocation();

	onChange(() => {
		console.log('Position changed...');
	});

	return (
		<>
			The current position is:
			{geoState.isRetrieving && <p>Retrieving position...</p>}
			{geoState.isSupported &&
				geoState.position && [
					<p key={0}>Lat: {geoState.position.coords.latitude}</p>,
					<p key={1}>Lng: {geoState.position.coords.longitude}</p>
				]}
		</>
	);
}

export default UseGeolocation;

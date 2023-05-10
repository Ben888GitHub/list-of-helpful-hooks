import { useState } from 'react';
import { useLayer, Arrow } from 'react-laag';

const LaagTooltip = () => {
	const [isOpen, setOpen] = useState(false);

	const { renderLayer, triggerProps, layerProps, arrowProps } = useLayer({
		isOpen,
		placement: 'bottom-center',
		arrowOffset: 4
	});

	return (
		<>
			<button {...triggerProps} onClick={() => setOpen(!isOpen)}>
				Trigger
			</button>
			{isOpen &&
				renderLayer(
					<div
						{...layerProps}
						style={{ ...layerProps.style, width: 200, height: 150 }}
					>
						Layer
						<Arrow {...arrowProps} size={5} roundness={0} />
					</div>
				)}
		</>
	);
};

export default LaagTooltip;

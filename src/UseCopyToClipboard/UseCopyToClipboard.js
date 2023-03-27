import { useState } from 'react';
import useClipboard from 'react-use-clipboard';

const UseCopyToClipboard = () => {
	const [text, setText] = useState('');
	const [isCopied, setCopied] = useClipboard(text, {
		// `isCopied` will go back to `false` after 1000ms.
		successDuration: 1000
	});

	isCopied && console.log(isCopied, text);

	return (
		<>
			<input value={text} onChange={(e) => setText(e.target.value)} />
			<button disabled={!text} onClick={setCopied}>
				Was it copied? {isCopied ? `Yes! 👍, Copied: ${text} ` : 'Nope! 👎'}
			</button>
		</>
	);
};

export default UseCopyToClipboard;

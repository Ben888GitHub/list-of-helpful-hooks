import useSearchQuery from 'beautiful-react-hooks/useSearchQuery';

const UseSearchQuery = () => {
	const [searchValue, setSearch] = useSearchQuery('');

	return (
		<div>
			<p>Current value of search param is '{searchValue}'</p>
			<input
				value={searchValue}
				onChange={(e, nextValue) => setSearch(nextValue)}
			/>
		</div>
	);
};

export default UseSearchQuery;

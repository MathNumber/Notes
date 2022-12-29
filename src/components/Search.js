import React from 'react';
const Search = ({ handleSearchNote }) => {
	return (
		<div className='search'>
			<input
				onChange={(e) =>
					handleSearchNote(e.target.value)
				}
				type='text'
				placeholder='type to search...'
			/>
		</div>
	);
};

export default Search;

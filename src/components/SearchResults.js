import React from "react";
import SearchResult from "./SearchResult";

const SearchResults = props => {
    const { data } = props;

    return (
			<>
				{(data && data.length) ? (
					data.map((value) => (
						<SearchResult key={value.id} data={value} />
					))
				) : (
					<p>Maaf, data tidak ditemukan</p>
				)}
			</>
    );
};

export default SearchResults;
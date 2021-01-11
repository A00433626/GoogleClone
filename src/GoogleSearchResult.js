import { useState, useEffect } from "react";
import { ApiKey } from "./ApiKey";

const cxKey = "b222ce76f6345f3ee";
const GoogleSearchResult = (term) => {
	const [data, setData] = useState(null);
	useEffect(() => {
		const fetchData = async () => {
			fetch(
				`https://www.googleapis.com/customsearch/v1?key=${ApiKey}&cx=${cxKey}&q=${term}`,
			)
				.then((response) => response.json())
				.then((result) => setData(result));
		};
		fetchData();
	}, [term]);
	return { data };
};

export default GoogleSearchResult;

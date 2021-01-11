import React, { Component } from "react";
import { useStateValue } from "../StateProvider";
import GoogleSearchResult from "../GoogleSearchResult";
export default function SearchResultPage() {
	const [{ term }, dispatch] = useStateValue();
	const { data } = GoogleSearchResult(term);
	console.log(data);
	return (
		<div className="searchResultPage">
			<div className="searchResultPage_Header">
				<h1>{term}</h1>
			</div>
			<div className="searchResultPage_results"></div>
		</div>
	);
}

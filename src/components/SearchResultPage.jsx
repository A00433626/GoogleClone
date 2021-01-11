import React, { Component } from "react";
import { useStateValue } from "../StateProvider";
import GoogleSearchResult from "../GoogleSearchResult";
import Response from "../testresponseData.js";
import { Link } from "react-router-dom";
import Search from "./search/Search";
import "./SearchResultPage.css";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
export default function SearchResultPage() {
	const [{ term }, dispatch] = useStateValue();
	// const { data } = GoogleSearchResult(term);
	const data = Response;
	console.log(data);
	return (
		<div className="search-result-page">
			<div className="search-result-page_Header">
				<Link to="/">
					<img
						className="logo"
						src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
						alt=""
					/>
				</Link>

				<div className="search-result-page_search">
					<Search hideButtons />

					<div className="search-result-page_options">
						<div className="search-result-page-options-left">
							<div className="search-result-page-option">
								<SearchIcon />
								<Link to="/all">All</Link>
							</div>
							<div className="search-result-page-option">
								<DescriptionIcon />
								<Link to="/news">News</Link>
							</div>
							<div className="search-result-page-option">
								<ImageIcon />
								<Link to="/images">Images</Link>
							</div>
							<div className="search-result-page-option">
								<LocalOfferIcon />
								<Link to="/shopping">shopping</Link>
							</div>
							<div className="search-result-page-option">
								<RoomIcon />
								<Link to="/maps">shopping</Link>
							</div>
							<div className="search-result-page-option">
								<MoreVertIcon />
								<Link to="/more">more</Link>
							</div>
						</div>
						<div className="search-result-page-options-right">
							<div className="search-result-page-option">
								<Link to="/settings">Settings</Link>
							</div>
							<div className="search-result-page-option">
								<Link to="/tools">Tools</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			{term && (
				<div className="search-result-page_results">
					<p className="search-result-page_results-count">
						About {data?.searchInformation.formattedTotalResults} results{" "}
						{data?.searchInformation.formattedSearchTime} for {term}
					</p>
					{data?.items.map((item) => (
						<div className="search-result-page_results-data">
							<a href={item.link}>{item.displayLink}</a>
							<a
								className="search-result-page_results-data-title"
								href={item.link}>
								<h2>{item.title}</h2>
							</a>
							<p className="search-result-page_results-data-snippet">
								{item.snippet}
							</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

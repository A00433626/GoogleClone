import React from 'react';
import './homePage.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import {Avatar} from '@material-ui/core';
import Search from '../search/Search';

function HomePage() {
	return <div className='header'>
		<div className="homepage_nav-header">
			<div className="homepage_nav-header-left">
				{/* About link */}
				<Link to='./about'>About</Link>
				{/* store link */}
				<Link to='./store'>Store</Link>
			</div>
			<div className="homepage_nav-header-right">
				{/* gmail link */}
				<Link to='./gmail'>Gmail</Link>
				{/* images link */}
				<Link to='./images'>Images</Link>
				{/* Apps icon link */}
				<AppsIcon/>
				{/* user icon link */}
				<Avatar/>
			</div>
		</div>
		<div className="homepage_nav-body">
		<img alt="Google" height="92" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"/>
		<div className="homepage_nav-search-input">
		<Search/>
		</div>
		</div>
	</div>;
}

export default HomePage;

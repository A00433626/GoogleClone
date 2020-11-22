import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import {Avatar} from '@material-ui/core';

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
		<div className="homepage_nav-body"></div>
	</div>;
}

export default HomePage;

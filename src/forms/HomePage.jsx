import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
<<<<<<< HEAD:src/forms/homePage.jsx
import AppsIcon from '@material-ui/icons/Apps';
import {Avatar} from '@material-ui/core';
// API
// AIzaSyCGtt8IzUCfqsGYsP2fQ1P6rEt5kyqBqqI
=======


>>>>>>> 1e61fcdbb165ce10780557c7f525d484229fdd3a:src/forms/HomePage.jsx
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

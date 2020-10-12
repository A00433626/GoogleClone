import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './forms/homePage';
import { BroeserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
	return (
		<div className='App'>
			App
			{/* main page component */}
			<HomePage />
			{/* google search api */}
		</div>
	);
}

export default App;

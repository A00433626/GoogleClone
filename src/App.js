import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/forms/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route path='/search'>
						<div>Hello search</div>
					</Route>
					<Route path='/'>
					<HomePage/>
					</Route>
				</Switch>
			</Router>
			
			{/* main page component */}
			{/* google search api */}
		</div>
	);
}

export default App;

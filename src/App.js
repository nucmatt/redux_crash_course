import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';


import Posts from './components/Posts';
import Postform from './components/Postform';

import store from './store';
class App extends Component {
	render() {
		return (
			// Wrap everything in the app with the Provider tag imported above. The Provider holds the 'Store' that contains the app state.
			<Provider store={store}>
				<div className='App'>
					<header className='App-header'>
						<img src={logo} className='App-logo' alt='logo' />
						<p>
							Edit <code>src/App.js</code> and save to reload.
						</p>
						<a
							className='App-link'
							href='https://reactjs.org'
							target='_blank'
							rel='noopener noreferrer'
						>
							Learn React
						</a>
					</header>
					<Postform />
					<hr />
					<Posts />
				</div>
			</Provider>
		);
	}
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';

import './Style.css';

import Maintenance from './pages/Maintenance';
import Main from './pages/Main';

function App() {
  return (
		<div className="App">
			<header className="App-header">
				<Main/>
			</header>
		</div>
  );
}

export default App;

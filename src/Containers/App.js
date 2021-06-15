import React from 'react';

import Title from '../Components/Title'
import Intro from '../Components/Intro'
import Buttons from '../Components/BtnBox'
import './App.css';
import './font-awesome.min.css'

class App extends React.Component {
	
	render() {

		
		return (
			<div className="App">

				<header className="App-header">
				
				</header>
			
				<div>
					<Title/>
				</div>
				<div>
					<Intro/>
				</div>
				<div>
					<Buttons/>
				</div>

			</div>
		);
	}
}

export default App;



/*
title page
intro/cover letter
profile buttons
topic blocks
project blocks
thank you bar
contact me

*/

import React from 'react';
import Title from '../Components/Title';
import Intro from '../Components/Intro';
import BtnBox from '../Components/BtnBox';
import ProjectBox from '../Components/ProjectBox';
import Thanks from '../Components/Thanks';
import Footer from '../Components/Footer';
import Scripts from '../Components/Scripts';
import './App.css';
import './font-awesome.min.css';


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
					<BtnBox/>
				</div>
				<div>
					<ProjectBox/>
				</div>
				<div>
					<Thanks/>
				</div>
				<div>
					<Footer/>
				</div>
				<div>
					<Scripts/>
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
Scripts

*/

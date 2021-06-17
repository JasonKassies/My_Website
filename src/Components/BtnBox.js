import React from 'react';
import Button from './Button';

const BtnBox = () => {

	return (
		
		<div>
			<section id="two" class="wrapper style3">
				<div class="inner">
					<div id="flexgrid">
					
					<Button title={"GitHub Account"} 
							link={"https://github.com/JasonKassies"} 
							text={"My Account"} />
				
					<Button title={"LinkedIn Profile"} 
							link={"https://www.linkedin.com/in/jasonkassies0616/"} 
							text={"My Profile"} />
				
					<Button title={"Resume Downlaod"} 
							link={"JKassies_Resume.pdf"} 
							text={"Download"} />

					</div>
				</div>
			</section>
		</div>
	);
}

export default BtnBox;
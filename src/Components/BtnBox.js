import React from 'react';
import Button from './Button';

const BtnBox = () => {

	const buttonblock = () => {
        return (
		<div>
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
		);
    }
	


	return (
		
		<div>
			{buttonblock}
		</div>
	);
}

export default BtnBox;
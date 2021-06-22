import React from 'react';
import Contact from './Contact';

const Footer = () => {

	return (

		<footer id="footer" class="wrapper">
				<div class="inner">
					
					<Contact/>

					<div class="copyright">
						&copy; Untitled Design: <a href="https://templated.co/">TEMPLATED</a>. Images <a href="https://unsplash.com/">Unsplash</a>. Video <a href="http://coverr.co/">Coverr</a>.
					</div>
				</div>
		</footer>
	);
}

export default Footer;
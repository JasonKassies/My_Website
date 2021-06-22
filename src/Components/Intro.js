import React from 'react';
import Jason1 from './images/Jason1.JPG'

const intro = () => {
    return (
            <section id="one" class="wrapper style2">
				<div class="inner">
						<div class="box">
							<div class="image fit">
								<img src={Jason1} alt="Jason1" />
							</div>
							<div class="content">
								<header class="align-center">
									<h2>Jason Andrew Kassies</h2>
									<p>Full Stack developer</p>
								</header>
								<hr/>
								<p>My first experience with programming was in 2016 in my first year of college, I had to take a C programming class and I absolutely loved it.  After completing first year of that program, I transfered into Software Engineering and never looked back.  While I was in school, I gained a wide array of knowledge about all kinds of technologies and languages.  I have also discovered a new passion of mine, for always thinking about how the technology I am using is implemented, I find myself always wondering what the code looks like and how it connects to the world around it.  </p>
								<p>  </p>
							</div>
						</div>
				</div>
			</section>
    );
}

export default intro;
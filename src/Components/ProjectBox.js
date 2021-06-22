import React from 'react';
import Project from './Project';
import Jason2 from './images/Jason2.jpg'
import Jason3 from './images/Jason3.jpg'


const ProjectBox = () => {

	return (
		
		<div>
			<section id="three" class="wrapper style2">
				<div class="inner">
					<div class="grid-style">
						<div>
							<Project title={"Development Experience"}
							body={"Over the last 5 years I have used many languages and technologies, with that comes an ability to learn new things quickly and how to solve problems that come with learning new things. Although my experience may have a little bit of everything, I do default to writing C# or C++ in a Visual Studio IDE."}
							pic={Jason2}/>
						</div>

						<div>
							<Project title={"Part Time Job"}
							body={"I first got my security license in 2019, I got it because I needed a part time job while in school to help pay rent and I figured it would be better than going back to Tim Horton's. I quickly fell in love with the job, and hope to continue to work as security on weekends and meet new people when COVID allows for it."}
							pic={Jason3}/>
						</div>
					</div>
				</div>
			</section>

		</div>
	);
}

export default ProjectBox;
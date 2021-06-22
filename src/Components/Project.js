import React from 'react';


const Project = (props) => {
    return (
		
		<div class="box">
			<div class="image fit">
				<img src={props.pic} alt="" />
			</div>
			<div class="content">
				<header class="align-center">
					<h2>{props.title}</h2>
					<p></p>
				</header>
				<hr />
				<p>{props.body}</p>
			</div>
		</div>
		
    );
}

export default Project;
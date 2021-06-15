import React from 'react';

const externalbtn = (props) => {
    return (
		<div>
			<header>
				<h3>{props.title}</h3>
			</header>
			
			<ul class="actions">
				<li><a href={props.link} target="_blank" class="button alt" rel="noreferrer">{props.text}</a></li>
			</ul>
		</div>
    );
}

export default externalbtn;
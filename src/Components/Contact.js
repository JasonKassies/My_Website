import React from 'react';

const Contact = () => {
    return (
		
		<section>
			<div class="box">
				<div class="content">
					<h2 class="align-center">Get in Touch</h2>
					<hr />
					<form data-netlify="true" method="post" name="emailForm">
						<div class="field half first">
							<label for="name">Name</label>
							<input name="name" id="name" type="text" placeholder="Name" />
						</div>
						<div class="field half">
							<label for="email">Email</label>
							<input name="email" id="email" type="email" placeholder="Email" />
						</div>
						
						<div class="field">
							<label for="message">Message</label>
							<textarea name="message" id="message" rows="6" placeholder="enter your message here" /> 
						</div>
						<div>
							<ul class="actions align-center">
								<li>
									<input value="Send Message" class="button special" type="submit" />
								</li>
							</ul>
						</div>
					</form>
				</div>
			</div>
		</section>

	);
}

export default Contact;
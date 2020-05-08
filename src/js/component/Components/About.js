import React from "react";
import codeMatrix from "../../../img/matrix-code.jpg";

export class About extends React.Component {
	render() {
		return (
			<section className="sec about" id="about">
				<div className="container content">
					<div className="row mxw justify-content-center">
						<h3>Who We Are</h3>
						<p className="text-center">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore
							eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia
							deserunt mollit anim id est laborum.
						</p>
						<button type="button" className="btn btn-dark">
							Read Our Story
						</button>
					</div>
				</div>
			</section>
		);
	}
}

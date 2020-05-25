import React from "react";

export class Services extends React.Component {
	render() {
		return (
			<section className="sec services" id="services">
				<div className="container content">
					<div className="row mxw justify-content-center">
						<div className="col-lg-12">
							<h3>My Languages</h3>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-lg-12">
							<ul className="list-group list-group-horizontal-md">
								<i
									data-aos="zoom-in"
									className="list-group-item devicon-html5-plain-wordmark DevLogo"
								/>
								<i
									data-aos="zoom-in"
									className="list-group-item devicon-css3-plain-wordmark DevLogo"
								/>
								<i
									data-aos="zoom-in"
									className="list-group-item devicon-photoshop-line DevLogo"
								/>
								<i
									data-aos="zoom-in"
									className="list-group-item devicon-bootstrap-plain DevLogo"
								/>
								<i
									data-aos="zoom-in"
									className="list-group-item devicon-javascript-plain DevLogo"
								/>
								<i
									data-aos="zoom-in"
									className="list-group-item devicon-nodejs-plain-wordmark DevLogo"
								/>
							</ul>

							<ul className="list-group list-group-horizontal-md">
								<i
									data-aos="zoom-in"
									className="list-group-item devicon-react-original-wordmark DevLogo"
								/>
								<i
									data-aos="zoom-in"
									className="list-group-item devicon-php-plain DevLogo"
								/>
								<i
									data-aos="zoom-in"
									className="list-group-item devicon-mysql-plain-wordmark DevLogo"
								/>
								<i
									data-aos="zoom-in"
									className="list-group-item devicon-git-plain-wordmark DevLogo"
								/>
								<i
									data-aos="zoom-in"
									className="list-group-item devicon-webpack-plain-wordmark DevLogo"
								/>
								<i
									data-aos="zoom-in"
									className="list-group-item devicon-wordpress-plain-wordmark DevLogo"
								/>
							</ul>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

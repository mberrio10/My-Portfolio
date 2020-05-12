import React from "react";
import bgBanner from "../../../img/bg-banner.jpg";
import myAvatar from "../../../img/myAvatar.png";
import { Parallax } from "react-parallax";

export class Banner extends React.Component {
	render() {
		return (
			<div className="jumbotron text-white rounded bg-dark">
				<div className="container-fluid">
					<div className="row mb-2 justify-content-end">
						<img className="bgBanner" src={bgBanner} />
						<img className="img-fluid myAvatar" src={myAvatar} />
						<div className="col-lg-7 px-0">
							<h1 className="display-4 text-right">
								Hey! I`m Mike B. <br />
								<span>Full Stack Web Developer</span>
							</h1>
							<p className="lead my-3 text-right font-italic">
								Here to make your bussines Groovy!
							</p>
							<div className="row iconFooter justify-content-end">
								<ul>
									<a
										href="https://github.com/mberrio10"
										className="fab fa-github"
									/>
									<a
										href="https://www.linkedin.com/in/mikeberrio/"
										className="fab fa-linkedin"
									/>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
